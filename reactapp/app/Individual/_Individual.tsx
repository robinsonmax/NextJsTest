import CsWidget from "@/components/Widget/Widget";
import { Get } from "@/ts/ApiController";

export type Individual = {
  id: number;
  firstName?: string;
  surname?: string;
  dateOfBirth?: Date;
  startDate?: Date;
  endDate?: Date;
};

export default async function Individual() {
  const data: Individual = await Get(`Individual?id=${1}`);

  return (
    <CsWidget title="Temp">
      <p>This is the individual</p>
      <p>ID: {data.id}</p>
      <p>First Name: {data.firstName || "NULL"}</p>
    </CsWidget>
  );
}
