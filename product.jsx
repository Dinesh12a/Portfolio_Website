import React from 'react'
import "./products.css"

const Products = ({img,link}) => {
  return (
    <>
    <div className="P">
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
            <img src={img} className="p-img" />
        </a>
    </div>
    
    </>
  )
}

export default Products