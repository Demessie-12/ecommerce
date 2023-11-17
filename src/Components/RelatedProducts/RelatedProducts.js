import React from 'react'
import "./RelatedProducts.css"
import all_product from '../Assets/all_product'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'

function RelatedProducts(props) {
  const {product} = props
  
  const {productId} = useParams()
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {all_product.map((item, i)=> {
              if (item.category === product.category && item.id !== Number(productId)) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }
              return null
            })}
        </div>
    </div>
  )
}

export default RelatedProducts