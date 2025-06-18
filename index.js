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


// Freelancer Array
const NUM_FREELANCER = [
    {name:"Alice", occupation: "Writer", price: 40},
    {name:"Bob", occupation: "Teacher", price: 30},
    {name:"Carol", occupation: "Programmer", price: 175},
    {name:"Dave", occupation: "Designer", price: 100},
    {name:"Eve", occupation: "Engineer", price: 200}
]

// Function calculates average price
function avgRate(array) {
    const prices = array.map((person) => person.price);
    const total = prices.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
    return (total / prices.length).toFixed(2);
}

// Variable stores body element
const body = document.querySelector("body");

// Variable stores main div element
const container = document.createElement("div");

//Variable stores div container for the freelancer table
const tableContainer = document.createElement("div");
// Appends main div container to body element
body.append(container);

// variable stores header 1 element
const h1 = document.createElement("h1");
// Assigned text to header
h1.textContent = "The Freelancer Forum";
// Append header 1 to main div container
container.append(h1);
// Append div container for table of freelancers to main div container;
container.append(tableContainer);

// Variable stores paragraph element
const p = document.createElement("p");
// Adds text of average rate to paragraph
p.textContent = `The average rate is $${avgRate(NUM_FREELANCER)}`;
// Append paragraph of average rate to header 1
h1.append(p);

// Variable store table element
const table = document.createElement("table");
// Append table to container made for table
tableContainer.append(table);

// Variable stores table header element
const nameHeader = document.createElement("th");
// Variable stores name header for freelancer table;
nameHeader.textContent = "NAME";
// Append name header to table
table.append(nameHeader);

// variable stores occupation table header
const occupationHeader = document.createElement("th");
occupationHeader.textContent = "OCCUPATION";
table.append(occupationHeader);

// variable stores price header for freelancer table
const priceHeader = document.createElement("th");
priceHeader.textContent = "PRICE";
table.append(priceHeader);

// function displays freelancer roster to web page
function displayFreelancers(array) {

    const onePerson  = array.forEach((person)=>{
        const name = person.name;
        const occupation = person.occupation;
        const price = person.price;

        const tableRow = document.createElement("tr");
        table.append(tableRow);

        const nameData = document.createElement("td");
        nameData.textContent = `${person.name}`;
        tableRow.append(nameData);

        const jobData = document.createElement("td");
        jobData.textContent = `${person.occupation}`;
        tableRow.append(jobData);

        const priceData = document.createElement("td");
        priceData.textContent = `$${person.price}`;
        tableRow.append(priceData);
        
    })

}


// call to function to display freelancer roster
displayFreelancers(NUM_FREELANCER);