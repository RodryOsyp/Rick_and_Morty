import React from "react";
import style from "./CharactersItem.module.css";
import { WiAlien } from "react-icons/wi";
import { BsFillPersonFill } from "react-icons/bs";




const CharactersItem = ({ character }) => {
  return (
    <div className={style.character}>
      <div className={style.status2}>
        <div className={`${style.status} ${character.status === 'Dead' ? style.dead : null} ${character.status === 'unknown' ? style.unknown : null}`}>{character.status}</div>
        <img className={style.img} src={character.image} alt="" />
      </div>
      <div className={style.name}>{character.name}</div>
      <div className={style.last}>Last Location: </div>{" "}
      <div className={style.location}>{character.location.name}</div>

      <div className={style.species}>{character.species == "Human" ? <BsFillPersonFill size='50px'/> :<WiAlien size='50px' color="#2DF107"/>}</div>
    </div>
  );
};

export default CharactersItem;
