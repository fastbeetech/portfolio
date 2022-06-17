import Container from "./Container";
import React from "react";

const Contact = (props) => {
  return (
    <div className="w-full bg-zinc-100">
      <Container className="container sm:px-5 lg:px-14 py-3">
        <h2 className="text-2xl font-bold">Contact</h2>
        {/* contact page */}
        <div className="flex">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-8 sm:grid-cols-1 items-center">
              <img
                src="https://res.cloudinary.com/fastbeetech/image/upload/v1655458144/jqmj589tqrdgiy57pc1j.jpg"
                alt="contact"
                className="w-full h-auto"
              />

              <div className="w-full bg-gray-300 p-2 rounded-b-md">
                <h3 className="text-center text-lg">Contact Me</h3>
                <p className="text-center">
                  If you have any questions, feel free to contact me.
                </p>
                <div className="flex  items-center space-x-8 my-2 justify-center">
                  <a
                    href="mailto:harbiola78@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-5"
                  >
                    Email
                  </a>
                  <a
                    href="
                  https://www.linkedin.com/in/abiola-fasanya-b9a8b917b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-500 hover:bg-zinc-600 text-dark rounded py-2 px-5"
                  >
                    LinkedIn
                  </a>
                </div>

                <div className="flex  items-center space-x-8 my-2 justify-center">
                  <form action="" method="post">
                    <div>
                      <label htmlFor="name">Name</label>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        id="name"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="message">Message</label>
                      <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                        Drop a message
                      </textarea>
                    </div>
                    <div>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded py-2 px-5"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
