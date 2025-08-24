let storeValue = null;
let action = null;
let isVariable = false;

const input1 = document.getElementById('inputElement');
input1.focus();

const addValue = (value) => {
    const inputElement = document.getElementById('inputElement');
    inputElement.value = inputElement.value + value;
    inputElement.focus();
};

function calculate(activity) {
    const inputElement = document.getElementById('inputElement');
    inputElement.focus();

    if (!isVariable) {
        storeValue = inputElement.value;
        action = activity
        inputElement.value = "";
        isVariable = true;
    } else {
        answer();
        // inputElement.value="";
        isVariable =true;
    }
}

function answer() {
    const inpt = document.getElementById('inputElement');
    inpt.focus();

    switch (action) {
        case "plus":
            inpt.value = Number(storeValue) + Number(inpt.value);
            break;
        case "minus":
            inpt.value = Number(storeValue) - Number(inpt.value);
            break;
        case "multiplication":
            inpt.value = Number(storeValue) * Number(inpt.value);
            break;
        case "division":
            inpt.value = Number(storeValue) / Number(inpt.value);
            break;
    }
    isVariable = false;
}   