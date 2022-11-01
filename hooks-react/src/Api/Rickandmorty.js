export const getRickandmorty = async (filter) => {
  const rickandmorty = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${filter}`
  );
  const rickandmortyToJson = await rickandmorty.json();
 console.log(rickandmortyToJson);
  return {
    ...rickandmortyToJson,
    name: rickandmortyToJson.results.name,
    image: rickandmortyToJson.results.image,
  };
};
