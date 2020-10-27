/* Setup interface */

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

/* Setup student objects */

const student1 = {
    firstName: 'Frodo',
    lastName: 'Baggins',
    age: 23,
    location: 'The Shire'
}

const student2 = {
    firstName: 'Bilbo',
    lastName: 'Baggins',
    age: 44,
    location: 'The Shire'
}

const arr: Student[] = [];
arr.push(student1);
arr.push(student2);

/* Manipulate DOM */

const body: HTMLElement = document.body;
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

table.innerHTML = `
  <thead>
    <tr>
      <th colspan="2">Students</th>
    </tr>
  </thead>`;

body.appendChild(table);
table.appendChild(tbody);

arr.forEach(({ firstName, location }: Student) => {
    const tr: HTMLTableRowElement = document.createElement('tr');
    const nameCell: HTMLTableDataCellElement = document.createElement('td');
    const locationCell: HTMLTableCellElement = document.createElement('td');

    nameCell.textContent = firstName;
    locationCell.textContent = location;
  
    tr.appendChild(nameCell);
    tr.appendChild(locationCell);
  
    tbody.appendChild(tr);
});
