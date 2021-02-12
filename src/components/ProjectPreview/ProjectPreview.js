import React from "react";
import { useHistory } from "react-router-dom";
import "./ProjectPreview.scss";
import { Link } from "react-router-dom";
import { ImEye as EyeIcon } from "react-icons/im";

const ProjectPreview = ({ children, title, imgUrl, uri = "/" }) => {
  const history = useHistory();

  return (
    <section className="ProjectPreview">
      <div
        className="ProjectPreview-Image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div
          className="ProjectPreview-Image-View"
          onClick={() => history.push(uri)}
        >
          <EyeIcon />
        </div>
      </div>
      <div className="ProjectPreview-Title">{title}</div>
      <div className="ProjectPreview-Children">{children}</div>
      <Link to={uri} className="ProjectPreview-Link button-hover-gradient">
        View project
      </Link>
    </section>
  );
};

export default ProjectPreview;
