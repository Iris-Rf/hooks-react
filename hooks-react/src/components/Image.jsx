import React from "react";

const Image = ({ characters = [] }) => {
  return (
    <div className="container-image">
      {characters.map((item, index) => (
        <div key={index} className="colum-image">
          <figure className="image">
          <img src={item.image} alt=""></img>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Image;
