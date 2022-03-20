// The Controller Function
function getValue() {
    // get user input of type string that will be reversed

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    // Invoke the Logic Function to reverse the string
    let revString = reverseString(userString);

    // call the View Function to update the UI
    displayString(revString);
}

// The Logic Function(s)
// Reverse the string
function reverseString(userString) {
    let revString = [];
    for(let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }
    return revString;
}

// The View Function
// Display the reversed string to the user
function displayString(revString) {
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    document.getElementById("alert").classList.remove("invisible");
}