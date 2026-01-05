import TitleHeader from "../components/TitleHeader";

const Contact = () => {
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
              <form className="w-full flex flex-col gap-7">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    //value={formData.name}
                    //onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    //value={formData.email}
                    //onChange={handleChange}
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
                    //value={formData.message}
                    //onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-semibold rounded-md 
                  flex justify-center items-center bg-white-50 cursor-pointer"
                >
                  <p className="text"> Send message</p>
                </button>
              </form>
            </div>
          </div>
          {/* RIGHT: 3D MODEL*/}
          <div className="xl:col-span-7 min-h-96"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
