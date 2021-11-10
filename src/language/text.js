import React from 'react'
import { useSelector } from 'react-redux'
import { languages } from '../constant/actionType';
import { deutch } from './deutch';
import { english } from './english';
import { french } from './french';
import { russian } from './russian'
import { tajik } from './tajik';



function Text({ id }) {
  const language = useSelector((state) => state.language)

  switch (language) {
          case languages.russian:
            return russian[id] ? russian[id] : id;
          case languages.english:
            return english[id] ? english[id] : id;
          case languages.deutch:
            return deutch[id] ? deutch[id] : id;
          case languages.french:
            return french[id] ? french[id] : id;
          case languages.tajik:
            return tajik[id] ? tajik[id] : id;     
          default:
            return id;
  }

}

export default Text;
