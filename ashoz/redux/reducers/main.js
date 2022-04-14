import * as t from "../types";

const main = (state = {
  shopIndex: 0,
}, action) => {
  switch(action.type){
    case t.Next_Shop:
      return { 
        ...state,
        shopIndex: action.payload
      };
    default:
      return {...state};
    }
}

export default main;