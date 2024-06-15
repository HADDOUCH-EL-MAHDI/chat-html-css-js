const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendMessage);

function sendMessage() {
    const userMessage = userInput.value;
    appendMessage('user', userMessage);
    userInput.value = '';

    fetch('URL_DE_L_API', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = data.message; 
        appendMessage('bot', botMessage);
    })
    .catch(error => console.error('Error:', error));
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerText = message;
    messageElement.style.marginTop = '5px';
    messageElement.style.color='';
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
