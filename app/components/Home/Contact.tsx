"use client";

import { useState } from "react";
import {
  FiSend,
  FiCheck,
  FiAlertTriangle,
  FiUser,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Reset status when user starts typing
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
      // Simulated API call
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
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-center text-white">
          <h2 className="text-4xl font-bold tracking-tight">
            Get in <span className="text-yellow-300">Touch</span>
          </h2>
          <p className="mt-4 text-indigo-100">
            Have a project in mind? Let&apos;s collaborate and make something
            awesome!
          </p>
        </div>

        {/* Form Container */}
        <div className="p-8 space-y-6">
          {/* Error Message */}
          {status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg flex items-center">
              <FiAlertTriangle className="mr-3 text-2xl" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Success Message */}
          {status === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-600 p-4 rounded-lg flex items-center">
              <FiCheck className="mr-3 text-2xl" />
              <span>Your message has been sent successfully!</span>
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                disabled={status === "submitting"}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                disabled={status === "submitting"}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                <FiMessageCircle className="text-gray-400" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={4}
                disabled={status === "submitting"}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-lg 
              hover:from-indigo-700 hover:to-purple-800 transition duration-300 ease-in-out
              flex items-center justify-center space-x-2
              disabled:opacity-50 disabled:cursor-not-allowed
              transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {status === "submitting" ? (
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <>
                  <FiSend />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
