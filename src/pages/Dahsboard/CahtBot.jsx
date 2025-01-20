import React, { useState } from 'react';
import { ActionsApi } from "@/Services/Actions/ActionsApi.js";
import {toast} from "sonner";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages([...messages, userMessage]);
        setInput(''); // Clear the input field

        try {
            const loading = toast.loading("waiting a moment...");
            const response = await ActionsApi.ChatBot({ question: userMessage.content });
            toast.dismiss(loading);
            // Debugging the response structure
            console.log('API Response:', response.data);

            const botMessage = {
                role: 'assistant',
                content: response.data, // Adjust based on API response
            };

            setMessages((prev) => [...prev, botMessage]); // Add the bot's reply
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            <h1 className={'text-center text-2xl'}>Chat Boot Finova </h1>
            <div className="h-96 overflow-y-auto bg-gray-50 p-4 rounded-lg mb-4 custom-scrollbar">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        <div
                            className={`inline-block px-4 py-3 rounded-lg max-w-xs ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
                        >
                            {msg.content}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="border rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition duration-200"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
