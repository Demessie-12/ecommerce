import React, { useContext } from 'react'
import "./breadcrumb.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Breadcrumb = (props) => {
    const {product} = props
    const { SetMenufunction } = useContext(ShopContext)
  return (
    <div className='breadcrumb'>
      <Link style={{textDecoration: "none"}} to="/" onClick={()=> {SetMenufunction("shop")}}>SHOP</Link> 
      <img src={arrow_icon} alt='' /> 
      <Link style={{textDecoration: "none"}} to={`/${product.category}s`} onClick={()=> {SetMenufunction(`${product.category}s`)}}>{product.category}</Link>
      <img src={arrow_icon} alt='' /> {product.name}
    </div>
    // <Link to="/"></Link>
  )
}

export default Breadcrumb