import React, { useState } from 'react'
import './Pagination.css'
const Pagination = ({totalArts,artsPerPage,paginate,active}) => {
    
    const pageNumbers = []
  const count =  Math.ceil(totalArts / artsPerPage)
  
  
    for(let i = 1; i <= count ; i++){
        pageNumbers.push(i)
        
    }
    console.log(pageNumbers)

 return (
  <div>
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <div className="page-item" key={number}>
          <div
            onClick={() => paginate(number)}
            className={active === false && number === 1 ? "page_link-act" : active === number ? "page_link-act" : "page_link"}
          >
            {number}
          </div>
        </div>
      ))}
    </ul>
  </div>
);
}

export default Pagination