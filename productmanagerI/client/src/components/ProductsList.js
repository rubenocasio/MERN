import React from 'react'

function ProductsList(props) {
    return (
        <div className="product-list">
            {
                props.products.map( (products, index) => {
                return <p key={index}>
                Title: <a href="/api/products/">{products.title}</a><br/>
                Price: ${products.price} <br/>
                Description: {products.description}</p>})
            }
        </div>
    )
}

export default ProductsList
