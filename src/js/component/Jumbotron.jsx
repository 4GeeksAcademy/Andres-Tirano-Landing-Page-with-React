import React from "react";

const Jumbotron = () => {
  return (
    <div className="bg-light p-5 rounded">
      <h1>Discover the World of Coding! Explore, Create, Innovate!</h1>
      <p className="lead">
        "Welcome to our coding community, where we focus on HTML5, CSS,
        JavaScript, and React. Whether you're a beginner or an expert, our
        platform is your gateway to mastering these essential technologies.
        Explore HTML5 for structuring content, CSS for creative and responsive
        designs, and JavaScript for dynamic web applications. Dive into React, a
        powerful library for building user interfaces, enabling you to create
        efficient and reusable components. Our interactive tutorials and
        hands-on projects provide practical experience, helping you develop
        modern, responsive websites and user-friendly applications. Join us to
        collaborate on projects, participate in coding challenges, and stay
        updated with the latest web development trends. No matter if you're
        designing elegant user interfaces or building robust web applications,
        our platform equips you with the skills needed to thrive. Let's code the
        future together!"
      </p>
      <a
        className="btn btn-lg btn-primary"
        href="/docs/5.0/components/navbar/"
        role="button"
      >
        SUBSCRIBE
      </a>
    </div>
  );
};

export default Jumbotron;
