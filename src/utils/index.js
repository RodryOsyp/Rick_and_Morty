const api = "https://rickandmortyapi.com/api/character"
export async function logMovies() {
  try {
    const response = await fetch(api);
    const movies = await response.json();
    return movies.results;

   } catch (err) {
    console.log(err);
  }
}
export async function fetchCharacter(id) {
  try {
    const response = await fetch(
      `${api}/${id}`
    );
    const character = await response.json();
    return character;
   } catch (err) {
    console.log(err);
  }
}

/*cconst chars = [{
  title: 'negr'
}
, {
  title: "botik"
},
{
title: 'women'
}]
const text = 'w';

const filteredTitles = chars
  .filter(char => char.title.includes(text))
  .map(char => char.title);

console.log(filteredTitles);

  */
