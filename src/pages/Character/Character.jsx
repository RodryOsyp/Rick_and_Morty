import { useEffect, useState } from "react";
import style from "./Character.module.css";
import { WiAlien } from "react-icons/wi";
import { BsFillPersonFill } from "react-icons/bs";
import { fetchCharacter } from "../../utils";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Character = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const result = await fetchCharacter(id);
      setCharacter(result);
    }
    fetchData();
  }, []);
  return (
    character && 
    <>
    <Link to={"/characters"}><div className={style.button}>Back</div> </Link>
    <div className={style.character}>
      <div className={style.status2}>
        <div className={`${style.status} ${character.status === 'Dead' ? style.dead : null} ${character.status === 'unknown' ? style.unknown : null}`}>{character.status}</div>
        <img className={style.img} src={character.image} alt="" />
      </div>
      <div className={style.name}>{character.name}</div>
      <div className={style.gender}>{character.gender}</div>
      <div className={style.episode}>Episode count: {character.episode.length}</div>
      <div className={style.last}>Last Location: </div>{" "}
      <div className={style.location}>{character.location.name}</div>

      <div className={style.species}>{character.species == "Human" ? <BsFillPersonFill size='50px'/> :<WiAlien size='50px' color="#2DF107"/>}</div>
    </div>
    </>
  );
};

export default Character;
