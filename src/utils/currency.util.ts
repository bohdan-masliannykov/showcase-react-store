export function formatCurrency(
  value: number,
  currencySymbol: string = 'USD'
): string {
  if (isNaN(value) || value === null) return '';

  const formattedValue = value?.toLocaleString(undefined, {
    style: 'currency',
    currency: currencySymbol,
  });

  return formattedValue;
}
