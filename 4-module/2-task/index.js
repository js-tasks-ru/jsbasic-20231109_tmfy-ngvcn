function makeDiagonalRed(table) {
    let rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
            if (i == j) {
                cells[i].style.backgroundColor = "red";
            }
        }
    };
}
