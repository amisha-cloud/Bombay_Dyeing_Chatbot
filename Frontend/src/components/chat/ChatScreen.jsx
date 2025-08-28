import React, { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble"; // Optional
import { Bot, Mic, Send, ImageIcon, Info } from "lucide-react";
import axios from "axios";

export default function ChatScreen({ department = "HR" }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [botTyping, setBotTyping] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    // Initial welcome message with typing effect
    setBotTyping(true);
    const timer = setTimeout(() => {
      setMessages([
        {
          role: "bot",
          text: `Hello, How can I assist you today?`,
        },
      ]);
      setBotTyping(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [department]);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, botTyping]);

  const handleSend = async () => {
    if (!input.trim() && !image) return;

    const newMessages = [...messages];

    if (input.trim()) {
      newMessages.push({ role: "user", text: input });
    }

    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      try {
        const res = await axios.post("http://localhost:8000/upload-image/", formData);
        const imgUrl = `http://localhost:8000${res.data.url}`;
        newMessages.push({ role: "user", image: imgUrl });
      } catch (err) {
        console.error("Image upload failed", err);
      }
      setImage(null);
    }

    const userMessage = input;
    setInput("");
    setMessages(newMessages);
    setBotTyping(true);

    try {
      const res = await axios.post("http://localhost:8000/chat", {
        message: userMessage,
        history: newMessages.map((msg) => ({
          role: msg.role === "user" ? "user" : "assistant",
          content: msg.text || "",
        })),
      });

      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "bot", text: res.data.reply }]);
        setBotTyping(false);
      }, 1200);
    } catch (err) {
      console.error("Chat failed", err);
      setMessages((prev) => [...prev, { role: "bot", text: "Error getting response." }]);
      setBotTyping(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    }
  };

  return (
    <div className="h-screen flex bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100">
      
      {/* Left Side Info Panel */}
      <div className="w-1/2 p-8 flex flex-col justify-center text-indigo-800 bg-blue shadow-xl">
        <h2 className="text-4xl font-bold mb-4">Welcome to SUQMS</h2>
        <p className="text-base mb-6 leading-relaxed">
          <span className=" text-2xl font-semibold">Smart Unified Employee Query Management System</span> (SUQMS) helps you resolve work-related queries with AI support.
        </p>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <Info className="text-indigo-600 w-4 h-4" />
            <span>Ask IT, HR, or Admin queries</span>
          </div>
          <div className="flex items-center gap-2">
            <ImageIcon className="text-indigo-600 w-4 h-4" />
            <span>Upload screenshots for better support</span>
          </div>
          <div className="flex items-center gap-2">
            <Bot className="text-indigo-600 w-4 h-4" />
            <span>Available 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <Mic className="text-indigo-600 w-4 h-4" />
            <span>Multilingual support coming soon</span>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          Powered by <span className="font-semibold">Amisha’s AI Bot</span>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="w-2/3 flex items-center justify-center">
        <div className="w-full max-w-3xl h-[70vh] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-indigo-600 text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Bombay Dyeing Assistant</h2>
            </div>
          </div>

          {/* Chat Body */}
          <div
            ref={chatRef}
            className="flex-1 px-4 py-4 overflow-y-auto space-y-3 bg-[#f9fbfc] scroll-smooth"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-2 text-sm rounded-xl max-w-[80%] shadow-md ${
                  msg.role === "user"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-gray-800 border border-gray-200"
                }`}>
                  {msg.text && <p>{msg.text}</p>}
                  {msg.image && (
                    <img
                      src={msg.image}
                      alt="uploaded"
                      className="mt-1 max-w-xs rounded-md"
                    />
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {botTyping && (
              <div className="flex justify-start">
                <div className="px-4 py-2 text-sm rounded-xl bg-white text-gray-500 border border-gray-200 animate-pulse shadow-sm max-w-[60%]">
                  Bot is typing...
                </div>
              </div>
            )}
          </div>

          {/* Input Box */}
          <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-200 bg-white">
            <label htmlFor="imageUpload">
              <ImageIcon className="text-gray-500 w-5 h-5 cursor-pointer" />
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            <Mic className="text-gray-500 w-5 h-5 cursor-pointer" />

            <input
              type="text"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button
              onClick={handleSend}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
