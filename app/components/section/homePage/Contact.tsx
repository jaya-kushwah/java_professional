



"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactCard from "../../reusable/ContactCard";
import Button from "../../reusable/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const headerRef = useRef(null);
  const desktopHeaderRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isDesktopHeaderInView = useInView(desktopHeaderRef, { once: true });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    courseInterest: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Phone",
      description: "Call our training team for program details.",
      value: "+91 98765 43210",
    },
    {
      icon: <IoIosMail size={24} />,
      title: "Email",
      description: "Send us your questions anytime",
      value: "info@javaprofessional.com",
    },
    {
      icon: <FaLocationDot size={24} />,
      title: "Address",
      description: "Visit the academy for consultation.",
      value: "Indore, Madhya Pradesh",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative py-18 bg-[#f7f9fd] overflow-hidden">
      <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Header + Contact Cards */}
          <div className="order-2 lg:order-1">
            {/* Header - Desktop: in left column, Mobile: centered at top */}


            {/* Desktop Header - Shows only on desktop */}
            <motion.div
              ref={desktopHeaderRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isDesktopHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block mb-8"
            >
              <h2 className="text-black font-38 md:font-50 font-semibold mb-2">
                Get in touch
              </h2>
              <p className="text-secondary font-16 md:font-18">
                Fill out the form and our team will contact you with program details
              </p>
            </motion.div>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 lg:space-y-6"
            >
              {/* Contact Cards - stacked on mobile, 2 columns on desktop */}
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
                {contactInfo.slice(0, 2).map((info, index) => (
                  <ContactCard key={index} {...info} index={index} />
                ))}
              </div>

              {/* Full Width Address Card */}
              <div>
                <ContactCard {...contactInfo[2]} index={2} />
              </div>
            </motion.div>
          </div>

          {/* Contact Form - Mobile: first, Desktop: right side */}
          <motion.div
          
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F2F6FA] p-6 sm:p-8 rounded-lg order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 semibold mb-2">
                  Full Name<span>*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Abhay Thakur"
                  className="w-full py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 semibold mb-2">
                    Email<span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="abhay@gmail.com"
                    className="w-full py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 semibold mb-2">
                    Phone Number<span>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="9216443546"
                    className="w-full py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Course Interest */}
              <div>
                <label className="block text-gray-700 semibold mb-2">
                  Course Interest<span>*</span>
                </label>
                <select
                  name="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  required
                >
                  <option value="Java Full Stack Development">
                    Java Full Stack Development
                  </option>
                  <option value="Backend Development">Backend Development</option>
                  <option value="Microservices">Microservices</option>
                  <option value="DevOps">DevOps</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type Your Message here"
                  rows={1}
                  className="w-full py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  text="Submit Inquiry"
                  variant="primary"
                  icon={<ArrowRight size={16} strokeWidth={2} />}
                />
              </motion.div>
            </form>
          </motion.div>
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-left lg:text-left px-2 lg:px-0 lg:hidden"
          >
            <h2 className="text-black font-28 sm:font-38 md:font-50 font-semibold mb-2">
              Get in touch
            </h2>

            <p className="text-secondary font-16 sm:font-16 md:font-18">
              Fill out the form and our team will contact you with program details
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
