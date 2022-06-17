import React from "react";
import Container from "./Container";
import socials from "./data/social";

const Footer = () => {
  return (
    <div className=" bg-black py-3">
      <Container className="flex items-center justify-between py-2 px-5 w-full">
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
        <p className="text-center text-zinc-400">Made by: Abiola Fasanya - {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
