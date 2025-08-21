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
// hoursconverter

document.addEventListener("DOMContentLoaded", function () {
  const hoursInput = document.getElementById("hoursinput"); // Fixed 'hoursinput' to 'hoursInput' for consistency
  const convertBtns = document.getElementById("convertbtns");
  const resultsDiv = document.getElementById("results");

  function converthoursTosecond() {

    const hours = parseFloat(hoursInput.value);

    if (isNaN(hours) || hours < 0) {
      resultsDiv.textContent = "Please enter a valid number";
      resultsDiv.style.color = "green";
      return;
    }

    const seconds = hours * 3600; 

    resultsDiv.textContent = `${hours} hours = ${Math.round(seconds)} seconds`; 
    resultsDiv.style.color = "#5223aa";
  }

  convertBtns.addEventListener("click", converthoursTosecond); 

  hoursInput.addEventListener("keypress", function (e) {
    
    if (e.key === "Enter") {
      converthoursTosecond();
    }
  });
});

