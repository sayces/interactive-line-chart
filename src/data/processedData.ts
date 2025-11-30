import rawData from "./data.json";

interface RawVariation {
  id?: number;
  name: string;
}

interface Variation {
  id: string;
  name: string;
}
interface DayData {
  date: string;
  visits: Record<string, number>;
  conversions: Record<string, number>;
}

const rawVariations: RawVariation[] = rawData.variations;

const variations: Variation[] = rawVariations.map((variation) => ({
  id: variation.id?.toString() ?? "0",
  name: variation.name,
}));

export const chartData = (rawData.data as DayData[]).map((day) => {
  const entry: Record<string, number | string> = { date: day.date };

  variations.forEach((variation) => {
    const visits = day.visits[variation.id] ?? 0;
    const conversions = day.conversions[variation.id] ?? 0;

    const conversionRate = visits > 0 ? (conversions / visits) * 100 : 0;

    entry[variation.name] = Number(conversionRate.toFixed(2));
  });

  return entry;
});
