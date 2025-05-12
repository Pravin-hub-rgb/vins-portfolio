import React from "react";

export default function Contact() {
    return (
        <div className="mt-10 px-6 py-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-center text-neutral-900 dark:text-neutral-100 mb-2">
                Contact Me
            </h3>
            <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                Have a question, project, or just want to say hello? Drop a message below.
            </p>

            <form
                action="https://airform.io/pravinkumar3000@tutanota.com"
                method="POST"
                className="space-y-5 max-w-xl mx-auto"
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
    )
}