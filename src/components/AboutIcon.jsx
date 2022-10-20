import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutIcon = () => {
  return (
    <>
      <Link className="customAbout" to="/about">
        <FaQuestion size={30} />
      </Link>
    </>
  );
};

export default AboutIcon;
