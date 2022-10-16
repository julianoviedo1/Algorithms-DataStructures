function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIndex = partition(arr, lo, hi);

    qs(arr, lo, pivotIndex - 1);
    qs(arr, pivotIndex + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    let p = arr[hi];
    let index = lo - 1;

    for (let i = lo; i < hi; i++) {
        if (arr[i] <= p) {
            ++index;
            const temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    index++;
    arr[hi] = arr[index];
    arr[index] = p;

    // return where do we split the array
    return index;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
