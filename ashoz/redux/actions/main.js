import * as t from "../types";


export const setInfo = (shopIndex) => dispatch => {
  dispatch({
    type: t.Next_Shop,
    payload: shopIndex
  });
}