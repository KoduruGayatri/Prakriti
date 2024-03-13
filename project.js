let scope1Inputs = {};
let scope2Inputs = {};
let scope3Inputs = {};

function storeScope1Input() {
  scope1Inputs = {
    dieselConsumedPerMonth: parseFloat(
      document.getElementById("dieselConsumedPerMonth").value
    ),
    ambulanceDiesel: parseFloat(
      document.getElementById("ambulanceDiesel").value
    ),
    // Add similar lines for other Scope 1 variables
  };
}

function storeScope2Input() {
  scope2Inputs = {
    electricityConsumption: parseFloat(
      document.getElementById("electricityConsumption").value
    ),
    // Add similar lines for other Scope 2 variables
  };
}

function storeScope3Input() {
  scope3Inputs = {
    businessTravelMiles: parseFloat(
      document.getElementById("businessTravelMiles").value
    ),
    wasteDisposalKm: parseFloat(
      document.getElementById("wasteDisposalKm").value
    ),
    constructionMaterialsKm: parseFloat(
      document.getElementById("constructionMaterialsKm").value
    ),
    // Add more lines for other Scope 3 variables
  };
}

function calculateScope1Emissions() {
  storeScope1Input();
  // Implement calculations based on the provided formulas for Scope 1
  // Use the scope1Inputs object to access user input
  // Display the result or store it as needed
}

function calculateScope2Emissions() {
  storeScope2Input();
  // Implement calculations based on the provided formulas for Scope 2
  // Use the scope2Inputs object to access user input
  // Display the result or store it as needed
}

function calculateScope3Emissions() {
  storeScope3Input();
  // Implement calculations based on the provided formulas for Scope 3
  // Use the scope3Inputs object to access user input
  // Display the result or store it as needed
}

// Function to calculate total emissions (you can complete this part based on your provided formulas)
function calculateTotalEmissions() {
  // Implement the total emissions calculation using the stored inputs
  // Display or store the final result
}
