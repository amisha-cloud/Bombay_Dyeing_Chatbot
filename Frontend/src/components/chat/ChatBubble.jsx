export default function ChatBubble({ role, text }) {
  return (
    <div
      className={`max-w-[75%] px-4 py-2 rounded-lg text-sm shadow-md ${
        role === "user"
          ? "bg-blue-600 text-white self-end ml-auto"
          : "bg-gray-200 text-gray-900 self-start"
      }`}
    >
      {text}
    </div>
  );
}
