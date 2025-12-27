import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot = ({ isOpen, onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "assistant", 
      content: "Hello! I'm your construction project assistant from Giants. I can help with:\n• Project estimates\n• Service information\n• Technical specifications\n• Consultation scheduling\n\nHow may I assist you today?" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        return `• ${trimmed.substring(2)}`;
      }
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        return trimmed.substring(2, trimmed.length - 2);
      }
      return line;
    }).join('\n');
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/ai/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: formatMessage(data.data?.response || "I apologize, I couldn't process your request. Please try again or contact our team directly."),
      };

      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "I'm experiencing technical difficulties. Please contact our team at +265 881 14 77 90 for immediate assistance."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Glassmorphic Chat Container */}
      <div className="relative w-full max-w-2xl h-[600px] flex flex-col bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-primary to-secondary border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Construction Assistant</h3>
              <p className="text-xs text-white/90 font-light">Giants Construction & Consultancy</p>
            </div>
          </div>
          <Button 
            size="icon" 
            variant="ghost" 
            onClick={onClose} 
            className="text-white hover:bg-white/20 rounded-full w-9 h-9"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-6" ref={scrollRef}>
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex gap-3 max-w-[85%]">
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl p-4 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg"
                        : "bg-gray-50/90 backdrop-blur-sm border border-gray-200 text-gray-800 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {message.role === "user" ? (
                        <>
                          <User className="h-3 w-3 text-white/90" />
                          <span className="text-xs font-medium text-white/95">You</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-3 w-3 text-primary" />
                          <span className="text-xs font-medium text-gray-700">Giants Assistant</span>
                        </>
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed whitespace-pre-wrap ${
                      message.role === "user" ? "text-white" : "text-gray-700"
                    }`}>
                      {message.content}
                    </p>
                  </div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-gray-50/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-3 w-3 text-primary animate-spin" />
                      <span className="text-xs font-medium text-gray-700">Thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick Suggestions */}
        {messages.length === 1 && (
          <div className="px-6 pb-3">
            <p className="text-xs text-gray-600 mb-2 font-light">Quick suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Project cost estimate",
                "Construction timeline",
                "Service information",
                "Book consultation"
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    setInput(suggestion);
                    setTimeout(() => handleSend(), 100);
                  }}
                  className="px-3 py-1.5 text-xs bg-gray-100/80 backdrop-blur-sm border border-gray-200 rounded-full hover:bg-gray-200/80 transition-colors text-gray-700 font-light hover:text-primary"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Section */}
        <div className="p-6 border-t border-gray-200/50 bg-white/50 backdrop-blur-sm">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your construction question..."
                disabled={isLoading}
                className="bg-white/90 backdrop-blur-sm border-gray-300 text-gray-800 placeholder-gray-500 pl-10 pr-4 py-6 rounded-xl focus-visible:ring-primary focus-visible:ring-2 focus-visible:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Send className="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <Button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim()} 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity px-6 py-6 rounded-xl shadow-md"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin text-white" />
              ) : (
                <Send className="h-5 w-5 text-white" />
              )}
            </Button>
          </div>
          
          {/* Footer Note */}
          <p className="text-xs text-gray-600 text-center mt-4 font-light">
            For urgent matters, call +265 881 14 77 90
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;