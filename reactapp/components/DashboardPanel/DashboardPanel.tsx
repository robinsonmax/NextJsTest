import { Get } from "@/ts/ApiController";
import CsWidget from "../Widget/Widget";

export type DashboardPanel = {
  asOf: Date;
  title: string;
  panelJson: string;
};

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
  const data: DashboardPanel = await Get(`dashboard?id=${panelId}`, {
    next: {
      revalidate: 15,
    },
  });

  return (
    <CsWidget title={data.title}>
      <p>Last Updated: {data.asOf.toString()}</p>
      <p className="mb-0">JSON: {data.panelJson || "Not Provided"}</p>
    </CsWidget>
  );
}
