export const currencySymbols: Record<string, string> = {
    'EUR': '€',
    'USD': '$',
    'GBP': '£',
    'JPY': '¥',
    'SEK': 'kr',
};

export function getCurrencySymbol(currencyCode: string): string {
    return currencySymbols[currencyCode] || currencyCode;
}