type Node<T> = {
    value?: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.tail = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = node;
        }
        node.prev = this.tail;
        this.tail = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const tail = this.tail;
            this.tail = undefined;
            return tail?.value;
        }

        const last = this.tail;
        this.tail = last?.prev;
        return last?.value;
    }

    peek(): T | undefined {
        return this.tail?.value;
    }
}
