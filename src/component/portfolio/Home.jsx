import React from "react";
import Container from "./Container";

const Home = (props) => {
  return (
    <div className="w-full bg-zinc-100">
      <Container className="container mx-auto sm:px-5 lg:px-14 py-3">
        <div className="flex lg:flex-row  sm:flex-col-reverse sm:justify-center items-center sm:space-y-5 lg:space-x-5">
          <div>
            <h1 className="text-4xl mb-12">Hello Viewer</h1>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non
              aspernatur unde aut pariatur id amet consequuntur! Dolores, nihil
              quibusdam!
            </p>
            <button className="mt-12 rounded-full py-2 px-5 bg-orange-500 hover:bg-orange-600">
              Contact ME
            </button>
          </div>
          <div className="pt-5">
            <img
              src="https://github.com/fastbeetech/fastbeetech/raw/main/abiola.jpg"
              alt=""
              className="rounded-full shadow-sm"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
