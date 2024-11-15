export function formatCurrency(
    amount: number, 
    currency: string = "USD"
) : string {
    try {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency.toUpperCase(),
        }).format(amount);
    } catch (error) {
        console.error("Invalid currency code:", currency, error);
        return `${currency.toUpperCase()} ${amount.toFixed(2)}`;
    }
}