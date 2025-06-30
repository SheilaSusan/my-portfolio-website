"use client"

import { useState, FormEvent, useRef, useEffect, useCallback } from 'react';
import { Send, User, Bot } from 'lucide-react';
import { Markdown } from "../components/chat/markdown";

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

const DEFAULT_PROMPTS = [
  "What frameworks do you use?",
  "What design tools are you proficient with?",
  "Tell me about your web development experience",
  "What's your experience with responsive design?"
];

export default function Assistant() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom and focus input
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    inputRef.current?.focus();
  }, [messages]);

  const generateResponse = useCallback((userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('framework') || lowerMessage.includes('react') || lowerMessage.includes('next')) {
      return `## Technical Expertise
      
**Frontend Frameworks:**
- React 
- Next.js 
- Tailwind CSS 

[View framework examples](#)`;
    } 
    else if (lowerMessage.includes('tool') || lowerMessage.includes('git') || lowerMessage.includes('figma')) {
      return `### Development Toolkit
      
| Category       | Tools                          |
|----------------|--------------------------------|
| **Code**       | VS Code, Git, GitHub Actions   |
| **Design**     | Figma, Canva,   |
| **Testing**    | React Testing Lib |
| **DevOps**     | Vercel, Netlify        |`;
    }
    else if (lowerMessage.includes('experience') || lowerMessage.includes('web development')) {
      return `## Professional Experience

- Built various production web applications
- Specialize in performant, accessible UIs
- Full-stack capabilities with focus on frontend
- Strong collaboration with design teams`;
    }
    else if (lowerMessage.includes('responsive') || lowerMessage.includes('mobile')) {
      return `## Responsive Design Expertise

- Mobile-first development approach
- CSS Grid/Flexbox mastery
- Cross-browser compatibility
- Performance optimization for mobile devices`;
    }
    else {
      return `Hello! I'm Sheila's assistant. Here's what I can tell you about:

- **Technical skills** (frameworks, languages)
- **Design tools** she uses
- **Professional experience**
- **Project examples**

Try asking about any of these!`;
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now().toString(),
        content: generateResponse(input),
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 500 + Math.random() * 200);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
    inputRef.current?.focus();
  };

  const clearConversation = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900">
      {/* Chat history */}
      <div className="flex-1 overflow-y-auto p-4 scroll-smooth">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-4 p-4 text-center">
            <div className="p-4 rounded-full bg-blue-50 dark:bg-zinc-800">
              <Bot className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Ask About Sheila&#39;s Skills
            </h3>
            <div className="grid grid-cols-1 gap-2 w-full max-w-md">
              {DEFAULT_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handlePromptClick(prompt)}
                  className="text-left p-3 rounded-lg bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 text-sm text-gray-800 dark:text-gray-200 transition-colors"
                >
                  &quot;{prompt}&quot;
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3 pb-4"> {/* Added pb-4 for spacing */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[min(85%,500px)] rounded-xl p-4 break-words ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white rounded-br-none'
                      : 'bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 rounded-bl-none'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {message.role === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                    <span className="text-xs opacity-80">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <div className="prose dark:prose-invert prose-sm max-w-none">
                    <Markdown>{message.content}</Markdown>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Bottom section with input and clear button */}
      <div className="sticky bottom-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-zinc-700">
        {/* Clear chat button - now at bottom */}
        {messages.length > 0 && (
          <div className="flex justify-center px-4 pt-2">
            <button
              onClick={clearConversation}
              className="text-xs px-4 py-1.5 bg-white dark:bg-zinc-800 rounded-full border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors shadow-sm"
            >
              Clear chat
            </button>
          </div>
        )}
        
        {/* Input area */}
        <form onSubmit={handleSubmit} className="p-4">
          <div className="relative flex">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Sheila's skills..."
              className="flex-1 pr-12 pl-4 py-3 rounded-full border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              disabled={isLoading}
              aria-label="Ask a question"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-blue-500 hover:text-blue-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              {isLoading ? (
                <span className="animate-pulse">...</span>
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}