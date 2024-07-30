type CurrencyOptions = "GBP" | "USD";

export function convertToCurrency(
    value: number,
    currency: CurrencyOptions = "GBP"
) {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency,
    }).format(value);
}
