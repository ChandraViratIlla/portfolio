"use client";

import React, { useState } from "react";
import { FiSend, FiUser, FiMail, FiMessageCircle } from "react-icons/fi";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (status !== "idle") setStatus("idle");
  };

  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name.trim()) {
      setErrorMessage("Name is required");
      setStatus("error");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email");
      setStatus("error");
      return false;
    }

    if (!message.trim()) {
      setErrorMessage("Message cannot be empty");
      setStatus("error");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred");
    }
  };

  return (
    <div id="contact" className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl w-full space-y-8 bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden p-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
        Contact Us
      </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-4 border-0 bg-gray-100 dark:bg-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 transition duration-300 text-lg"
              />
              <FiUser className="absolute inset-y-0 left-3 my-auto text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full pl-10 pr-4 py-4 border-0 bg-gray-100 dark:bg-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 transition duration-300 text-lg"
              />
              <FiMail className="absolute inset-y-0 left-3 my-auto text-gray-400" />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={5}
                className="w-full pl-10 pr-4 py-4 border-0 bg-gray-100 dark:bg-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 transition duration-300 resize-none text-lg"
              />
              <FiMessageCircle className="absolute top-4 left-3 text-gray-400" />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 text-lg"
            >
              <div className="flex items-center justify-center space-x-2">
                <FiSend />
                <span>Send Message</span>
              </div>
            </button>
          </form>

          {status === "error" && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
          {status === "success" && (
            <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
          )}
        </div>
      </div>
    
  );
};

export default ContactPage;