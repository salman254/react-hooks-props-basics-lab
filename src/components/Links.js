import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3> {/* Added the h3 element as the test expects */}
      <a href={github} target="_blank" rel="noopener noreferrer">
        {github}
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        {linkedin}
      </a>
    </div>
  );
}

export default Links;
