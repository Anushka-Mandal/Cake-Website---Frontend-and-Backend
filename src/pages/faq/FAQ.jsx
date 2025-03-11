import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link
import './FAQ.css';

function FAQ() {
    console.log("FAQ component loaded");

    const faqs = [
        {
            question: 'What types of cakes do you offer?',
            answer: 'We offer a wide variety of cakes including birthday cakes, wedding cakes, and custom cakes tailored to your preferences.',
        },
        {
            question: 'How can I place an order?',
            answer: 'You can place an order through our website by selecting your desired cake, customizing it, and choosing a delivery option.',
        },
        {
            question: 'What is the delivery time?',
            answer: 'Our standard delivery time is within 48 hours, but express delivery options are available for urgent orders.',
        },
        {
            question: 'Do you offer custom cake designs?',
            answer: 'Yes, we specialize in custom cake designs. You can provide your design ideas or select from our design templates.',
        },
        {
            question: 'Can I cancel or modify my order?',
            answer: 'Orders can be canceled or modified up to 24 hours before the scheduled delivery time.',
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h1 className="faq-title">FAQs</h1>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <span>{faq.question}</span>
                            <span className="plus-button">{openIndex === index ? '−' : '+'}</span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="faq-button">
                {/* Wrap the button in a Link component */}
                <Link to="/about-us">
                    <button>Contact Us for More Info</button>
                </Link>
            </div>
        </section>
    );
}

export default FAQ;
