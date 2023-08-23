import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header title="Home Page" />

      <p className="para">
        Body goes here Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Non sunt necessitatibus quia magnam et nemo repudiandae corrupti quis.
        Est explicabo, sapiente corrupti suscipit beatae ullam sunt perferendis
        nisi id cumque!
      </p>
      <p style={{ color: "green", textTransform: "uppercase" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
        perferendis dolores saepe tenetur enim nesciunt dolor labore aspernatur
        consectetur distinctio placeat voluptates, eaque id neque debitis quod
        pariatur, omnis quos.
      </p>

      <Footer />
    </div>
  );
};

export default Home;
