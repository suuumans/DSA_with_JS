/**
 Write a function, minimumIsland,that takes in a grid containing W as water and L as land.
 Function should return the size of the smallest island. An island is a vertically and horizontally 
 connected region of land.
 */

 function maxIsland(grid) {}
 // Todo


 function minimumIsland(grid) {

    const rows = grid.length
    const cols = grid[0].length

    const visited = new Set()
    let smallestSize = Infinity

    function exploreSize(r, c) {

        const position = r + ',' + c

        if(r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W' || visited.has(position)) {
            return 0
        }

        visited.add(position)
        let size = 1

        size += exploreSize(r+1, c)
        size += exploreSize(r-1, c)
        size += exploreSize(r, c+1)
        size += exploreSize(r, c-1)

        // size = size + exploreSize(r+1, c)

        return size
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 'L' && !visited.has(r + ',' + c)) {
                const size = exploreSize(r, c)
                if (size < smallestSize) {
                    smallestSize = size
                }
            }
        }
    }
 }