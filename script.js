function mincost(arr) {
    let heap = [...arr].sort((a, b) => a - b); 

    let totalCost = 0;

    while (heap.length > 1) {
        
        let first = heap.shift();
        let second = heap.shift();

        let newRope = first + second;
        totalCost += newRope;

        
        heap.push(newRope);
        heap.sort((a, b) => a - b);
    }

    return totalCost;
}

module.exports = mincost;