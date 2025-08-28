import React, { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";

export default function ChatPreviewDemo({ department = "HR" }) {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const chatBodyRef = useRef(null);

  const allMessages = [
    { role: "user", text: "How do I apply for leave?" },
    { role: "bot", text: "Hello Amisha, please select your department: [HR] [Admin] [IT]" },
    { role: "user", text: "HR" },
    { role: "bot", text: "Great! To apply for leave, you can visit the HR portal." },
    { role: "user", text: "Can I submit it online?" },
    { role: "bot", text: "Yes, the leave application can be submitted online through the HR portal." },
    { role: "user", text: "Thanks! How do I know if my application is approved?" },
    { role: "bot", text: "Once your application is processed, you will receive an email confirmation." },
    { role: "user", text: "Perfect, I’ll submit it now." },
    { role: "bot", text: "Good luck! Let me know if you need further assistance." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < allMessages.length) {
        if (currentWordIndex < allMessages[currentIndex].text.split(" ").length) {
          setCurrentMessage((prevMessage) => prevMessage + " " + allMessages[currentIndex].text.split(" ")[currentWordIndex]);
          setCurrentWordIndex((prevIndex) => prevIndex + 1);
        } else {
          setMessages((prevMessages) => [...prevMessages, allMessages[currentIndex]]);
          setCurrentMessage("");
          setCurrentWordIndex(0);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }
    }, 300);

    return () => clearInterval(interval);
  }, [currentIndex, currentWordIndex]);

  useEffect(() => {
    chatBodyRef.current?.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-white py-10 px-8">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6">
          Virtual Assistant — {department} Department
        </h2>

        <div
          ref={chatBodyRef}
          className="flex flex-col gap-6 px-6 py-6 h-96 overflow-y-auto bg-gray-50 rounded-lg shadow-inner"
          style={{ maxHeight: "500px" }}
        >
          {messages.map((msg, i) => (
            <ChatBubble key={i} role={msg.role} text={msg.text} />
          ))}
          <ChatBubble role={allMessages[currentIndex]?.role} text={currentMessage} />
        </div>
      </div>
    </div>
  );
}
