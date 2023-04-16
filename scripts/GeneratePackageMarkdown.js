//import { readFileSync, writeFileSync } from "fs";
const fs = require("fs");

const PJSON_PATH = "reactapp/package.json";
const PJSON_LOCK_PATH = "reactapp/package-lock.json";
//const CSPROJ_PATH = "webapi/webapi.csproj"
const MARKDOWN_PATH = "./packages.md";

const GetPackages = (path) => {
  let fileData = fs.readFileSync(path, "utf8");
  return JSON.parse(fileData);
};

const GetPackageData = async (packageId) => {
  const packageData = await fetch("https://registry.npmjs.org/" + packageId);
  return packageData.json();
};

const GetFormattedPackageData = async (packageId, installedPackages) => {
  let pd = await GetPackageData(packageId);

  let installedVersion =
    installedPackages["node_modules/" + packageId]["version"];
  let latestVersion = pd["dist-tags"]["latest"];

  let status;
  if (installedVersion == latestVersion) {
    status = "🟢";
  } else {
    let installedVersionNumbers = installedVersion.split(".");
    let latestVersionNumbers = latestVersion.split(".");

    if (installedVersionNumbers[0] > latestVersionNumbers[0]) {
      status = "🟣"
    } else if (installedVersionNumbers[0] != latestVersionNumbers[0]) {
      status = "🔴";
    } else if (installedVersionNumbers[1] > latestVersionNumbers[1]) {
      status = "🟣"
    } else if (installedVersionNumbers[1] != latestVersionNumbers[1]) {
      status = "🟠";
    } else if (installedVersionNumbers[2] > latestVersionNumbers[2]) {
      status = "🟣"
    } else if (installedVersionNumbers[2] != latestVersionNumbers[2]) {
      status = "🟡";
    } else {
      status = "🔴";
    }
  }

  return (
    `|${status}` +
    `|${installedVersion}` +
    `|${pd["dist-tags"]["latest"]}` +
    `|${pd["name"]}` +
    `|${pd["description"]}` +
    `|${pd["license"]}` +
    `|[NPM](https://www.npmjs.com/package/${packageId})` +
    `|[Vulnerabilities](https://security.snyk.io/package/npm/${packageId})` +
    "|"
  );
};

const GetAllPackagesFormatted = async (
  packages,
  installedPackages
) => {
  console.log("Generating summary of packages");

  let packageMarkdown = {};

  await Promise.all(
    Object.keys(packages).map(async (packageId) => {
      packageMarkdown[packageId] = await GetFormattedPackageData(
        packageId,
        installedPackages
      );
    })
  );

  let md = "";
  Object.keys(packages)
    .sort()
    .forEach((key) => {
      md += packageMarkdown[key] + "\n";
    });
  return md;
};

const main = async () => {
  let date = new Date();

  let packages = GetPackages(PJSON_PATH)["dependencies"];
  let installedPackages = GetPackages(PJSON_LOCK_PATH)["packages"];

  let md = `# NPM Packages
*Last Updated ${date.toLocaleDateString()} ${date.toLocaleTimeString()}*
| |Using|Latest|Package Name|Description|License|NPM|Vulnerabilities|
|-|-----|------|------------|-----------|-------|---|---------------|
${await GetAllPackagesFormatted(packages, installedPackages)}
# Key
|Icon|Description                           |Work Required To Update                        |
|----|--------------------------------------|-----------------------------------------------|
|🟢  |Package is on latest version          |*None*                                         |
|🟡  |Newer patch available                 |Shouldn't require any changes                  |
|🟠  |Newer minor version available         |May need to make changes across the application|
|🔴  |Newer major version available         |Will likely need large fundamental changes     |
|🟣  |Package is ahead of the latest version|*None*                                         |
`;

  fs.writeFileSync(MARKDOWN_PATH, md);
  console.log("Done");
};

main();
