function graph(row,col) {
  const cell = [];
  for (let rows = 0; rows < row; rows++) {
    cell[rows] = [];
    for (let cols = 0; cols < col; cols++) {
      cell[rows][cols] = ".";
    }
  }
  for(let index = 0; index < row; index++){
    console.log(cell[index].join(""));
  }
}
graph(30,100);
