import { useState, useEffect } from "react";

import { useDebounce } from "use-debounce";

import { getRickandmorty } from "../Api/Rickandmorty";

export const EffectFetching = () => {
  const [filter, setFilter] = useState("Rick Sanchez");
  const [rickandmortyCollection, setRickandmortyCollection] = useState([]);

  const [debounceFilter] = useDebounce(filter, 100);

  useEffect(() => {
    getRickandmorty(filter).then((rickandmorty) =>
      setRickandmortyCollection([rickandmorty])
    );
  }, [debounceFilter]);

  return (
    <>
      <ul>
        {rickandmortyCollection.map((rickandmorty) => ( 
          <li key={rickandmorty.image}>
            <h1>{rickandmorty.image}</h1>
            <img src={rickandmorty.image} alt={rickandmorty.name} />
          </li>
        ))} 
      </ul>

    </>
  );
};
