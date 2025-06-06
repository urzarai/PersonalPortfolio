import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import "./ContactMe.css"; // Use your existing CSS

const ACCESS_KEY = "42ffeec6-a5e6-466a-aa53-d6c7ad2421c8"; 

const ContactMe = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const { submit } = useWeb3Forms({
    access_key: ACCESS_KEY,
    settings: {
      from_name: "Portfolio Contact",
      subject: "New Contact Message from Portfolio",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <section className="contact-section">
      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit(submit)} autoComplete="off">
            <h2>CONTACT ME</h2>
            <input
              type="text"
              placeholder="Enter Full Name"
              {...register("name", { required: "Full Name is required" })}
              disabled={isSubmitting}
            />
            {errors.name && <small className="error">{errors.name.message}</small>}

            <input
              type="email"
              placeholder="Enter your Email-ID"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
              })}
              disabled={isSubmitting}
            />
            {errors.email && <small className="error">{errors.email.message}</small>}

            <input
              type="text"
              placeholder="Enter Subject"
              {...register("subject", { required: "Subject is required" })}
              disabled={isSubmitting}
            />
            {errors.subject && <small className="error">{errors.subject.message}</small>}

            <textarea
              rows="6"
              placeholder="Enter message"
              {...register("message", { required: "Message is required" })}
              disabled={isSubmitting}
            ></textarea>
            {errors.message && <small className="error">{errors.message.message}</small>}

            <button type="submit" className="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {isSubmitSuccessful && (
              <div className={isSuccess ? "form-status success" : "form-status error"}>
                {message}
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Urza Rai</h2>
          <div className="info-item">
            <strong>Email: </strong>
            <a href="mailto:raiurza@gmail.com">raiurza@gmail.com</a>
          </div>
          <div className="info-item">
            <strong>Phone: </strong>
            <a href="tel:+919718047132">+91 971804 7132</a>
          </div>
          <div className="info-item">
            <strong>Location: </strong>Pune, Maharashtra
          </div>
          <div className="info-item socials">
            <strong>Social: </strong>
            <a href="https://linkedin.com/in/urza-rai" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/urzarai" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
