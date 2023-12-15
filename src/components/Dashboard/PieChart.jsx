import { PieChart } from "@mui/x-charts";
import { data } from "./DummyPieChart";

function ChartPie() {
  return (
    <>
      <PieChart
        height={200}
        series={[data]}
        colors={["red", "orange", "blue"]}
      />
    </>
  );
}

export default ChartPie