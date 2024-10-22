// Walking Equation
function calculateWalkingVO2() {
    const speed = parseFloat(document.getElementById("walking-speed").value);
    const grade = parseFloat(document.getElementById("walking-grade").value);
    const resultElement = document.getElementById("walking-result");

    if (!isNaN(speed) && !isNaN(grade)) {
        const vo2 = (speed * 0.1) + (speed * grade * 1.8) + 3.5;
        resultElement.textContent = `Walking VO₂: ${vo2.toFixed(2)} mL/kg/min`;
    } else {
        resultElement.textContent = "Please enter valid Speed and Grade.";
    }
}

function calculateWalkingSpeed() {
    const vo2 = parseFloat(document.getElementById("walking-vo2").value);
    const grade = parseFloat(document.getElementById("walking-grade").value);
    const resultElement = document.getElementById("walking-result");

    if (!isNaN(vo2) && !isNaN(grade)) {
        const speed = (vo2 - 3.5) / (0.1 + grade * 1.8);
        resultElement.textContent = `Walking Speed: ${speed.toFixed(2)} m/min`;
    } else {
        resultElement.textContent = "Please enter valid VO₂ and Grade.";
    }
}

function calculateWalkingGrade() {
    const vo2 = parseFloat(document.getElementById("walking-vo2").value);
    const speed = parseFloat(document.getElementById("walking-speed").value);
    const resultElement = document.getElementById("walking-result");

    if (!isNaN(vo2) && !isNaN(speed)) {
        const grade = (vo2 - 3.5 - speed * 0.1) / (speed * 1.8);
        resultElement.textContent = `Walking Grade: ${grade.toFixed(2)}`;
    } else {
        resultElement.textContent = "Please enter valid VO₂ and Speed.";
    }
}

// Running Equation
function calculateRunningVO2() {
    const speed = parseFloat(document.getElementById("running-speed").value);
    const grade = parseFloat(document.getElementById("running-grade").value);
    const resultElement = document.getElementById("running-result");

    if (!isNaN(speed) && !isNaN(grade)) {
        const vo2 = (speed * 0.2) + (speed * grade * 0.9) + 3.5;
        resultElement.textContent = `Running VO₂: ${vo2.toFixed(2)} mL/kg/min`;
    } else {
        resultElement.textContent = "Please enter valid Speed and Grade.";
    }
}

function calculateRunningSpeed() {
    const vo2 = parseFloat(document.getElementById("running-vo2").value);
    const grade = parseFloat(document.getElementById("running-grade").value);
    const resultElement = document.getElementById("running-result");

    if (!isNaN(vo2) && !isNaN(grade)) {
        const speed = (vo2 - 3.5) / (0.2 + grade * 0.9);
        resultElement.textContent = `Running Speed: ${speed.toFixed(2)} m/min`;
    } else {
        resultElement.textContent = "Please enter valid VO₂ and Grade.";
    }
}

function calculateRunningGrade() {
    const vo2 = parseFloat(document.getElementById("running-vo2").value);
    const speed = parseFloat(document.getElementById("running-speed").value);
    const resultElement = document.getElementById("running-result");

    if (!isNaN(vo2) && !isNaN(speed)) {
        const grade = (vo2 - 3.5 - speed * 0.2) / (speed * 0.9);
        resultElement.textContent = `Running Grade: ${grade.toFixed(2)}`;
    } else {
        resultElement.textContent = "Please enter valid VO₂ and Speed.";
    }
}

// Repeat similar changes for all other equations (Leg Ergometer, Arm Ergometer, Stepping)
// Use the respective IDs like 'leg-result', 'arm-result', 'step-result' for each result display
function calculateLegVO2() {
    const workRate = parseFloat(document.getElementById("leg-work-rate").value);
    const bodyMass = parseFloat(document.getElementById("leg-body-mass").value);
    const resultElement = document.getElementById("leg-result");

    if (!isNaN(workRate) && !isNaN(bodyMass)) {
        const vo2 = (1.8 * workRate / bodyMass) + 7;
        resultElement.textContent = `Leg Ergometer VO₂: ${vo2.toFixed(2)} mL/kg/min`;
    } else {
        resultElement.textContent = "Please enter valid Work Rate and Body Mass.";
    }
}

function calculateLegWorkRate() {
    const vo2 = parseFloat(document.getElementById("leg-vo2").value);
    const bodyMass = parseFloat(document.getElementById("leg-body-mass").value);
    const resultElement = document.getElementById("leg-result");

    if (!isNaN(vo2) && !isNaN(bodyMass)) {
        const workRate = ((vo2 - 7) * bodyMass) / 1.8;
        resultElement.textContent = `Leg Ergometer Work Rate: ${workRate.toFixed(2)} kg·m/min`;
    } else {
        resultElement.textContent = "Please enter valid VO₂ and Body Mass.";
    }
}

function calculateLegBodyMass() {
    const vo2 = parseFloat(document.getElementById("leg-vo2").value);
    const workRate = parseFloat(document.getElementById("leg-work-rate").value);
    const resultElement = document.getElementById("leg-result");

    if (!isNaN(vo2) && !isNaN(workRate)) {
        const bodyMass = (1.8 * workRate) / (vo2 - 7);
        resultElement.textContent = `Leg Ergometer Body Mass: ${bodyMass.toFixed(2)} kg`;
    } else {
        resultElement.textContent = "Please enter valid VO₂ and Work Rate.";
    }
}

function calculateArmVO2() {
    const workRate = parseFloat(document.getElementById("arm-work-rate").value);
    const bodyMass = parseFloat(document.getElementById("arm-body-mass").value);
    const resultElement = document.getElementById("arm-result");

    if (!isNaN(workRate) && !isNaN(bodyMass)) {
        const vo2 = (3 * workRate / bodyMass) + 3.5;
        resultElement.textContent = `Arm Ergometer VO₂: ${vo2.toFixed(2)} mL/kg/min`;
    } else {
        resultElement.textContent = "Please enter valid Work Rate and Body Mass.";
    }
}

function calculateArmWorkRate() {
    const vo2 = parseFloat(document.getElementById("arm-vo2").value);
    const bodyMass = parseFloat(document.getElementById("arm-body-mass").value);
    const resultElement = document.getElementById("arm-result");

    if (!isNaN(vo2) && !isNaN(bodyMass)) {
        const workRate = ((vo2 - 3.5) * bodyMass) / 3;
        resultElement.textContent = `Arm Ergometer Work Rate: ${workRate.toFixed(2)} kg·m/min`;
    } else {
        resultElement.textContent = "Please enter valid VO₂ and Body Mass.";
    }
}

function calculateArmBodyMass() {
    const vo2 = parseFloat(document.getElementById("arm-vo2").value);
    const workRate = parseFloat(document.getElementById("arm-work-rate").value);
    const resultElement = document.getElementById("arm-result");

    if (!isNaN(vo2) && !isNaN(workRate)) {
        const bodyMass = (3 * workRate) / (vo2 - 3.5);
        resultElement.textContent = `Arm Ergometer Body Mass: ${bodyMass.toFixed(2)} kg`;
    } else {
        resultElement.textContent = "Please enter valid VO₂ and Work Rate.";
    }
}

function calculateStepVO2() {
    const freq = parseFloat(document.getElementById("step-freq").value);
    const height = parseFloat(document.getElementById("step-height").value);
    const resultElement = document.getElementById("step-result");

    if (!isNaN(freq) && !isNaN(height)) {
        const vo2 = (freq * 0.2) + (1.33 * 1.8 * freq * height) + 3.5;
        resultElement.textContent = `Stepping VO₂: ${vo2.toFixed(2)} mL/kg/min`;
    } else {
        resultElement.textContent = "Please enter valid Step Frequency and Step Height.";
    }
}

function calculateStepFreq() {
    const vo2 = parseFloat(document.getElementById("step-vo2").value);
    const height = parseFloat(document.getElementById("step-height").value);
    const resultElement = document.getElementById("step-result");

    if (!isNaN(vo2) && !isNaN(height)) {
        const freq = (vo2 - 3.5) / (0.2 + (1.33 * 1.8 * height));
        resultElement.textContent = `Step Frequency: ${freq.toFixed(2)} steps/min`;
    } else {
        resultElement.textContent = "Please enter valid VO₂ and Step Height.";
    }
}

function calculateStepHeight() {
    const vo2 = parseFloat(document.getElementById("step-vo2").value);
    const freq = parseFloat(document.getElementById("step-freq").value);
    const resultElement = document.getElementById("step-result");

    if (!isNaN(vo2) && !isNaN(freq)) {
        const height = (vo2 - 3.5 - (freq * 0.2)) / (1.33 * 1.8 * freq);
        resultElement.textContent = `Step Height: ${height.toFixed(2)} m`;
    } else {
        resultElement.textContent = "Please enter valid VO₂ and Step Frequency.";
    }
}
// Clear function for Walking Equation
function clearWalkingForm() {
    document.getElementById("walking-speed").value = "";
    document.getElementById("walking-grade").value = "";
    document.getElementById("walking-vo2").value = "";
    document.getElementById("walking-result").textContent = "";
}

// Clear function for Running Equation
function clearRunningForm() {
    document.getElementById("running-speed").value = "";
    document.getElementById("running-grade").value = "";
    document.getElementById("running-vo2").value = "";
    document.getElementById("running-result").textContent = "";
}

// Clear function for Leg Ergometer Equation
function clearLegForm() {
    document.getElementById("leg-work-rate").value = "";
    document.getElementById("leg-body-mass").value = "";
    document.getElementById("leg-vo2").value = "";
    document.getElementById("leg-result").textContent = "";
}

// Clear function for Arm Ergometer Equation
function clearArmForm() {
    document.getElementById("arm-work-rate").value = "";
    document.getElementById("arm-body-mass").value = "";
    document.getElementById("arm-vo2").value = "";
    document.getElementById("arm-result").textContent = "";
}

// Clear function for Stepping Equation
function clearStepForm() {
    document.getElementById("step-freq").value = "";
    document.getElementById("step-height").value = "";
    document.getElementById("step-vo2").value = "";
    document.getElementById("step-result").textContent = "";
}

// HRR Method Calculation
function calculateHRR() {
    const hrMax = parseFloat(document.getElementById("hrr-max").value);
    const hrRest = parseFloat(document.getElementById("hrr-rest").value);
    const intensity = parseFloat(document.getElementById("hrr-intensity").value) / 100;
    const resultElement = document.getElementById("hrr-result");

    if (!isNaN(hrMax) && !isNaN(hrRest) && !isNaN(intensity)) {
        const targetHR = ((hrMax - hrRest) * intensity) + hrRest;
        resultElement.textContent = `Target HR: ${targetHR.toFixed(2)} bpm`;
    } else {
        resultElement.textContent = "Please enter valid values.";
    }
}

function clearHRRForm() {
    document.getElementById("hrr-max").value = "";
    document.getElementById("hrr-rest").value = "";
    document.getElementById("hrr-intensity").value = "";
    document.getElementById("hrr-result").textContent = "";
}

// VO₂R Method Calculation
function calculateVO2R() {
    const vo2Max = parseFloat(document.getElementById("vo2r-max").value);
    const vo2Rest = parseFloat(document.getElementById("vo2r-rest").value);
    const intensity = parseFloat(document.getElementById("vo2r-intensity").value) / 100;
    const resultElement = document.getElementById("vo2r-result");

    if (!isNaN(vo2Max) && !isNaN(vo2Rest) && !isNaN(intensity)) {
        const targetVO2R = ((vo2Max - vo2Rest) * intensity) + vo2Rest;
        resultElement.textContent = `Target VO₂R: ${targetVO2R.toFixed(2)} mL/kg/min`;
    } else {
        resultElement.textContent = "Please enter valid values.";
    }
}

function clearVO2RForm() {
    document.getElementById("vo2r-max").value = "";
    document.getElementById("vo2r-rest").value = "";
    document.getElementById("vo2r-intensity").value = "";
    document.getElementById("vo2r-result").textContent = "";
}

// HR Method Calculation
function calculateHR() {
    const hrMax = parseFloat(document.getElementById("hr-max").value);
    const intensity = parseFloat(document.getElementById("hr-intensity").value) / 100;
    const resultElement = document.getElementById("hr-result");

    if (!isNaN(hrMax) && !isNaN(intensity)) {
        const targetHR = hrMax * intensity;
        resultElement.textContent = `Target HR: ${targetHR.toFixed(2)} bpm`;
    } else {
        resultElement.textContent = "Please enter valid values.";
    }
}

function clearHRForm() {
    document.getElementById("hr-max").value = "";
    document.getElementById("hr-intensity").value = "";
    document.getElementById("hr-result").textContent = "";
}

// VO₂ Method Calculation
function calculateVO2() {
    const vo2Max = parseFloat(document.getElementById("vo2-max").value);
    const intensity = parseFloat(document.getElementById("vo2-intensity").value) / 100;
    const resultElement = document.getElementById("vo2-result");

    if (!isNaN(vo2Max) && !isNaN(intensity)) {
        const targetVO2 = vo2Max * intensity;
        resultElement.textContent = `Target VO₂: ${targetVO2.toFixed(2)} mL/kg/min`;
    } else {
        resultElement.textContent = "Please enter valid values.";
    }
}

function clearVO2Form() {
    document.getElementById("vo2-max").value = "";
    document.getElementById("vo2-intensity").value = "";
    document.getElementById("vo2-result").textContent = "";
}

// MET Method Calculation
function calculateMET() {
    const vo2Max = parseFloat(document.getElementById("met-vo2-max").value);
    const intensity = parseFloat(document.getElementById("met-intensity").value) / 100;
    const resultElement = document.getElementById("met-result");

    if (!isNaN(vo2Max) && !isNaN(intensity)) {
        const targetMET = (vo2Max / 3.5) * intensity;
        resultElement.textContent = `Target MET: ${targetMET.toFixed(2)} METs`;
    } else {
        resultElement.textContent = "Please enter valid values.";
    }
}

function clearMETForm() {
    document.getElementById("met-vo2-max").value = "";
    document.getElementById("met-intensity").value = "";
    document.getElementById("met-result").textContent = "";
}
// Function to update input placeholder and label based on the selected conversion
function updatePlaceholder() {
    const conversionType = document.getElementById("conversion-type").value;
    const label = document.getElementById("conversion-label");
    const input = document.getElementById("input-value");

    switch (conversionType) {
        case "liters-to-milliliters":
            label.textContent = "Liters to Milliliters:";
            input.placeholder = "Enter Liters";
            break;
        case "kilograms-to-pounds":
            label.textContent = "Kilograms to Pounds:";
            input.placeholder = "Enter Kilograms";
            break;
        case "miles-to-meters":
            label.textContent = "Miles per Hour to Meters/Min:";
            input.placeholder = "Enter Miles per Hour";
            break;
        case "miles-to-kilometers":
            label.textContent = "Miles per Hour to Km/Hour:";
            input.placeholder = "Enter Miles per Hour";
            break;
        case "lbs-to-kcal":
            label.textContent = "Pounds of Fat to kcal:";
            input.placeholder = "Enter Pounds of Fat";
            break;
        case "met-to-mlkgmin":
            label.textContent = "MET to ml/kg/min:";
            input.placeholder = "Enter MET";
            break;
        case "watts-to-kgmin":
            label.textContent = "Watts to kg.m/min:";
            input.placeholder = "Enter Watts";
            break;
        case "liters-o2-to-kcal":
            label.textContent = "Liters O₂ to kcal:";
            input.placeholder = "Enter Liters O₂";
            break;
        case "inches-to-meters":
            label.textContent = "Inches to Meters:";
            input.placeholder = "Enter Inches";
            break;
        default:
            label.textContent = "Input Value:";
            input.placeholder = "Enter value";
            break;
    }
}

// Perform the selected conversion
function performConversion() {
    const conversionType = document.getElementById("conversion-type").value;
    const inputValue = parseFloat(document.getElementById("input-value").value) || 0;
    let result = "";

    switch (conversionType) {
        case "liters-to-milliliters":
            result = `${inputValue} Liters is equal to ${(inputValue * 1000).toFixed(2)} Milliliters.`;
            break;
        case "kilograms-to-pounds":
            result = `${inputValue} Kilograms is equal to ${(inputValue * 2.20462).toFixed(2)} Pounds.`;
            break;
        case "miles-to-meters":
            result = `${inputValue} Miles per hour is equal to ${(inputValue * 26.8).toFixed(2)} Meters/Min.`;
            break;
        case "miles-to-kilometers":
            result = `${inputValue} Miles per hour is equal to ${(inputValue * 1.60934).toFixed(2)} Km/Hour.`;
            break;
        case "lbs-to-kcal":
            result = `${inputValue} Pounds of fat is equal to ${(inputValue * 3500).toFixed(2)} kcal.`;
            break;
        case "met-to-mlkgmin":
            result = `${inputValue} MET is equal to ${(inputValue * 3.5).toFixed(2)} ml/kg/min.`;
            break;
        case "watts-to-kgmin":
            result = `${inputValue} Watts is equal to ${(inputValue * 6).toFixed(2)} kg.m/min.`;
            break;
        case "liters-o2-to-kcal":
            result = `${inputValue} Liters O₂ is equal to ${(inputValue * 5).toFixed(2)} kcal.`;
            break;
        case "inches-to-meters":
            result = `${inputValue} Inches is equal to ${(inputValue * 0.0254).toFixed(4)} Meters.`;
            break;
        default:
            result = "Please select a conversion type.";
            break;
    }

    document.getElementById("conversion-result").textContent = result;
}

// Clear the conversion form and result
function clearConversionForm() {
    document.getElementById("conversion-form").reset();
    document.getElementById("conversion-result").textContent = "";
}
