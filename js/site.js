function getValues() {
    let fizzValue = document.getElementById('fizzValue').value;
    let buzzValue = document.getElementById('buzzValue').value;
    let stopValue = document.getElementById('stopValue').value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    stopValue = parseInt(stopValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && Number.isInteger(stopValue)) {
        let numbersArray = generateNumbers(1, stopValue);
        displayNumbers(numbersArray, fizzValue, buzzValue);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Only integers are allowed for FizzBuzz!'
        });
    }
}

function generateNumbers(start, end) {
    let numbers = [];
    for (let value = start; value <= end; value++) {
        numbers.push(value);
    }
    return numbers;
}

function displayNumbers(numbersArray, fizzValue, buzzValue) {
    let tableBody = document.getElementById('results');
    let tableHtml = '';
    for (let index = 0; index < numbersArray.length; index++) {
        let value = numbersArray[index];
        let text = '';
        if (value % (fizzValue * buzzValue) == 0) {
            value = 'FizzBuzz';
        }
        if (value % buzzValue == 0) {
            value = 'Buzz';
        }
        if (value % fizzValue == 0) {
            value = 'Fizz';
        }

        if (index % 15 == 0) {
            tableHtml += '<tr>';
        }

        let tableRow = `<td class="col ${text}">${value}</td>`;
        tableHtml = tableHtml + tableRow;

        if ((index + 1) % 15 == 0) {
            tableHtml += '</tr>';
        }
    }
    tableBody.innerHTML = tableHtml
}