import Cookies from "universal-cookie";

export const PREFERRED_THEME_COOKIE = "theme.preference";
export const DEVICE_THEME_COOKIE = "theme.device";

export enum Themes {
  Auto = "auto",
  Light = "light",
  Dark = "dark",
}

/**
 * Get's the preferred color scheme from the browser
 * @returns The device theme
 */
export const GetDeviceTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return Themes.Dark;
  }

  return Themes.Light;
};

/**
 * Gets which theme needs to be rendered for the current theme
 * @param theme The theme to check
 * @returns Light or Dark theme
 */
export const GetActualTheme = (theme: Themes) => {
  return theme == Themes.Auto ? GetDeviceTheme() : theme;
};

/**
 * Gets the current theme based off the cookie
 */
export const GetCurrentTheme = () => {
  return new Cookies().get(PREFERRED_THEME_COOKIE) || Themes.Auto;
};

/**
 * Sets the theme of the app and the cookies associated with it
 * @param theme The theme to set the app to
 * @param skipDeviceThemeUpdate Prevents updating the device theme
 * @param cookies A cookies object if one already exists
 * @returns Nothing
 */
export const SetTheme = (
  theme: Themes,
  skipDeviceThemeUpdate: boolean = false,
  cookies: Cookies = new Cookies()
) => {
  cookies.set(PREFERRED_THEME_COOKIE, theme, { path: "/" });

  if (!skipDeviceThemeUpdate) UpdateDeviceTheme();

  let htmlElement = document.querySelector("html");
  if (!htmlElement) return;
  htmlElement.setAttribute("data-bs-theme", GetActualTheme(theme));
};

/**
 * Updates the device theme cookie and updates the current theme
 * if the current theme if it's set to automatic (incase the
 * device theme has changed since it was last updated)
 */
export const UpdateDeviceTheme = () => {
  const cookies = new Cookies();
  let deviceTheme = GetDeviceTheme();
  cookies.set(DEVICE_THEME_COOKIE, deviceTheme, { path: "/" });

  let preferredTheme = cookies.get(PREFERRED_THEME_COOKIE);
  if (preferredTheme === undefined || preferredTheme === Themes.Auto) {
    SetTheme(Themes.Auto, true, cookies);
  }
};
