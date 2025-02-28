// Add this before mounting the app
const connectWebSocket = () => {
  const ws = new WebSocket('ws://localhost:5173');
  
  ws.addEventListener('close', () => {
    console.log('WebSocket disconnected, attempting to reconnect...');
    setTimeout(connectWebSocket, 3000);
  });

  ws.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
  });
};

connectWebSocket();
