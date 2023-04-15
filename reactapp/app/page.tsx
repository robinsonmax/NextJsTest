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
      {panelIds.map((panelId) => {
        return (
          <div className="mb-3">
            <Suspense fallback={<LoadingDashboardPanel />}>
              <DashboardPanel panelId={panelId} />
            </Suspense>
          </div>
        );
      })}
    </main>
  );
}
