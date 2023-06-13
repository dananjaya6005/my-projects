import React from "react";

const Tag = ({ color, name }) => {
  const tagStyle = {
    background: color,
    fontSize: '0.8rem',
    width: 'auto',
    height: 'auto',
    padding: '6px 10px',
    color:'white',
    display: 'inline-block',
    borderRadius: '7px',
  };

  return <div style={tagStyle}>{name}</div>;
};

export default Tag;
