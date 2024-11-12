import { useState } from "react";
import { contactData } from "./Home";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <h2 className="text-5xl font-bold text-center mb-12">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactData.map((item, index) => (
            <Card key={index} className="text-center relative group bg-muted">
              {item.link && (
                <a href={item.link} className="absolute inset-0"></a>
              )}
              <CardContent className="p-6">
                <item.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-muted-foreground group-hover:underline group-hover:text-primary"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground group-hover:text-foreground">
                    {item.content}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-4">Send Us a Message</h3>
            <p className="mb-6">
              Feel free to reach out with any inquiries or questions. We're here
              to help!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full py-2 px-4 bg-foreground/5 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full py-2 px-4 bg-foreground/5 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full py-2 px-4 bg-foreground/5 rounded-lg border focus:border-primary focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" variant="" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Map Section */}
          <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6637.707178956316!2d73.0598921761663!3d33.71273723558022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfa2b4a3278d%3A0x34a59e63033052c2!2sAl-Malik%20Centre!5e0!3m2!1sen!2sus!4v1730717219153!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              title="Win Source Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
