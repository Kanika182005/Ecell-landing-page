import React from "react";

function Team() {
  const team = [
    {
      name: "Tanishq Garg",
      role: "Team lead",
      icon: "👨‍💼",
    },
    {
      name: "Kanishka Mittal",
      role: "Co-lead",
      icon: "👩‍💼",
    },
    {
      name: "Gajender Yadav",
      role: "Incubation lead",
      icon: "👨‍💻",
    },
    {
      name: "Aman Kumar",
      role: "Web developer lead",
      icon: "👩‍💻",
    },
    {
      name: "Arvind Yadav",
      role: "Web developer lead",
      icon: "👩‍💻",
    },
    {
      name: "Himanshu Sinha",
      role: "Web developer ",
      icon: "👩‍💻",
    },
    {
      name: "Gourav ",
      role: "Web developer",
      icon: "👩‍💻",
    },
    {
      name: "Shanker",
      role: "Web developer",
      icon: "👩‍💻",
    },
  ];

  return (
    <section id="team" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-yellow-500 text-sm font-bold tracking-[3px] mb-3">
            MEET THE TEAM
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            People Behind{" "}
            <span className="text-yellow-500">E-Cell</span>
          </h2>

          <div className="w-12 h-1 bg-yellow-400 mx-auto mt-5"></div>

        </div>


        {/* Team Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {team.map((member, index) => (

            <div
              key={index}
              className="group text-center border border-gray-200 rounded-2xl p-6
              hover:-translate-y-2
              hover:shadow-xl
              transition-all duration-300"
            >

              {/* Profile Image */}
              <div
                className="w-28 h-28 mx-auto mb-5
                bg-yellow-100 rounded-full
                flex items-center justify-center
                text-5xl
                group-hover:bg-yellow-400
                transition duration-300"
              >
                {member.icon}
              </div>


              {/* Name */}
              <h3 className="text-lg font-bold text-gray-900">
                {member.name}
              </h3>


              {/* Role */}
              <p className="text-yellow-600 text-xs font-semibold mt-1">
                {member.role}
              </p>


              {/* Social Icons */}
              <div className="flex justify-center gap-2 mt-5">

                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-900
                  text-white flex items-center justify-center
                  text-xs hover:bg-yellow-400 hover:text-black
                  transition duration-300"
                >
                  in
                </a>

                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-900
                  text-white flex items-center justify-center
                  text-xs hover:bg-yellow-400 hover:text-black
                  transition duration-300"
                >
                  ig
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Team;