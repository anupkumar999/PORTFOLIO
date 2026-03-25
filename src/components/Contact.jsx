import React from "react";

const Contact = () => {
  return (
    <section name="contact" className="w-full bg-white p-6 text-slate-800 py-32">
      <div className="max-w-screen-xl px-6 mx-auto flex flex-col justify-center h-full">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 inline-block border-b-4 border-blue-600 pb-2">
            Get in Touch
          </h2>
          <p className="py-6 text-xl text-slate-600 font-medium max-w-2xl mx-auto md:mx-0">
            Submit the form below to connect with me.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="flex flex-col w-full lg:w-1/2 bg-slate-50 p-10 rounded-3xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              className="p-4 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all mb-4"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              className="p-4 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all mb-4"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              className="p-4 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all mb-6"
              required
            ></textarea>
            <button className="text-white bg-blue-600 px-8 py-4 font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg w-full">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="text-center mt-12 text-slate-600 font-medium">
          <p className="mb-2">Or reach out directly via</p>
          <p className="text-lg font-bold text-slate-900">
            anupk3518@gmail.com | +91 7760615213
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
