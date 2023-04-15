"use client";

import { useEffect } from "react";
import { UpdateDeviceTheme } from "@/ts/Themes";
import { UpdateConsole } from "@/ts/ConsoleInfo";

export default function CsOnPageLoad() {
  useEffect(() => {
    UpdateDeviceTheme();
    UpdateConsole();
  }, []);
  return <></>;
}
