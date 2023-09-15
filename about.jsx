import React from "react";
import "./about.css";
import me2 from "../../img/m2.jpeg";

const About = () => {
  return (
    <>
      <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={me2} className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            This is Dinesh. A Cyber Security Student , a self taught and
            passionate Coder.
          </p>
          <p className="a-desc">
            I was born and raised in hyderabad India. Currently I'm doing CSE
            Cyber Security from the Sphoorthy engineering college .I am
            convinced of self-study. So in my spare time I am learning
            technologies like web development. I also have some big goals for
            future and want to discover and learn some big technologies like
            BlockChain development and Cyber Security.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
