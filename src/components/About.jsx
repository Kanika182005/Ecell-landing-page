import React from "react";

function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">

          <p className="text-yellow-500 text-sm font-bold tracking-[3px] mb-3">
            WHO WE ARE
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Turning <span className="text-yellow-500">Ideas</span> Into Impact
          </h2>

          <div className="w-12 h-1 bg-yellow-400 mx-auto mt-5"></div>

        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">


          <div className="relative">
            <div className="h-[350px] bg-gray-900 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden">

            
              <div className="absolute w-64 h-64 border-2 border-yellow-500/30 rounded-full"></div>

              <div className="absolute w-80 h-80 border border-yellow-500/10 rounded-full"></div>


            
              <div className="relative z-10">

                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">

                  <span className="text-5xl">
                    💡
                  </span>

                </div>

                <h3 className="text-white text-2xl font-bold">
                  Dream. Build. Inspire.
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  A community of young innovators and entrepreneurs.
                </p>

              </div>

            </div>


          
            <div className="absolute -bottom-6 -right-5 bg-white shadow-xl rounded-xl px-5 py-4 flex items-center gap-3">

              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                🚀
              </div>

              <div>

                <p className="text-xs text-gray-500">
                  Our Mission
                </p>

                <p className="font-bold text-sm">
                  Create. Innovate. Lead.
                </p>

              </div>

            </div>

          </div>


          

          <div>

            <h3 className="text-3xl font-bold text-gray-900 mb-5">
              Building the entrepreneurial mindset
            </h3>


            <p className="text-gray-600 leading-8 text-sm md:text-base mb-4">
              E-Cell is a student-driven community dedicated to
              fostering innovation, creativity and entrepreneurship
              among students.
            </p>


            <p className="text-gray-600 leading-8 text-sm md:text-base">
              We provide a platform where students can develop their
              ideas, connect with industry experts, attend workshops
              and gain real-world entrepreneurial experience.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mt-8">


              
              <div className="flex items-center gap-3">

                <div className="w-7 h-7 bg-yellow-100 rounded-full flex items-center justify-center">

                  <span className="text-yellow-600 text-xs">
                    ✓
                  </span>

                </div>

                <span className="text-sm font-semibold">
                  Innovation & Creativity
                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-7 h-7 bg-yellow-100 rounded-full flex items-center justify-center">

                  <span className="text-yellow-600 text-xs">
                    ✓
                  </span>

                </div>

                <span className="text-sm font-semibold">
                  Startup Mentorship
                </span>

              </div>
              <div className="flex items-center gap-3">

                <div className="w-7 h-7 bg-yellow-100 rounded-full flex items-center justify-center">

                  <span className="text-yellow-600 text-xs">
                    ✓
                  </span>

                </div>

                <span className="text-sm font-semibold">
                  Networking Opportunities
                </span>

              </div>

              <div className="flex items-center gap-3">

                <div className="w-7 h-7 bg-yellow-100 rounded-full flex items-center justify-center">

                  <span className="text-yellow-600 text-xs">
                    ✓
                  </span>

                </div>

                <span className="text-sm font-semibold">
                  Skill Development
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;