import React from "react";
import PropTypes from "prop-types";
const Card = ({ children, reverse }) => {
  return (
    <div
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
      className="card"
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
