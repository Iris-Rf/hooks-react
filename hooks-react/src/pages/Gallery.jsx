import React, { useEffect, useState } from "react";
import Image from "../components/Image";

const Gallery = () => {
  const [characters, setCharacters] = useState([]);

  const charactersURL = "https://rickandmortyapi.com/api/character";

  const getGallery = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGallery(charactersURL);
  }, []);

  return (
    <>
      <div className="container-gallery"></div>
      <Image characters={characters} />
    </>
  );
};

export default Gallery;