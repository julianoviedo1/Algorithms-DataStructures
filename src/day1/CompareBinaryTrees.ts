// comparing trees with each node element.

export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    // Base cases
    // this is a structural check
    if (a === null && b === null) {
        return true;
    }

    // this is a structural check
    if (a === null || b === null) {
        return false;
    }

    // this is a value check
    if (a.value !== b.value) {
        return false;
    }

    // recursion
    return compare(a?.left, b?.left) && compare(a?.right, b?.right);
}
