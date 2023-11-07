export function formatCurrecncy(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}
