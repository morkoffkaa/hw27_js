const bodyElement = document.body;
const table = document.createElement('table');
const tableBody = document.createElement('tbody');
table.appendChild(tableBody);
bodyElement.append(table);
let o = 0;

for (let i = 1; i<=10;i++) {
    let x = document.createElement('tr');
    x.style = "padding: 0 0 5px";
    tableBody.append(x);
    for(let y = 1; y<=10; y++) {
        o++;
        let z = document.createElement('td');
        z.style = "padding: 0 0 0 5px";
        z.innerHTML = o;
        x.append(z);
    }
   
}
