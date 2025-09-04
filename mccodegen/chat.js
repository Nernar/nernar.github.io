import { playSound } from './sounds.js';

const chatButton = document.getElementById('chat-button');
const chatContainer = document.getElementById('chat-container');
const closeChatButton = document.getElementById('close-chat');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSendButton = document.getElementById('chat-send');

let conversationHistory = [];

chatButton.addEventListener('click', () => {
    chatContainer.style.display = 'flex';
    playSound('bubblePopBuffer'); // Play bubble pop sound on chat button click
});

closeChatButton.addEventListener('click', () => {
    chatContainer.style.display = 'none';
    playSound('bubblePopBuffer'); // Play bubble pop sound on close chat button click
});

chatSendButton.addEventListener('click', async () => {
  const messageText = chatInput.value;
  if (!messageText) return;

  // Validate if message matches the gift code format
  const codeFormat = /^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}$/;
  if (!codeFormat.test(messageText)) {
      alert('Please enter a message with a valid gift code format (#####-#####-#####-#####-#####).');
      playSound('bubblePopBuffer'); // Play bubble pop sound on alert
      return;
  }

  // Display user message with avatar
  displayMessage(messageText, 'user');
  chatInput.value = '';

  // Add the message to the conversation history
  conversationHistory.push({
      sender: 'user',
      message: messageText
  });
  playSound('bubblePopBuffer'); // Play bubble pop sound on sending message
});

export function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');

    if (sender === 'user') {
        messageDiv.classList.add('user-message');
    } else if (sender === 'error') {
        messageDiv.style.backgroundColor = '#f44336';
        messageDiv.style.color = 'white';
    }

    // Create message text node
    const messageTextNode = document.createTextNode(message);

    if (sender === 'user') {
      messageDiv.appendChild(messageTextNode);
      // Add delete button for user messages
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
      deleteButton.classList.add('delete-button');
      deleteButton.addEventListener('click', () => {
        deleteMessage(messageDiv);
        playSound('bubblePopBuffer'); // Play bubble pop sound on deleting message
      });
      messageDiv.appendChild(deleteButton);
    } else {
      messageDiv.appendChild(avatarImg); // Avatar on the left for others
      messageDiv.appendChild(messageTextNode);
    }

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function deleteMessage(messageDiv) {
    // Remove the message from the chat messages
    chatMessages.removeChild(messageDiv);

    // Remove the message from the conversation history
    const messageIndex = Array.from(chatMessages.children).indexOf(messageDiv);
    if (messageIndex !== -1) {
        conversationHistory.splice(messageIndex, 1);
    }
}