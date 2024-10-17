function calculateBMI() {
    // Get input values
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;

    // Display health insights based on BMI
    var healthMessage;
    if (bmi < 18.5) {
        healthMessage = "You are underweight. Consider consulting with a nutritionist.";
    } else if (bmi < 25) {
        healthMessage = "You are within a healthy weight range. Keep it up!";
    } else if (bmi < 30) {
        healthMessage = "You are overweight. Consider increasing exercise and adjusting your diet.";
    } else {
        healthMessage = "You are obese. It's recommended to consult with a healthcare professional.";
    }

    var healthMessageElement = document.createElement('p');
    healthMessageElement.textContent = healthMessage;
    resultElement.appendChild(healthMessageElement);
}
