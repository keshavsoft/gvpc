var ele = document.getElementById("KDiv");
var heading = document.createElement("h1");
ele.appendChild(heading);
heading.textContent = "keshavSoft";

var tab = document.createElement("table");
ele.appendChild(tab);

var tab_row = document.createElement("tr");
tab.appendChild(tab_row);

var tab_head = document.createElement("th");
tab_row.appendChild(tab_head);

var tab_head2 = document.createElement("th");
tab_row.appendChild(tab_head2);

tab_head.textContent = "Col1";
tab_head2.textContent = "Col2";