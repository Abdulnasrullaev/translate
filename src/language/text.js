import React from 'react'
import { useSelector } from 'react-redux'
import { languages } from '../constant/actionType';
import { english } from './english';
import { russian } from './russian'




function Text({ id }) {
  const language = useSelector((state) => state.language)

  switch (language) {
          case languages.russian:
            return russian[id] ? russian[id] : id;
          case languages.english:
            return english[id] ? english[id] : id;
          default:
            return id;
  }

}

export default Text;
