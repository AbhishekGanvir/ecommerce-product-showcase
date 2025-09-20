export function formatCurrency(priceCents) {
    return (priceCents / 8).toFixed(0);
}

export default formatCurrency;