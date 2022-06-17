import React from "react";
import Container from "./Container";
import socials from "./data/social";

const Footer = () => {
  return (
    <div className=" bg-black">
      <Container className="flex items-center justify-between py-3 px-5 w-full">
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 items-center w-full place-items-center">
          {socials.map((social, index) => (
            <div key={index} className="">
              <a
                href={social.url}
                className="flex my-4 text-zinc-400 hover:text-zinc-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="text-2xl mr-4" />
                {social.name}
              </a>
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-zinc-900 text-zinc-400">
        <p className="text-center py-2 px-5">Made by: Abiola Fasanya - {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
