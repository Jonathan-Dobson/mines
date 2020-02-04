export default (r,c,minefield) => {
    let maxGridSize = minefield.length
    return (r >= 0 && r < maxGridSize && c >= 0 && c < maxGridSize)
};
