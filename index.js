/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const freelancerArray = [
        {name:"Alice", occupation: "Writer", price: 40,},
        {name:"Bob", occupation: "Teacher", price: 30},
        {name:"Carol", occupation: "Programmer", price: 175},
        {name:"Dave", occupations: "Designer", price: 100},
        {name:"Eve", occupation: "Engineer", price: 200}
]

const body = document.querySelector("body");

const container = document.createElement("div");
const tableContainer = document.createElement("div");
body.append(container);

const h1 = document.createElement("h1");
h1.textContent = "The Freelancer Forum";
container.append(h1);
container.append(tableContainer);

const table = document.createElement("table");
tableContainer.append(table);

const tableHeader = document.createElement("th");
table.append(tableHeader);

const tableRow = document.createElement("tr");
table.append(tableRow);

const tableData = document.createElement("td");
tableRow.append(tableData);


