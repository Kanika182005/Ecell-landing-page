import React from "react";

function Events() {
  const events = [
    {
      date: "15",
      month: "SEP",
      category: "WORKSHOP",
      title: "Startup 101",
      description:
        "Learn how to transform your idea into a successful startup.",
      time: "10:00 AM",
      location: "Seminar Hall",
    },
    {
      date: "22",
      month: "SEP",
      category: "COMPETITION",
      title: "Idea Pitching Challenge",
      description:
        "Pitch your startup idea and compete with innovative minds.",
      time: "11:00 AM",
      location: "Auditorium",
    },
    {
      date: "05",
      month: "OCT",
      category: "NETWORKING",
      title: "Founder Connect",
      description:
        "Meet successful founders and learn from their entrepreneurial journey.",
      time: "2:00 PM",
      location: "Conference Hall",
    },
  ];

  return (
    <section id="events" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        
        <div className="text-center mb-16">

          <p className="text-yellow-500 text-sm font-bold tracking-[3px] mb-3">
            WHAT'S HAPPENING
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Upcoming <span className="text-yellow-500">Events</span>
          </h2>

          <div className="w-12 h-1 bg-yellow-400 mx-auto mt-5"></div>

        </div>


        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {events.map((event, index) => (

            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6
              flex gap-5
              hover:-translate-y-2
              hover:shadow-xl
              transition-all duration-300"
            >

              
              <div className="min-w-[60px] h-[70px] bg-gray-900 rounded-xl
                              flex flex-col items-center justify-center">

                <span className="text-yellow-400 text-2xl font-bold">
                  {event.date}
                </span>

                <span className="text-white text-[10px] font-semibold tracking-wider">
                  {event.month}
                </span>

              </div>


              
              <div className="flex-1">

                
                <span className="inline-block text-yellow-600 text-[10px]
                                 font-bold tracking-widest mb-2">
                  {event.category}
                </span>


              
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {event.title}
                </h3>


                
                <p className="text-gray-500 text-xs leading-6">
                  {event.description}
                </p>


                
                <div className="flex flex-wrap gap-4 mt-4">

                  <span className="text-gray-500 text-[10px]">
                    🕐 {event.time}
                  </span>

                  <span className="text-gray-500 text-[10px]">
                    📍 {event.location}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Events;