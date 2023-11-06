// Sample data of freelancers
const freelancersData = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 },
];

const freelancerList = document.getElementById("freelancer-list");
const averagePriceDisplay = document.getElementById("average-price");

let freelancers = [...freelancersData];
let totalStartingPrice = freelancers.reduce((total, freelancer) => total + freelancer.startingPrice, 0);

function updateAveragePrice() {
    const averagePrice = totalStartingPrice / freelancers.length;
    averagePriceDisplay.textContent = `$${averagePrice.toFixed(2)}`;
}

function addFreelancer(freelancer) {
    const listItem = document.createElement("li");
    listItem.textContent = `${freelancer.name} - ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
    freelancerList.appendChild(listItem);
}

function addNewFreelancer() {
    // Simulate new freelancers being added
    const newFreelancer = {
        name: "Carol",
        occupation: "Programmer",
        startingPrice: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
    };

    freelancers.push(newFreelancer);
    totalStartingPrice += newFreelancer.startingPrice;
    addFreelancer(newFreelancer);
    updateAveragePrice();
}

// Initial setup
freelancers.forEach(addFreelancer);
updateAveragePrice();

// Simulate new freelancers being added every few seconds
setInterval(addNewFreelancer, 5000); // Add a new freelancer every 5 seconds
