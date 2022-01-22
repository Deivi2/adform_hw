export const camelToText = (value: string) => {
  const result = value.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const toLocaleStringWithCurrency = (
  value: number | string,
  currencyCode: string
) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "symbol",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
