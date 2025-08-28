import React from 'react';

const testimonials = [
  {
    name: "Priya",
    role: "HR Manager",
    dept: "Human Resources",
    text: "The virtual assistant has revolutionized how our employees get support. Response times have improved by 80%.",
    image: "/anita.jpg"
  },
  {
    name: "Muskan",
    role: "Software Engineer",
    dept: "IT Department",
    text: "I love how quickly I can get answers to policy questions and IT support. It's like having a personal assistant 24/7.",
    image: "/anita.jpg"
  },
  {
    name: "Anita",
    role: "Finance Director",
    dept: "Finance",
    text: "The integration with our systems is seamless. Employees handle routine requests without involving us.",
    image: "/anita.jpg"
  }
];

const Testimonials = () => (
  <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100" id="testimonials">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">What Our Team Says</h2>
      <p className="mb-12 text-gray-700 text-base sm:text-lg">
        Hear from employees and managers who’ve experienced the difference.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 text-left border border-gray-100"
          >
            <p className="text-gray-800 italic mb-6 leading-relaxed">“{t.text}”</p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 shadow-md"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role} — {t.dept}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
