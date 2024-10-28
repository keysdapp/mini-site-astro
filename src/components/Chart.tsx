import { onMount, splitProps } from 'solid-js';
import { Chart, Title, Tooltip, Legend, Colors } from 'chart.js';
import { Line } from 'solid-chartjs';
import { type TeamChartData, type TeamsChartData } from '@lib/types';

const MONTHS_SINCE_SEPTEMBER = (new Date().getMonth() - 7) % 12;
const MONTHS = [
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
].slice(0, MONTHS_SINCE_SEPTEMBER);

const hexToRgba = (hexColor: string, alpha: number) => {
  hexColor = hexColor.replace(/^#/, '');

  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const TeamChart = (props: TeamChartData) => {
  onMount(() => {
    Chart.register(Title, Tooltip, Legend, Colors);
    Chart.defaults.color = getComputedStyle(document.body).getPropertyValue('--copy');
    Chart.defaults.font.family = getComputedStyle(document.body).getPropertyValue('--text-font');
    Chart.defaults.font.size = 16;
  })

  const chartData = {
    labels: MONTHS,
    datasets: [
      {
        name: props.team.name,
        label: props.team.name,
        data: props.pointEvents,
        backgroundColor: hexToRgba(props.team.color, 0.3),
        borderColor: props.team.color,
        pointBackgroundColor: props.team.color,
        pointBorderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style="min-height: 350px;">
      <Line data={chartData} options={chartOptions} />
    </div>
  )
};

export const TeamsChart = (props: TeamsChartData) => {
  onMount(() => {
    Chart.register(Title, Tooltip, Legend, Colors);
    Chart.defaults.color = getComputedStyle(document.body).getPropertyValue('--copy');
    Chart.defaults.font.family = getComputedStyle(document.body).getPropertyValue('--text-font');
    Chart.defaults.font.size = 16;
  })

  const chartData = {
    labels: MONTHS,
    datasets: props.teams.map((team, index) => ({
      name: team.name,
      label: team.name,
      data: props.pointEvents[index],
      backgroundColor: hexToRgba(team.color, 0.3),
      borderColor: team.color,
      pointBackgroundColor: team.color,
      pointBorderColor: "#fff",
      borderWidth: 1,
    })),
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style="min-height: 350px;">
      <Line data={chartData} options={chartOptions} />
    </div>
  )
};
