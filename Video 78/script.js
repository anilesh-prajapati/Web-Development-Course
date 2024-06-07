// Array of messages to be displayed
const messages = [
    'Initializing hacking',
    'Reading your Files',
    'Password files Detected',
    'Sending all password and personal files to server',
    'Cleaning Up'
];

// Function to display a message
function showMessage(message, callback) {
    // Select the container element
    const containerElement = document.querySelector('.container');
    // Create a new <p> element for the message
    const messageElement = document.createElement('p');
    // Set the text content of the new element to the current message
    messageElement.textContent = message;
    // Append the new element to the container
    containerElement.appendChild(messageElement);
    // If a callback function is provided, call it after displaying the message
    if (callback) callback(messageElement);
}

// Function to add dots to a message element
function addDots(element, count, callback) {
    let dots = '';
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            dots += '.';
            element.textContent += '.';
            if (i === count - 1 && callback) callback(); // Call the callback after the last dot
        }, (i + 1) * 1000); // 1-second delay for each dot
    }
}

// Function to display messages with dots
function displayMessagesWithDots(messages, index = 0) {
    if (index < messages.length) {
        showMessage(messages[index], (element) => {
            addDots(element, 3, () => {
                // Proceed to the next message after dots are added
                setTimeout(() => {
                    displayMessagesWithDots(messages, index + 1);
                }, 1000); // 1-second delay before starting the next message
            });
        });
    }
}

// Start displaying messages with dots
displayMessagesWithDots(messages);
