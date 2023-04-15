import {
  LoadingTable,
  WeatherTable,
} from "@/components/WeatherTable/WeatherTable";
import Widget from "@/components/Widget/Widget";
import { Suspense } from "react";

export default async function WeatherExample() {
  return (
    <main>
      <h1 className={"display-4 mb-4"}>Weather Forecast Example</h1>
      <Widget title="Results from default API" padBody={false}>
        <Suspense fallback={<LoadingTable />}>
          <WeatherTable />
        </Suspense>
      </Widget>
    </main>
  );
}
