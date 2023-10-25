function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var feet = parseFloat(document.getElementById("feet").value);
    var inches = parseFloat(document.getElementById("inches").value);

    // Check if any of the inputs are negative
    if (weight < 0 || feet < 0 || inches < 0) {
        document.getElementById("error").style.display = "block";
        return;
    } else {
        document.getElementById("error").style.display = "none";
    }

    // Convert height to meters
    var heightInMeters = (feet * 0.3048) + (inches * 0.0254);

    var bmi = weight / (heightInMeters * heightInMeters);

    var result = "Your BMI is " + bmi.toFixed(2) + ". ";

    if (bmi < 18.5) {
        result += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result += "You have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        result += "You are overweight.";
    } else {
        result += "You are obese.";
    }

    document.getElementById("result").textContent = result;
}
