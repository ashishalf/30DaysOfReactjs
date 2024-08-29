// Pagination Using useReducer
import React, { act, useEffect, useReducer } from "react";

const itemsPerPage = 5;

const paginationReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_TOTAL_ITEMS":
      return { ...state, totalItem: action.payload };
      default:
        return state
  }
};

function TwentyTwo() {
  const [paginationState, dispatch] = useReducer(paginationReducer, {
    currentPage: 1,
    totalItem: 0,
  });

  const data = Array.from({ length: 25 }, (_, index) => `item ${index + 1}`);
  // console.log(data)
  useEffect(() => {
    dispatch({ type: "SET_TOTAL_ITEMS", payload: data.length });
  }, []);

  const startIndex = (paginationState.currentPage - 1) * itemsPerPage;
  const lastIndex = startIndex + itemsPerPage;

  const displayedItems = data.slice(startIndex, lastIndex);

  const handlePageClick = (newPage)=>{
    dispatch({type:"SET_CURRENT_PAGE", payload: newPage})
  }

  return (
    <div>
      <h1>Pagination Using Reducer</h1>
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={()=>handlePageClick(paginationState.currentPage-1)} disabled={paginationState.currentPage ===1}>Previous</button>
      <button onClick={()=>handlePageClick(paginationState.currentPage+1)} disabled={lastIndex>=data.length}>Next</button>
    </div>
  );
}

export default TwentyTwo;
