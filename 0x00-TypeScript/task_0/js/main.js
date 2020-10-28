/* Setup interface */
/* Setup student objects */
var student1 = {
    firstName: 'Frodo',
    lastName: 'Baggins',
    age: 23,
    location: 'The Shire'
};
var student2 = {
    firstName: 'Bilbo',
    lastName: 'Baggins',
    age: 44,
    location: 'The Shire'
};
var arr = [];
arr.push(student1);
arr.push(student2);
/* Manipulate DOM */
var body = document.body;
var table = document.createElement('table');
table.innerHTML = "\n  <thead>\n    <tr>\n      <th colspan=\"2\">Students</th>\n    </tr>\n  </thead>";
body.appendChild(table);
