import {
  LoadingWeatherTable,
  WeatherTable,
} from "@/components/WeatherTable/WeatherTable";
import CsWidget from "@/components/Widget/Widget";
import { Suspense } from "react";

export default async function WeatherExample() {
  return (
    <main>
      <h1 className={"display-4 mb-4"}>Weather Forecast Example</h1>
      <CsWidget title="Results from default API" padBody={false}>
        <Suspense fallback={<LoadingWeatherTable />}>
          {/* @ts-expect-error Server Component */}
          <WeatherTable />
        </Suspense>
      </CsWidget>
    </main>
  );
}
