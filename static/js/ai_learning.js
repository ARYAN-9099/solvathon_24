document.addEventListener('DOMContentLoaded', function() {
    const chatDisplay = document.getElementById('chat-display');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const imageUpload = document.getElementById('image-upload');
    const historyList = document.getElementById('history-list');
    const imageInput = document.getElementById('imageInput'); // Ensure this ID matches your HTML

    let conversationHistory = [];

    sendBtn.addEventListener('click', function () {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            // Your existing code for handling send button click
        }
    });

    imageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                displayImage(e.target.result, 'user'); // Display the image in the chat
                
            };
            reader.readAsDataURL(file);
        }
    });

    function displayImage(imageSrc, sender) {
        const imageElement = document.createElement('div');
        imageElement.classList.add('message', sender);
        const img = document.createElement('img');
        img.src = imageSrc;
        imageElement.appendChild(img);
        chatDisplay.appendChild(imageElement);
        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to the bottom

        setTimeout(() => {
            displayMessage("Clawvy is analyzing the image...", 'bot');
        }, 1000);
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerHTML = message.replace(/\n/g, '<br>'); // Replace new lines with <br>
        chatDisplay.appendChild(messageElement);
        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to the bottom
    }

    function addToHistory(message) {
        conversationHistory.push(message);
        const listItem = document.createElement('li');
        listItem.textContent = message.length > 20 ? message.substring(0, 20) + '...' : message;
        historyList.appendChild(listItem);
    }

    addToHistory("stock data");
    addToHistory("best practices");
    addToHistory("investment tips");
    addToHistory("portfolio management");

    // Your existing code for handling other events and functions
});