import styles from "./CustomTooltip.module.css";
import type { TooltipProps } from "recharts";

type CustomTooltipProps = TooltipProps<number, string> & {
  payload?: any[];
  active?: boolean;
  label?: string;
};

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (!active || !payload || payload.length === 0) return null;

  // Сортируем по значению, чтобы победитель был сверху
  const sortedPayload = [...payload].sort(
    (a, b) => (b.value ?? 0) - (a.value ?? 0)
  );

  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipDate}>{label}</p>
      {sortedPayload.map((entry) => (
        <p key={entry.name} style={{ color: entry.color }}>
          {entry.name}: <strong>{entry.value}%</strong>
        </p>
      ))}
    </div>
  );
};
