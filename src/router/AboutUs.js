import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Link to="/">
        <img
          className="h-28 w-auto"
          src="https://sw-maestro.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe97f0af5-bb39-4ac6-9c41-fcbc96082cbf%2Flogo(250).png?table=block&id=d3ef903a-5073-43c9-be87-831ac7515b15&spaceId=461dcd9b-30d0-4f58-92fa-01a38636821b&width=250&userId=&cache=v2"
          alt="Workflow"
        />
      </Link>
      <div>
        <h1>팀 소개 페이지?</h1>
      </div>
    </>
  );
};

export default AboutUs;
