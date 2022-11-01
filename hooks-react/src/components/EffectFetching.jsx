import { useState, useEffect } from "react";

import { useDebounce } from "use-debounce";

import { getRickandmorty } from "../Api/Rickandmorty";

export const EffectFetching = () => {
  const [filter, setFilter] = useState("");
  const [debounceFilter] = useDebounce(filter, 100);
  const [rickandmortyCollection, setRickandmortyCollection] = useState([]);

  useEffect(() => {
    getRickandmorty(filter).then((rickandmorty) =>
      setRickandmortyCollection(rickandmorty.results)
    );
  }, [debounceFilter]);

  console.log(rickandmortyCollection);

  return (
    <div>
      <div className="input-container">
        <input
          className="input-rickandmorty"
          type="text"
          name= "SEARCH CHARACTERS"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <ul>
        {rickandmortyCollection.map((rickandmorty) => (
          <li className="container-li" key={rickandmorty.name}>
            <img src={rickandmorty.image} alt={rickandmorty.name} />
            <h2>{rickandmorty.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
