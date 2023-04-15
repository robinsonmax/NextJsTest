import { Get } from "@/ts/ApiController";
import CsWidget from "../Widget/Widget";

export interface iDashboardPanel {
  asOf: Date;
  title: string;
  panelJson: string;
}

async function getPanelData(panelId: number) {
  const data = await Get(`dashboard?id=${panelId}`, {
    next: {
      revalidate: 15,
    },
  });
  return data as iDashboardPanel;
}

export const LoadingDashboardPanel = () => {
  return (
    <CsWidget title="Loading" padBody={false}>
      <div className="p-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </CsWidget>
  );
};

export async function DashboardPanel({ panelId }: { panelId: number }) {
  const panelData = await getPanelData(panelId);

  return (
    <CsWidget title={panelData.title}>
      <p>Last Updated: {panelData.asOf.toString()}</p>
      <p className="mb-0">JSON: {panelData.panelJson || "Not Provided"}</p>
    </CsWidget>
  );
}
