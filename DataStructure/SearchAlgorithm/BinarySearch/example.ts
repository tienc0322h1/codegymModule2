// @ts-ignore
function findItemMiss(data: number[]): number[] {
    let i = 1;
    let addWithoutNumbers: number[] = [];
    while (i<=10) {
        if (data.indexOf(i) === -1) {
            addWithoutNumbers.push(i);
        }
        i++;
    }
    return addWithoutNumbers;
}
console.log(findItemMiss([1,2,5,6,7,10]))
