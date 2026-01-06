import ContactExperience from "../components/ContactModels/ContactExperience";
import TitleHeader from "../components/TitleHeader";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_API_KEY
      );
      setSuccess(true);
    } catch (error) {
      console.log("EMAILJS ERROR", error);
    } finally {
      setLoading(false);
    }
    setformData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="flex-center section-padding mb-10">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          sub="✉️ Get In Touch With Me"
          title=" Contact Information"
        />

        <div className="mt-16 grid-12-cols">
          {/* LEFT: CONTACT FORM*/}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-semibold rounded-md 
                  flex justify-center items-center bg-white-50 cursor-pointer"
                >
                  <p className="text">
                    {loading ? "Sending... " : "Send message"}
                  </p>
                </button>
                {success && (
                  <p className="text-green-500 font-semibold mt-2">
                    Message sent successfully! Thanks for reaching out.
                  </p>
                )}
              </form>
            </div>
          </div>
          {/* RIGHT: 3D MODEL*/}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
