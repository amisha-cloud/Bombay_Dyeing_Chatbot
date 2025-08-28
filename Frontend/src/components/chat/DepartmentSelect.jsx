export default function DepartmentSelect({ onSelect }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl text-center">
        <img src="/bd_logo.jpg" alt="Bombay Dyeing" className="mx-auto mb-6 h-16" />
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          How can we assist you today?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "💻 IT Support", value: "IT", img: "/it_img.jpg" },
            { label: "👩‍💼 HR Queries", value: "HR", img: "/hr_img.jpg" },
            { label: "🧾 Admin Services", value: "Admin", img: "/admin.jpg" }
          ].map((card) => (
            <div
              key={card.value}
              onClick={() => onSelect(card.value)}
              className="cursor-pointer bg-white shadow-md rounded-xl p-4 transition-transform hover:scale-105 hover:shadow-xl"
            >
              <img src={card.img} alt={card.value} className="w-full h-40 object-cover rounded-md mb-3" />
              <p className="text-lg font-semibold text-blue-700">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
