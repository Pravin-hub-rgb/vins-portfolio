import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-4xl mb-12">
          Contact Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-start space-y-10 md:space-y-0 md:space-x-10">
          {/* Intro Block */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Let’s get in touch!</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Have a question, project idea, or just want to say hello?
              Fill out the form — I’ll get back to you soon!
            </p>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 w-full px-4 py-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md">
            <form
              action="https://airform.io/pravinkumar3000@tutanota.com"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm text-neutral-800 dark:text-neutral-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm text-neutral-800 dark:text-neutral-200"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="mt-1 block w-full px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm text-neutral-800 dark:text-neutral-200"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md text-sm transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
