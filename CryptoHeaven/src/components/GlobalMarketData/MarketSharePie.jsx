import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const COLORS = [
  "#f7931a",
  "#627eea",
  "#26a17b",
  "#f0b90b",
  "#00aaff",
  "#6e56cf",
  "#23292f",
  "#ba55d3",
  "#ff9900",
  "#cc3333",
];

export default function MarketSharePie({ data }) {
  const pieData = Object.entries(data).map(([key, val]) => ({
    name: key.toUpperCase(),
    value: Number(val),
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {pieData.map((_, idx) => (
            <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
