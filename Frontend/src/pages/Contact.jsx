import React from "react";

const teamMembers = [
  {
    name: "Kanhucharan Das",
    position: "Head of IT",
    email: "kandu.das@bombaydyeing.com",
    description: "Oversees IT strategy and digital transformation initiatives.",
    image: "/admin.jpg",
  },
  {
    name: "Nitin Waingankar",
    position: "Manager",
    email: "nitin@bombaydyeing.com",
    description: "Manages daily IT operations and team coordination.",
    image: "/admin.jpg",
  },
  {
    name: "Nilesh Bandiwadekar",
    position: "System Administrator",
    email: "nilesh@bombaydyeing.com",
    description: "Specialist in maintaining and troubleshooting hardware systems.",
    image: "/admin.jpg",
  },
  {
    name: "Aniket Shinde",
    position: "Technical Support Engineer",
    email: "aniket@bombaydyeing.com",
    description: "Focuses on developing and supporting in-house applications.",
    image: "/admin.jpg",
  },
  {
    name: "Parth",
    position: "Intern",
    email: "parth@bombaydyeing.com",
    description: "Assists in IT projects and gains practical industry experience.",
    image: "/admin.jpg",
  },
  {
    name: "Amisha",
    position: "Intern",
    email: "amisha@bombaydyeing.com",
    description: "Contributing to web development and AI-based solutions as part of internship.",
    image: "/admin.jpg",
  },

  {
    name: "Tanay",
    position: "Intern",
    email: "tanay@bombaydyeing.com",
    description: "Full Stack Developer",
    image: "/admin.jpg",
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 px-6 py-16 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-14 tracking-tight">
        Meet Our IT Administration Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-7xl px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-blue-100 shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
            <p className="text-sm text-gray-700 font-medium mb-1">{member.position}</p>
            <p className="text-xs text-gray-600 mb-3">{member.description}</p>
            <a
              href={`mailto:${member.email}`}
              className="text-sm text-blue-700 font-semibold hover:underline"
            >
              {member.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
