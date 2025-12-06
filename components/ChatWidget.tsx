import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Icons } from '../constants';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage, ChatState } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Dat's AI assistant. Ask me anything about his experience or skills." }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [chatState, setChatState] = useState<ChatState>(ChatState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || chatState === ChatState.THINKING) return;

    const userText = inputValue.trim();
    setInputValue("");
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setChatState(ChatState.THINKING);

    try {
      const responseText = await generateChatResponse(userText);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setChatState(ChatState.IDLE);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong." }]);
      setChatState(ChatState.ERROR);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end no-print font-sans">
      {/* Chat Window */}
      <div 
        className={`
          mb-4 w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right
          bg-white border border-gray-100 dark:bg-[#151621] dark:border-white/10
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none absolute bottom-0 right-0'}
        `}
      >
        {/* Header */}
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center dark:bg-gray-800">
          <div className="flex items-center space-x-2">
            <Icons.Sparkles />
            <span className="font-semibold text-sm">Ask AI Dat</span>
          </div>
          <button
            onClick={toggleOpen}
            className="hover:bg-gray-700 p-1 rounded transition-colors"
            aria-label="Close chat assistant"
          >
            <Icons.X />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-4 dark:bg-[#0f111a]">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`
                  max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-gray-900 text-white rounded-br-none dark:bg-purple-600' 
                    : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none dark:bg-[#151621] dark:border-white/10 dark:text-gray-200'
                  }
                `}
              >
                {msg.role === 'model' ? (
                  <div className="markdown-container">
                    <ReactMarkdown
                      components={{
                        p: ({node, ...props}) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc ml-4 mb-2 space-y-1" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal ml-4 mb-2 space-y-1" {...props} />,
                        li: ({node, ...props}) => <li className="" {...props} />,
                        a: ({node, ...props}) => <a className="text-purple-600 hover:underline underline-offset-2 dark:text-purple-400" target="_blank" rel="noreferrer" {...props} />,
                        strong: ({node, ...props}) => <span className="font-semibold text-gray-900 dark:text-white" {...props} />,
                        code: ({node, ...props}) => <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-xs text-pink-600 dark:bg-white/10 dark:text-pink-400" {...props} />,
                        blockquote: ({node, ...props}) => <blockquote className="border-l-2 border-purple-500 pl-3 italic my-2 text-gray-500 dark:text-gray-400" {...props} />
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
          {chatState === ChatState.THINKING && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex space-x-1 items-center dark:bg-[#151621] dark:border-white/10">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-100 flex gap-2 dark:bg-[#151621] dark:border-white/10">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about my projects..."
            className="flex-1 text-sm bg-gray-50 border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-shadow dark:bg-[#0f111a] dark:border-white/10 dark:text-gray-200 dark:focus:ring-purple-500"
          />
          <button 
            type="submit" 
            disabled={!inputValue.trim() || chatState === ChatState.THINKING}
            className="bg-gray-900 text-white p-2 rounded-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:bg-purple-600 dark:hover:bg-purple-500"
            aria-label="Send message"
          >
            <Icons.Send />
          </button>
        </form>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={toggleOpen}
        className={`
          group flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300
          ${isOpen ? 'bg-gray-700 rotate-90 scale-0' : 'bg-gray-900 hover:bg-gray-800 scale-100 dark:bg-purple-600 dark:hover:bg-purple-500'}
        `}
        aria-label={isOpen ? 'Hide chat assistant' : 'Open chat assistant'}
      >
        <span className="text-white">
          <Icons.Sparkles />
        </span>
      </button>
      
       {!isOpen && (
        <div className="absolute -top-12 right-0 bg-white px-3 py-1 rounded-lg shadow-sm text-xs font-medium text-gray-600 whitespace-nowrap animate-bounce pointer-events-none dark:bg-[#151621] dark:text-gray-300">
          Ask my AI!
          <div className="absolute bottom-[-4px] right-6 w-2 h-2 bg-white rotate-45 dark:bg-[#151621]"></div>
        </div>
       )}
    </div>
  );
};

export default ChatWidget;