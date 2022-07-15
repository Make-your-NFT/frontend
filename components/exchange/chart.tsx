import styles from "components/exchange/chart.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const getMonthList = () => {
    const today = new Date();
    const monthList = [];

    const currentYear: number = today.getFullYear();
    const currentMonth: string = ("0" + (today.getMonth() + 1)).slice(-2);
    let year: number = currentYear;
    let month: number = Number(currentMonth);

    for (let i = 0; i < 6; i++) {
      if (month > 0) {
        monthList.push(`${month}월`);
        month--;
      } else {
        year--;
        month = 12;
        monthList.push(`${year}-${month}`);
      }
    }

    return monthList.reverse();
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: "top" as const,
      },
      title: {
        display: false,
        // text: "Chart.js Line Chart",
      },
    },
  };

  const labels = getMonthList();

  const data = {
    labels,
    datasets: [
      {
        label: "시세",
        data: [90, 20, 50, 10, 40, 50, 30],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "Dataset 2",
      //   data: [20, 20, 10, 40, 50, 30, 70],
      //   borderColor: "rgb(53, 162, 235)",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };

  return (
    <article className={styles.layout}>
      <Line options={options} data={data} />
    </article>
  );
};

export default Chart;
