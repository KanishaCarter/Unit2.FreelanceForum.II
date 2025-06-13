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
        {name:"Dave", occupation: "Designer", price: 100},
        {name:"Eve", occupation: "Engineer", price: 200}
]

function avgRate(array) {
    const prices = array.map((person) => person.price);
    const total = prices.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
    return (total / prices.length).toFixed(2);
}

const body = document.querySelector("body");

const container = document.createElement("div");
const tableContainer = document.createElement("div");
body.append(container);

const h1 = document.createElement("h1");
h1.textContent = "The Freelancer Forum";
container.append(h1);
container.append(tableContainer);

const p = document.createElement("p");
p.textContent = `The average rate is $${avgRate(freelancerArray)}`;
h1.append(p);


const table = document.createElement("table");
tableContainer.append(table);

const nameHeader = document.createElement("th");
nameHeader.textContent = "NAME";
table.append(nameHeader);

const occupationHeader = document.createElement("th");
occupationHeader.textContent = "OCCUPATION";
table.append(occupationHeader);

const priceHeader = document.createElement("th");
priceHeader.textContent = "PRICE";
table.append(priceHeader);


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
        priceData.textContent = `${person.price}`;
        tableRow.append(priceData);
        
    })

}


displayFreelancers(freelancerArray);