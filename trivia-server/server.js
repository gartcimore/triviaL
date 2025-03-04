const WebSocket = require('ws');  

const wss = new WebSocket.Server({ port: 8788 });  

wss.on('connection', (ws) => {
    console.log('Client connected');  

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);  
    });  

    ws.on('close', () => {
        console.log('Client disconnected');  
    });
});  

console.log('WebSocket server running on ws://localhost:8788'); 