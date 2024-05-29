import React, { useState } from 'react';
import "./App.css";
import Logo from "./images/logo.svg";
import Market from './images/icon-cart.svg';
import Avatar from './images/image-avatar.png';
import BigImg from './images/image-product-1.jpg';
import SmallImg from './images/image-product-1-thumbnail.jpg';
import smallImg2 from './images/image-product-2.jpg';
import smallImg3 from './images/image-product-3.jpg';
import smallImg4 from './images/image-product-4.jpg';
import Shape from './images/icon-cart.svg';

const App = () => {
    const [quantity, setQuantity] = useState(1); // Initialize quantity to 1
    const [cartQuantity, setCartQuantity] = useState(0);
    const [bigImageSrc, setBigImageSrc] = useState(BigImg);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const basePrice = 125.00;

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1)); // Ensure quantity doesn't go below 1
    };

    const calculateTotalPrice = () => {
        return (basePrice * quantity).toFixed(2);
    };

    const smallImages = [SmallImg, smallImg2, smallImg3, smallImg4];

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <header>
                <nav>
                    <div className="display-flex">
                        <img src={Logo} alt="Logo" />
                        <ul>
                            <li><a href="#">Collections</a></li>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="images">
                        <div className="cart-icon">
                            <img className="market__svg" src={Market} alt="Cart" />
                            {cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}
                        </div>
                        <img className="avatar__png" src={Avatar} alt="Avatar" />
                    </div>
                </nav>
            </header>
            <main>
                <div className={`overlay ${isModalOpen ? 'active' : ''}`} onClick={toggleModal}></div>
                <div className={`images__div ${isModalOpen ? 'modal' : ''}`}>
                    <img className="big__img" src={bigImageSrc} alt="Big Image" onClick={toggleModal} />
                    <div className="display-flex">
                        {smallImages.map((src, index) => (
                            <img
                                key={index}
                                className="small__img"
                                src={src}
                                alt={`SmallImg ${index + 1}`}
                                onClick={() => setBigImageSrc(src)}
                            />
                        ))}
                    </div>
                </div>
                <section>
                    <p className='title'>Sneaker Company</p>
                    <h1>Fall Limited Edition <br /> Sneakers</h1>
                    <p className='lorem'>These low-profile sneakers are your perfect casual wear <br /> companion. Featuring a durable rubber outer sole, they’ll <br /> withstand everything the weather can offer.</p>
                    <h2>${calculateTotalPrice()}<span> 50%</span></h2>
                    <p className='border-bottom'>$250.00</p>
                    
                    <div className="flex">
                        <div className='buttons'>
                            <p 
                                className={`minus ${quantity === 1 ? 'disabled' : ''}`} 
                                onClick={quantity > 1 ? decreaseQuantity : null}
                            >-</p>
                            <h3>{quantity}</h3>
                            <p className='pilus' onClick={increaseQuantity}>+</p>
                        </div>
                        <div className='buy__cart'>
                            <img className='buycart__png' src={Shape} alt="Shape" />
                            <p>Add to cart</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
