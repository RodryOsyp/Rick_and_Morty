import React from "react";
import style from "./CharactersList.module.css";
import CharactersItem from "../../componets/CharactersItem/CharactersItem.jsx";
import { Link } from "react-router-dom";
import CharacterLoader from "../../componets/Loader/CharacterLoader.jsx";

const CharactersList = ({ characters, loading }) => {
 const loaderList = new Array(3).fill(null).map((_, index) => <CharacterLoader key={index} />)
 
  return (
    <div className={style.body}>
      {loading ? (
       <div className={style.loaderList}>{loaderList}</div>
      ) : (
        characters && (
          <ul className={style.charactersList}>
            {characters.map((character, index) => (
              <Link to={`/character/${character.id}`} key={index}>
                <CharactersItem character={character} />
              </Link>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default CharactersList;
