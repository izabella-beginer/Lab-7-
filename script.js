// JavaScript event listener
document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button clicked (addEventListener Method)');
});

// Access the button by ID
const hoverButton = document.getElementById('clickButton');

// Attach an event listener to the button
hoverButton.addEventListener('click', function() {
    alert('You clicked the button!');
    this.style.backgroundColor = 'lightpink'; // Change the button color on click

});

const simulateClick = () => {
    const event = document.createEvent("MouseEvents");
    event.initMouseevent()
    document.body.dispatchEvent(event);

    simulateClick();

}

document.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`);
    if (event.key === 'Enter') {
        console.log('Enter key was pressed on your keyboard.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const username = document.getElementById('name');
    

    // Handle form submission
    form.addEventListener('submit', function(event) {
        console.log('Form submitted');
        event.preventDefault(); // Prevent the actual form submission
        alert(`Name: ${username.value} `);
    });

    // Handle changes in the select menu
    status.addEventListener('change', function() {
        console.log('Selection changed to:', this.value);
    });

    // Handle real-time input changes in the username field
    username.addEventListener('input', function() {
        console.log('Input changed: ', this.value);
    });
});
function handleFocus() {
    document.getElementById(`name`).style.background = 'pink';
}
function validateAge() {
    var age = document.getElementById('ageInput');
    var ageValue = parseInt(age.value, 10);

    // Check if the age is 18 or older
    if (ageValue >= 19) {
        age.style.backgroundColor = 'lightgreen'; // Indicates valid age
        console.log('Eligible age confirmed.');
    } else {
        age.style.backgroundColor = 'salmon'; // Indicates potential issue
        console.log('Check age, may be under 18.');
    }

const list= document.getElementById('foodlist');

list.addEventListener('click'), function(event) {
    if (event.target.tagName === 'Li') {
        alert('You clicked:' + event.target.textContent + ',Tasty! i like this food also,');
       
        
    } 
   }
}