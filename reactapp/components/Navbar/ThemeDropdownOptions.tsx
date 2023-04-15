"use client";

import { GetCurrentTheme, SetTheme, Themes } from "@/ts/Themes";
import { useState } from "react";
import { NavDropdown } from "react-bootstrap";

export default function ThemeDropdownOptions() {
  const [currentTheme, setCurrentTheme] = useState<Themes>(GetCurrentTheme());

  const UpdateTheme = (theme: Themes) => {
    setCurrentTheme(theme);
    SetTheme(theme);
  };

  return (
    <>
      <NavDropdown.Item
        onClick={() => UpdateTheme(Themes.Auto)}
        active={currentTheme === Themes.Auto}
      >
        Auto
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => UpdateTheme(Themes.Light)}
        active={currentTheme === Themes.Light}
      >
        Light
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => UpdateTheme(Themes.Dark)}
        active={currentTheme === Themes.Dark}
      >
        Dark
      </NavDropdown.Item>
    </>
  );
}
