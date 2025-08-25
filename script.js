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







 //Find next in array
    function findNextInArray() {
      let arr = document.getElementById("arrayInput").value.split(",").map(Number);
      let target = Number(document.getElementById("targetInput").value);
      let result = "";

      let index = arr.indexOf(target);
      if (index !== -1 && index < arr.length - 1) {
        result = `✅ Next number after ${target} is <b>${arr[index + 1]}</b>`;
      } else if (index === arr.length - 1) {
        result = `⚠️ No next number. ${target} is the last element.`;
      } else {
        result = `❌ ${target} not found in array.`;
      }

      let resultBox = document.getElementById("arrayResult");
      resultBox.innerHTML = result;
      resultBox.style.display = "block"; // show result box
    }

    // Single value next
    function findNextSingle() {
      let inputVal = document.getElementById("singleInput").value;
      let num = Number(inputVal);
      let result = "";

      if (Number.isNaN(num)) {
        result = "❌ Please enter a valid number.";
      } else if (Number.isInteger(num)) {
        result = `✅ Next integer after ${num} is <b>${num + 1}</b>`;
      } else {
        result = `✅ Next float after ${num} is <b>${(num + 0.1).toFixed(1)}</b>`;
      }

      let resultBox = document.getElementById("singleResult");
      resultBox.innerHTML = result;
      resultBox.style.display = "block"; // show result box
    }




     function showFullName() {
      let name = document.getElementById("fullNameInput").value.trim();

      if (name === "") {
        document.getElementById("fullNameResult").innerText = "⚠ Please enter your name!";
        return;
      }

      name = name.toLowerCase();

      let words = name.split(/\s+/); // handles multiple spaces
      let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });

      let formatted = capitalizedWords.join(" ");

      document.getElementById("fullNameResult").innerText = "✅ Your name is: " + formatted;
    }

    // bmibb

     function calculateBMI() {
      let weight = parseFloat(document.getElementById("weightInput").value);
      let height = parseFloat(document.getElementById("heightInput").value);

      if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("bmiOutput").innerText = "⚠ Please enter valid weight and height!";
        return;
      }

      let bmi = weight / (height * height);
      bmi = bmi.toFixed(2);

      let status = "";
      if (bmi < 18.5) {
        status = "Underweight";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Normal weight";
      } else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight";
      } else {
        status = "Obese";
      }

      document.getElementById("bmiOutput").innerText =
        `✅ Your BMI is: ${bmi} (${status})`;
    }

    // randpom

     let randomArray = [];

    // Generate random array of 8 numbers (between 1 and 99)
    function generateArray() {
      randomArray = [];
      for (let i = 0; i < 8; i++) {
        randomArray.push(Math.floor(Math.random() * 100) + 1);
      }
      document.getElementById("generatedArray").innerText =
        "Generated Array: [ " + randomArray.join(", ") + " ]";
      document.getElementById("pickedElements").innerText = ""; // clear old result
    }

    // Pick first and last element
    function pickElements() {
      if (randomArray.length === 0) {
        document.getElementById("pickedElements").innerText =
          "⚠ Please generate an array first!";
        return;
      }
      let first = randomArray[0];
      let last = randomArray[randomArray.length - 1];
      document.getElementById("pickedElements").innerText =
        "First Element: " + first + " | Last Element: " + last;
    }

    // sumnum

 let firstNum = document.getElementById("firstNum");
    let secondNum = document.getElementById("secondNum");
    let resultBox = document.getElementById("resultBox");

    function calculate() {
      let val1 = firstNum.value;
      let val2 = secondNum.value;

      if (val1 === "") {
        resultBox.value = ""; // if first is empty, clear result
      } else if (val2 === "") {
        resultBox.value = "NaN"; // only first number entered
      } else {
        resultBox.value = parseInt(val1) + parseInt(val2); // show sum
      }
    }

    firstNum.addEventListener("input", calculate);
    secondNum.addEventListener("input", calculate);
