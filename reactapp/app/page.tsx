import {
  DashboardPanel,
  LoadingDashboardPanel,
} from "@/components/DashboardPanel/DashboardPanel";
import { Suspense } from "react";

export default function Dashboard() {
  const panelIds = [1, 69, 420];

  return (
    <main>
      <h1 className={"display-4 mb-4"}>This is the dashboard</h1>
      <p>
        This example caches each dashboard panel, so subsequent page loads are
        instant after the initial load.
        <br />
        The cache becomes stale after for 15 seconds.
      </p>
      <p>
        TODO: Look at{" "}
        <a
          href="https://github.com/react-grid-layout/react-grid-layout"
          target="_blank"
        >
          react-grid-layout
        </a>{" "}
        for configuring dashboard layouts?
      </p>
      {panelIds.map((panelId) => {
        return (
          <div className="mb-3">
            <Suspense fallback={<LoadingDashboardPanel />}>
              {/* @ts-expect-error Server Component */}
              <DashboardPanel panelId={panelId} />
            </Suspense>
          </div>
        );
      })}
    </main>
  );
}
