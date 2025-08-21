document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const ageInput = document.getElementById('ageInput');
    const convertBtn = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');
    // Conversion function
    function convertAgeToDays() {
      
        const age = parseFloat(ageInput.value);
        

        if (isNaN(age) || age < 0) {
            resultDiv.textContent = "Please enter a valid positive number";
            resultDiv.style.color = "red";
            return;
        }
        
        const days = age * 365.25;
        
        resultDiv.textContent = `${age} years = ${Math.round(days)} days`;
        resultDiv.style.color = "#5223aaff";
    }

    convertBtn.addEventListener('click', convertAgeToDays);
    
    ageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            convertAgeToDays();
        }
    });
});