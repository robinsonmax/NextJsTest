import { Get } from "@/ts/ApiController";

export interface iWeatherForecast {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary?: string;
}

async function getWeatherData() {
  const data = await Get("WeatherForecast");
  return data as iWeatherForecast[];
}

export const LoadingWeatherTable = () => {
  return (
    <div className="p-5 text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export async function WeatherTable() {
  const weatherData = await getWeatherData();

  return (
    <>
      <table
        className="table table-striped table-hover mb-0 table-ignore-bottom-row-border"
        aria-labelledby="tableLabel"
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((forecast, index) => (
            <tr key={index}>
              <td>{forecast.date.toString()}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
