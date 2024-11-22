import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Loader } from 'lucide-react';
import { marked } from 'marked';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateResponse = async (userInput) => {
    try {
      const genAI = new window.GoogleGenerativeAI('YOUR_API_KEY');
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      const prompt = `You are an expert educational assistant for JEE, NEET, CUET, GATE, and CAT exam preparation.
        Context: ${userInput}
        Please provide a detailed, accurate, and helpful response related to the query.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating response:', error);
      return 'I apologize, but I encountered an error. Please try again.';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await generateResponse(input);
      const botMessage = { text: response, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = { 
        text: 'I apologize, but I encountered an error. Please try again.',
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 p-4 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-gray-800 rounded-lg shadow-xl flex flex-col">
          <div className="p-4 bg-gray-700 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-semibold">MasterPrep Assistant</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.sender === 'user' ? 'ml-auto bg-purple-600' : 'mr-auto bg-gray-700'
                } max-w-[80%] rounded-lg p-3`}
              >
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: marked(msg.text, { breaks: true }) 
                  }} 
                />
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center">
                <Loader className="h-6 w-6 animate-spin text-purple-400" />
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about JEE, NEET, GATE..."
                className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;