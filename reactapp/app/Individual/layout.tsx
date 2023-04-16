export default function IndividualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="row">
        <div className="col-12 col-md-2">
          <p>Form Nav</p>
        </div>
        <div className="col-12 col-md-10">
          <h1 className={"display-4 mb-4"}>Individual Layout</h1>
          {children}
        </div>
      </div>
    </main>
  );
}
