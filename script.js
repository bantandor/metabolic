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
        case "meters-to-inches":
            label.textContent = "Meters to Inches:";
            input.placeholder = "Enter Meters";
            break;
        case "m-per-min-to-mph":
            label.textContent = "M/min to MPH:";
            input.placeholder = "Enter M/min";
            break;
        case "kgm-to-watts":
            label.textContent = "kg·m/min to Watts:";
            input.placeholder = "Enter kg·m/min";
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
        case "meters-to-inches":
            result = `${inputValue} Meters is equal to ${(inputValue / 0.0254).toFixed(4)} Inches.`;
            break;
        case "m-per-min-to-mph":
            result = `${inputValue} M/min is equal to ${(inputValue / 26.8).toFixed(2)} MPH.`;
            break;
        case "kgm-to-watts":
            result = `${inputValue} kg·m/min is equal to ${(inputValue / 6).toFixed(2)} Watts.`;
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
