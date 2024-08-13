import React from "react";
import userData from "@constants/data";

export default function Contact() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto h-56 bg-white dark:bg-gray-800 antialiased">
        <h1 className="text-6xl md:text-8xl font-bold py-16 text-center md:text-left text-gray-900 dark:text-white">
          Contact
        </h1>
      </div>
      <div className="relative z-10 rounded-lg shadow-lg bg-[#02044A] p-6 md:p-12 lg:p-24 max-w-6xl mx-auto mb-20 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:ml-6">
            <header>
              <h2 className="text-gray-100 font-semibold text-3xl">
                Get in touch, let's talk.
              </h2>
              <p className="font-light text-lg text-gray-300 mt-3">
                Fill in the details and I'll get back to you as soon as I can.
              </p>
            </header>
            <div className="icons-container flex flex-col my-16">
              <ContactDetail
                icon="bi-telephone-fill"
                text={userData.phone}
              />
              <ContactDetail
                icon="bi-envelope-fill"
                text={userData.email}
              />
              <ContactDetail
                icon="bi-pin-fill"
                text={userData.address}
              />
            </div>
            <div className="social-icons flex space-x-6 mt-6">
              <SocialIcon href={userData.socialLinks.facebook} icon="bi-facebook" />
              <SocialIcon href={userData.socialLinks.twitter} icon="bi-twitter" />
              <SocialIcon href={userData.socialLinks.instagram} icon="bi-instagram" />
            </div>
          </div>
          <form className="form rounded-lg bg-white p-6 flex flex-col shadow-md">
            <LabelAndInput label="Your Name" name="name" />
            <LabelAndInput label="Email" name="email" type="email" />
            <LabelAndInput label="Message" name="message" isTextarea />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 rounded-md w-1/2 mx-4 mt-8 py-2 text-white text-sm font-bold transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({ icon, text }) {
  return (
    <div className="flex items-center space-x-6 rounded-md border border-transparent hover:border-blue-500 p-4 transition-colors duration-200 ease-in-out">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className={`bi ${icon} h-6 w-6 text-blue-500`}
        viewBox="0 0 16 16"
      >
        {/* SVG path here based on icon */}
      </svg>
      <p className="text-gray-100 font-light text-base">{text}</p>
    </div>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      className="h-12 w-12 rounded-full hover:bg-blue-500 flex items-center justify-center transition-colors duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    >
      <svg
        width="24"
        height="24"
        className="text-gray-100"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SVG path here based on icon */}
      </svg>
    </a>
  );
}

function LabelAndInput({ label, name, type = "text", isTextarea = false }) {
  return (
    <div className="flex flex-col mt-4">
      <label htmlFor={name} className="text-sm text-gray-600 mx-4">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          rows="4"
          className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
          name={name}
        ></textarea>
      ) : (
        <input
          type={type}
          className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
          name={name}
        />
      )}
    </div>
  );
}
