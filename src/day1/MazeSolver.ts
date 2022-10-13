type Point = { x: number; y: number };

export function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    start: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    const movements = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    // basecases
    // edges
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }

    // recursion
    seen[curr.y][curr.x] = true;
    path.push(curr);

    for (let i = 0; i < movements.length; i++) {
        const [x, y] = movements[i];
        if (
            walk(
                maze,
                wall,
                { x: curr.x + x, y: curr.y + y },
                end,
                start,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, start, seen, path);
    return path;
}
