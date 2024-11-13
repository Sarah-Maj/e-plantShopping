import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css'; 

function ProductList() {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2021/11/04/14/48/peace-lily-6768457_640.jpg", // Peace Lily image link
          description: "Purifies indoor air, enhances humidity levels.",
          cost: "$20",
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        }
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18"
        }
      ]
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        {
          name: "Oregano",
          image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
          description: "Repels insects and is also used in cooking.",
          cost: "$10"
        },
        {
          name: "Marigold",
          image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
          description: "Natural insect repellent, also adds color to the garden.",
          cost: "$8"
        }
      ]
    }
  ];

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  return (
    <div>
      <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="luxury" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://freesvg.org/img/Pflanze-lineart.png"  
            alt="Paradise Nursery Logo" 
            style={{ width: '50px', height: '50px', marginRight: '10px', objectFit: 'cover' }} 
          />
          <a href="/" style={{ textDecoration: 'none', color: 'white' }}>
            <h3>Paradise Nursery</h3>
            <i>Where Green Meets Serenity</i>
          </a>
        </div>
        <div>
          <a href="#" onClick={handleCartClick} style={{ color: 'white', fontSize: '30px' }}>
            <h1 className="cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                <circle cx="80" cy="216" r="12"></circle>
                <circle cx="184" cy="216" r="12"></circle>
                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              </svg>
            </h1>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1 style={{ textAlign: 'center', fontSize: '1.5em', fontWeight: 'bold', marginTop: '20px' }}>
                {category.category}
              </h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <div className="sale-sign">Sale</div>
                    <img className="product-image" src={plant.image} alt={plant.name} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      className="product-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem />
      )}
    </div>
  );
}

export default ProductList;