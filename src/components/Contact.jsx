import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you ${formData.name}! Your message has been sent. 🚀`);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-yellow-500 text-sm font-bold tracking-[3px] mb-3">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Let's <span className="text-yellow-500">Connect</span>
          </h2>

          <div className="w-12 h-1 bg-yellow-400 mx-auto mt-5"></div>

        </div>


        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT ================= */}

          <div>

            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              Have an idea?
              <br />
              Let's talk.
            </h3>

            <p className="mt-5 text-gray-600 text-sm md:text-base leading-7 max-w-lg">
              Whether you have a startup idea, want to collaborate
              or simply want to learn more about entrepreneurship,
              we'd love to hear from you.
            </p>


            {/* Email */}
            <div className="flex items-center gap-4 mt-8">

              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <span className="text-xl">✉️</span>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Email
                </p>

                <p className="text-sm font-semibold text-gray-900">
                  ecell@college.edu
                </p>
              </div>

            </div>


            {/* Location */}
            <div className="flex items-center gap-4 mt-6">

              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <span className="text-xl">📍</span>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Location
                </p>

                <p className="text-sm font-semibold text-gray-900">
                  UIET KUK
                </p>
              </div>

            </div>

          </div>


          {/* ================= FORM ================= */}

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200"
          >

            {/* Name */}
            <div className="mb-5">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg
                outline-none text-sm
                focus:border-yellow-400
                focus:ring-2 focus:ring-yellow-100
                transition"
              />

            </div>


            {/* Email */}
            <div className="mb-5">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg
                outline-none text-sm
                focus:border-yellow-400
                focus:ring-2 focus:ring-yellow-100
                transition"
              />

            </div>


            {/* Subject */}
            <div className="mb-5">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg
                outline-none text-sm
                focus:border-yellow-400
                focus:ring-2 focus:ring-yellow-100
                transition"
              />

            </div>


            {/* Message */}
            <div className="mb-5">

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="5"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg
                outline-none text-sm resize-none
                focus:border-yellow-400
                focus:ring-2 focus:ring-yellow-100
                transition"
              ></textarea>

            </div>


            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3.5 rounded-lg
              font-semibold text-sm
              hover:bg-yellow-400 hover:text-black
              transition-all duration-300"
            >
              Send Message
              <span className="ml-2">➤</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;