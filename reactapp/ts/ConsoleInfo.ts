import pjson from "@/package.json";

export const UpdateConsole = () => {
  if (process.env.NODE_ENV === "development") return;

  const titleCss =
    "font-size: 36px; font-family: 'century gothic', sans-serif; padding-block: 16px; margin-block: 20px; background: white;";

  let info = [`Version: ${pjson.version}`, "Example Info: 123"];
  let infoString = "";
  info.forEach((line) => {
    infoString += "\n" + line;
  });

  console.clear();

  console.log(
    `%cExample %cLOGO%c${infoString}`,
    `${titleCss} color: #1c437c; padding-left: 30px; border-top-left-radius: 10px; border-bottom-left-radius: 10px;`,
    `${titleCss} color: #ff8600; padding-right: 30px; border-top-right-radius: 10px; border-bottom-right-radius: 10px;`,
    "line-height: 1.2rem;"
  );
};
