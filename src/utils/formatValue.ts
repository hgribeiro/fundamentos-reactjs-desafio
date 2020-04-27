const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'brl',
    currencyDisplay: 'symbol',
  }).format(value);

export default formatValue;
