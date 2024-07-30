export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' };
    const formattedDate = new Intl.DateTimeFormat(undefined, options).format(date);
    return formattedDate
}
