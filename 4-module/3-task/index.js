function highlight(table) {
  let rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        if (cells[3].getAttribute('data-available') == 'true') {
          rows[i].classList.add(`available`)
        } else if (cells[3].getAttribute('data-available') == 'false') {
          rows[i].classList.add(`unavailable`)
        } else {
          rows[i].setAttribute(`hidden`, "true")
        };

        if (cells[2].innerText == "m") {
          rows[i].classList.add(`male`)
        } else if (cells[2].innerText == "f") {
          rows[i].classList.add(`female`)
        }

        if (parseInt(cells[1].innerText) < 18){
          rows[i].setAttribute('style', "text-decoration: line-through")
        }
    };
}
