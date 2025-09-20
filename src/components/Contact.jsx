import React from "react";

const Contact = () => {
  return (
    <section name="contact" className="w-full bg-white p-4 text-black py-24">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <h2 className="text-4xl font-extrabold inline border-b-4 border-gray-400">
            Contact
          </h2>
          <p className="py-6 text-lg text-gray-600">Submit the form below to get in touch with me!</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="flex flex-col w-full md:w-1/2"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="Name"
              placeholder="Enter Your Name"
              className="p-3 bg-gray-100 border-2 border-gray-200 rounded-md text-black focus:outline-none focus:border-black"
            />
            <input
              type="text"
              name="Email"
              placeholder="Enter Your Email"
              className="my-4 p-3 bg-gray-100 border-2 border-gray-200 rounded-md text-black focus:outline-none focus:border-black"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="8"
              className="p-3 bg-gray-100 border-2 border-gray-200 rounded-md text-black focus:outline-none focus:border-black"
            ></textarea>
            <button className="text-white bg-black px-6 py-3 my-8 mx-auto flex items-center rounded-full hover:bg-gray-800 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
        
        <div className="text-center mt-8 text-gray-600">
          <p>OR</p>
          <p className="mt-2">Phone: 7760615213 | Email: anupkumarmofficial@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;