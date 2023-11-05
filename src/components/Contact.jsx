import React from "react";

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-gradient-to-b from-slate-800 to-slate-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-800 ">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me!!</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/926ac0a5-0360-447c-b8ae-92c61d6f8ee9" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="Name"
              placeholder="Enter Your Name"
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="Email"
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea name="message" placeholder="Enter Your Message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-white focus-within:none"></textarea>
          <button className="text-white  bg-gradient-to-b from-gray-800 to-red-500 px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
