import CsWidget from "@/components/Widget/Widget";

export default function LoadingIndividual() {
  return (
    <CsWidget title="Loading">
      <div className="p-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </CsWidget>
  );
}
