import React from 'react'
import { data } from "../Pages/restApi.json";

const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Discover our chef's special creations that keep our guests coming back for more. From sizzling starters to decadent desserts, each dish is crafted with the finest ingredients and bursting with unforgettable flavors. Whether you're craving comfort classics or adventurous new tastes, our popular selection has something to satisfy every palate.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu