// cuando analizas primero el nodo te fijas right left devolves nodo
// te fijas del right el right left y devolves el nodo
// te fijas del right el right left y devolves el node
// cuando encontras el numero buscado retornas true

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | null)[] = [head];
    while (q.length) {
        const curr = q.shift() as BinaryNode<number> | undefined | null;
        if (!curr) {
            continue;
        }

        // search
        if (curr.value === needle) {
            return true;
        }

        q.push(curr.left);
        q.push(curr.right);
    }
    return false;
}
