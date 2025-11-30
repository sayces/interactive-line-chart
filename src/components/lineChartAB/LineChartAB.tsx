import styles from "./LineChartAB.module.css";
import { CustomTooltip } from "../tooltip/CustomTooltip";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "../../data/processedData";

const COLORS = {
  Original: "#94a3b8",
  "Variation A": "#f59e0b",
  "Variation B": "#10b981",
  "Variation C": "#8b5cf6",
};

const LineChartAB = () => {
  return (
    <div className={styles.wrapper}>
      <ResponsiveContainer width="100%" height={620}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 40, left: 20, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="4 6" stroke="#e2e8f0" />

          <XAxis
            dataKey="date"
            angle={-45}
            textAnchor="end"
            height={90}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => {
              const date = new Date(value);
              return `${date.getDate()}.${String(date.getMonth() + 1).padStart(
                2,
                "0"
              )}`;
            }}
          />

          <YAxis
            label={{
              value: "Конверсия, %",
              angle: -90,
              position: "insideLeft",
              style: { fontSize: 14 },
            }}
            domain={[0, "dataMax + 5"]}
            tick={{ fontSize: 13 }}
          />

          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={50}
            iconType="line"
            wrapperStyle={{ paddingTop: "10px" }}
          />

          {Object.keys(COLORS).map((name) => (
            <Line
              key={name}
              type="monotone"
              dataKey={name}
              stroke={COLORS[name as keyof typeof COLORS]}
              strokeWidth={3}
              dot={{ r: 4, fill: COLORS[name as keyof typeof COLORS] }}
              activeDot={{ r: 7 }}
              name={name}
              connectNulls={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartAB;
