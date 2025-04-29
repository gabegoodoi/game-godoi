import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation for route detection
import emailjs from "@emailjs/browser";

function Contact() {
    const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);
    const location = useLocation(); // Get the current route location

    useEffect(() => {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (!publicKey) {
            console.error("EmailJS public key is missing.");
            return;
        }
        emailjs.init(publicKey);
    }, []);

    // Clear notification on route change
    useEffect(() => {
        setNotification(null);
    }, [location]);

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        if (!serviceID || !templateID) {
            console.error("Service ID or Template ID is missing.");
            setNotification({ message: "Email configuration is incomplete.", type: "error" });
            return;
        }

        if (form.current) {
            emailjs.sendForm(serviceID, templateID, form.current)
                .then(
                    (result) => {
                        console.log("Email sent successfully:", result.text);
                        setNotification({ message: "Message sent successfully!", type: "success" });
                    },
                    (error) => {
                        console.error("Error sending email:", error);
                        setNotification({ message: "Failed to send message. Please try again.", type: "error" });
                    }
                );
        }
    };

    return (
        <section style={{ fontFamily: "'Dm Serif Display', serif" }}>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md contact-page">
                <h2 className="text-6xl font-bold pb-4 text-yellow-400">
                    Contact Me
                </h2>
                <p
                    className="mb-6 text-2xl text-left text-pink-400"
                    style={{ fontFamily: "'League Spartan', sans-serif" }}
                >
                    If you have any questions or if you want to get in touch, please feel free to reach out. I would love to hear from you!
                </p>
                {notification && (
                    <div
                        style={{ fontFamily: "'League Spartan', sans-serif" }}
                        className={`p-4 mb-6 text-md rounded-lg mt-6 flex justify-between items-center ${
                            notification.type === "success"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}
                        role="alert"
                    >
                        <span>{notification.message}</span>
                        <button
                            onClick={() => setNotification(null)}
                            className="ml-4 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            ✕
                        </button>
                    </div>
                )}
                <form ref={form} onSubmit={sendEmail} className="space-y-8" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Email address"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Subject"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a message..."
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="contact-button text-white p-2 border rounded-lg shadow"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;