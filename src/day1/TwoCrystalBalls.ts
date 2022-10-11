export default function two_crystal_balls(breaks: boolean[]): number {
    const jmp = Math.floor(Math.sqrt(breaks.length));

    let i = jmp;

    for (i; i < breaks.length; i += jmp) {
        if (breaks[i] === true) {
            break;
        }
    }
    i -= jmp;

    let j = 0;
    for (j; j < jmp && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
