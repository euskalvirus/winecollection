import { getWines } from "./excel";

export function getStats() {
  const wines = getWines();

  return {
    totalWines: wines.length,
    locations: new Set(
      wines.map(
        (w: any) => w.ubicacion
      )
    ).size,
  };
}
