export function getDailySeed(): number {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return year * 10000 + month * 100 + day;
}
