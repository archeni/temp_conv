const printToDom = (divId, stringDom) => {
    document.getElementById(divId).innerHTML = stringDom;
}

const toCelsius =  (inputTemp) => {
    let celciusNum = Math.round(10 * ((inputTemp - 32) * 5) / 9 ) / 10;
    return celciusNum;
}

const toFahrenheit =  (inputTemp) => {
    let fahrenheitNum = Math.round(10 * ((inputTemp * 9) / 5) + 32 ) / 10;
    return fahrenheitNum;
}

// Get a reference to the button element in the DOM
const button = document.getElementById("submitButton");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = () => {
    let finalTemp = 0;
    const celciusButton = document.getElementById("celcius");
    if (celciusButton.checked) {
        finalTemp = toCelsius(inputTemp.value);
    } else {
        finalTemp = toFahrenheit(inputTemp.value);
    }
    return finalTemp;
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", () => {
    printToDom('convertedTemp', determineConverter());
});