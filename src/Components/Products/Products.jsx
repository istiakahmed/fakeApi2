import React, { useEffect, useState } from 'react'
import './Products.css'

const Products = () => {
   const [data, setData] = useState([])

    useEffect(() =>{
        fetch(' https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(json => setData(json))
    }, [])

  return (
    <>
    <div id='apiProducts'>
        <div className="container">
            <div className="product_head">
                <h1>Get Products</h1>
            </div>
            <div className="apiProducts_row">
                
                {
                    data.map((data) => {
                        return(
                            <div key={data.id} className="single_card">
                                <div className="product_photo">
                                    <img src={data.images[0]} alt="product_image" />
                                </div>
                                <div className="product_title">
                                    <h2>${data.price}</h2>
                                    <h2>{data.title}</h2>
                                </div>
                            </div>
                        )
                    })
                    
                }

            </div>
        </div>

    </div>
    </>
  )
}

export default Products
