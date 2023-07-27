export function formatData(data: string, currentDivider: string, divider="-") {
    const dateInfo = data.split(" ");

    return Array.isArray(dateInfo) ? dateInfo[0].split(currentDivider).join(divider) : dateInfo;
}