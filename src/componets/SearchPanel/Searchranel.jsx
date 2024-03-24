import React from "react";
import style from "./Searchranel.module.css";
import { OutlinedInput, Button } from "@mui/material";

const Searchranel = ({handleSetText, text}) => {

  return (
    <>
      <div className={style.header}>
        <div className={style.character}>Characters</div>
        <div className={style.container}>
          <OutlinedInput value={text} onChange={(event)=> handleSetText(event.target.value)} className={style.search} />
          <Button variant="contained" className={style.button}>
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default Searchranel;
