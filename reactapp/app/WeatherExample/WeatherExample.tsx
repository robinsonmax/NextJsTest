"use client";

import ForecastTable from "@/components/WeatherExample/ForecastTable";
import { useEffect, useState } from "react";

export default function WeatherExample() {
  const [loading, setLoading] = useState<Boolean>(true);
  const [forecasts, setForecasts] = useState<any[]>();

  const getWeatherData = async () => {
    const response = await fetch("api/v1/weatherforecast");
    const data = await response.json();
    setLoading(false);

    if (Array.isArray(data)) {
      setForecasts(data);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  let contents =
    loading || forecasts === undefined ? (
      <p>
        <em>
          Loading... Please refresh once the ASP.NET backend has started. See{" "}
          <a href="https://aka.ms/jspsintegrationreact">
            https://aka.ms/jspsintegrationreact
          </a>{" "}
          for more details.
        </em>
      </p>
    ) : (
      ForecastTable(forecasts)
    );

  return (
    <>
      <h1>Weather Example</h1>
      <p>This is an example page using the default API</p>
      <br />
      {contents}
    </>
  );
}
