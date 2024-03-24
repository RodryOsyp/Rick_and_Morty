import { useState } from 'react';
import style from './Filter.module.css';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import { WiAlien } from "react-icons/wi";
import { BsFillPersonFill } from "react-icons/bs";

const Filter = ({filters,handleFilters}) => {
  
  return (
    <div>
      <div className={style.filter}><div>Filters</div></div>
      <Accordion>
        {console.log(filters)}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Status
        </AccordionSummary>
        <AccordionDetails>
          <div className={style.accordion1}>
            <div onClick={() => handleFilters('Alive')} className={filters.includes('Alive') ? `${style.active} ${style.text1}` :  style.status}>Alive</div>
            <div onClick={() => handleFilters('Dead')} className={filters.includes('Dead') ? `${style.active} ${style.text2}` : style.status}>Dead</div><br/>
            <div onClick={() => handleFilters('unknown')} className={filters.includes('unknown') ? `${style.active} ${style.text3}` : style.status}>Unknown</div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />} // Использование правильного импорта иконки
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Species
        </AccordionSummary>
        <AccordionDetails>
          <div className={style.icons}>
            <div  onClick={() => handleFilters('Alien')} className={filters.includes('Alien') ? `${style.species} ${style.alien}` :  style.ico}><WiAlien/></div>
            <div  onClick={() => handleFilters('Human')} className={filters.includes('Human') ? `${style.species} ${style.human}` :  style.ico}><BsFillPersonFill /></div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filter;
