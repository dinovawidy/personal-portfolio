import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ProjectItem({ slug, id, name, image}) {
  const navigate = useNavigate();
  return (
    <>
    
    <Link className="link" to={`/project/${slug}`} class="link">

    
    <div
      className="projectItem"
      //onClick={() => {
        // navigate("/project/" + id);
        //}}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
    </Link>
    
    </>
  );
}

export default ProjectItem;
