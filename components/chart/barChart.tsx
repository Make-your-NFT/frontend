import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import { useState, useEffect, useRef } from "react";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

const Barchart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      setChartData({
        datasets: [],
      });
    }
  }, []);

  return <Bar data={chartData} />;
};

export default Barchart;
