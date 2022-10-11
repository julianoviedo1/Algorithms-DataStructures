export default function bs_list(haystack: number[], needle: number): boolean {
    let high = haystack.length;
    let low = 0;
    do {
        let m = Math.floor(low + (high - low) / 2);
        if (haystack[m] === needle) {
            return true;
        } else if (haystack[m] < needle) {
            low = m + 1;
        } else {
            high = m;
        }
    } while (high > low);
    return false;
}
