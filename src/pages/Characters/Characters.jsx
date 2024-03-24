import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Characters.module.css";
import CharactersList from "../charactersList/CharactersList";
import Searchranel from "../../componets/SearchPanel/Searchranel";
import { logMovies } from "../../utils";
import Filter from "../../componets/Filter/Filter";
import Footer from "../../componets/Footer/Footer";

const Characters = () => {
  const [characters, setCharacters] = useState(null);
  const [text, setText] = useState("");
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const handleFilters = (filter) => {
    const index = filters.indexOf(filter);
    if (index === -1) {
      setFilters((prevFilters) => [...prevFilters, filter]);
    } else {
      setFilters((prevFilters) =>
        prevFilters.filter((item) => item !== filter)
      );
    }
  };
  const handleSetText = (value) => {
    setText(value);
  };
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const result = await logMovies();
      setCharacters(result);
      setLoading(false);
    }

    fetchData();
  }, []);

  const filteredCharacters =
  characters &&
  characters.filter((character) => {
    const nameMatches = character.name.includes(text);
    const filterMatches = filters.length === 0 || filters.includes(character.status) || filters.includes(character.species);
    return nameMatches && filterMatches;
  });

  return (
    <div className={style.header}>
      <Searchranel
        handleSetText={handleSetText}
        text={text}
        className={style.search}
      />
      <div className={style.content}>
        <Filter handleFilters={handleFilters} filters={filters}/>
        <CharactersList loading={loading} characters={filteredCharacters} />
      </div>
      <div className={style.footer}>
        <Footer/>
      </div>
    </div>
  );
};

export default Characters;
