function getData() {
  fetch("https://api.covid19api.com/summary")
    .then((res) => res.json())
    .then((data) => {
      let tableValue = document.getElementById("table-value");
      for (var i = 1; i < data["Countries"].length; i++) {
        let row = tableValue.insertRow();

        // cell 1
        row.insertCell(0);
        tableValue.rows[i].cells[0].innerHTML =
          data["Countries"][i - 1]["Country"];

        tableValue.rows[i].cells[0].style.background = "#fff";
        tableValue.rows[i].cells[0].style.textAlign = "left";
        tableValue.rows[i].cells[0].style.fontSize = "17px";

        //cell 2
        row.insertCell(1);
        tableValue.rows[i].cells[1].innerHTML =
          data["Countries"][i - 1]["TotalConfirmed"];

        tableValue.rows[i].cells[1].style.background = "#f0f8ff";
        tableValue.rows[i].cells[1].style.color = "#000";

        //cell 3
        row.insertCell(2);
        tableValue.rows[i].cells[2].innerHTML =
          data["Countries"][i - 1]["TotalRecovered"];

        tableValue.rows[i].cells[2].style.background = "#f0ffff";
        tableValue.rows[i].cells[2].style.color = "#000";

        //cell 4
        row.insertCell(3);
        tableValue.rows[i].cells[3].innerHTML =
          data["Countries"][i - 1]["TotalDeaths"];

        tableValue.rows[i].cells[3].style.background = "#00ffff";
        tableValue.rows[i].cells[3].style.color = "#000";

        //cell 5
        row.insertCell(4);
        tableValue.rows[i].cells[4].innerHTML =
          data["Countries"][i - 1]["NewConfirmed"];

        tableValue.rows[i].cells[4].style.background = "#f2f3f4 ";
        tableValue.rows[i].cells[4].style.color = "#000";

        //cell 6
        row.insertCell(5);
        tableValue.rows[i].cells[5].innerHTML =
          data["Countries"][i - 1]["NewRecovered"];

        tableValue.rows[i].cells[5].style.background = "#ace5ee";
        tableValue.rows[i].cells[5].style.color = "#000";

        //cell 7
        row.insertCell(6);
        tableValue.rows[i].cells[6].innerHTML =
          data["Countries"][i - 1]["NewDeaths"];

        tableValue.rows[i].cells[6].style.background = "#e7feff";
        tableValue.rows[i].cells[6].style.color = "#000";
      }
    });
}
