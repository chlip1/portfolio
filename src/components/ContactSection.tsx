"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(`Failed to send message. Error code: ${response.status}`);
      }
    } catch (error) {
      console.error("Catch block error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 max-w-[90vw] lg:max-w-[60vw]">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-24 h-1 mx-auto bg-cyan-500 rounded"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg p-6" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Your message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white font-medium py-3 rounded-lg hover:bg-cyan-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to me using the form or directly via the
              following methods:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-500 w-5 h-5" />
                <span className="text-sm">lukasz@chlipala.dev</span>
              </li>
              <li className="flex items-center gap-4">
                <FaLinkedin className="text-cyan-500 w-5 h-5" />
                <a
                  href="https://linkedin.com/in/lchlipala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-800 hover:text-cyan-500 transition duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FaGithub className="text-cyan-500 w-5 h-5" />
                <a
                  href="https://github.com/chlip1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-800 hover:text-cyan-500 transition duration-300"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
