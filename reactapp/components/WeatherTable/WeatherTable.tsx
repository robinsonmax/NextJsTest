export interface iWeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary?: string;
}

async function getWeatherData() {
  const response = await fetch("http://localhost:3000/api/v1/WeatherForecast", {
    cache: "no-store",
  });
  const data = await response.json();
  return data as iWeatherForecast[];
}

export const LoadingTable = () => {
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

  console.log("We loaded now");
  console.log(weatherData);

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
              <td>{forecast.date}</td>
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
