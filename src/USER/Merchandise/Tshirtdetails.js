import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'; // Import Link from react-router-dom
import './Tshirtdetails.css'; // Import CSS file
import t1 from './t1.png';
import t2 from './t2.png';
import t3 from './t3.png';
import t4 from './t4.png';
import t5 from './t5.png';
import t6 from './t6.png';
const Tshirtdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/merchandise/tshirtdetails/checkout/${id}`);
  }
  const handleSmallImageClick = (index) => {
    const mainImg = document.getElementById('MainImg');
    const smallImgs = document.getElementsByClassName('small-img');
    mainImg.src = smallImgs[index].src;
  };

  return (<>
   {id==1&& <section id="merchandise" className="merchandise" style={{minHeight:'90vh'}}>
      <div className="single-tshirt-image">
        <div className='image_container'>
        <img src={t1}  width="" height="" id="MainImg" alt="" />
        </div>
        <div className="small-tshirt-group">
          <div className="small-tshirt-col">
            <img
              src={t1}
              width="100%"
              height="80%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(0)}
            />
          </div>
          <div className="small-tshirt-col">
            <img
              src={t3}
              width="100%"
             
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(1)}
            />
          </div>
          <div className="small-tshirt-col">
            <img
              src={t2}
             
           
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(2)}
            />
          </div>
          {/* <div className="small-tshirt-col">
            <img
              src={t4}
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(3)}
            />
          </div> */}
          <div className="small-tshirt-col">
            <img
              src={t5}
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(3)}  
            />
          </div>
          {/* <div className="small-tshirt-col">
            <img
              src={t6}
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(3)}
            />
          </div> */}
        </div>
      </div>

      <div className="single-tshirt-details">
        <h2 style={{ fontFamily: 'Roboto' }}>Basic Utkansh T-shirt</h2>
        <h3>₹350.00</h3>

        <button onClick={handleClick}>Book Now</button>

        <h4>Product Details</h4>
        <span>
          Embrace the timeless elegance of simplicity with our Classic Utkansh T-Shirt. This design
          features the iconic Utkansh logo in a clean and minimalistic style, allowing the essence of
          the fest to speak for itself. The classic Utkansh lettering is artfully integrated, creating
          a sophisticated and versatile look suitable for various occasions. Whether you're attending
          events, workshops, or simply expressing your college fest pride, this T-shirt is a perfect
          choice for those who appreciate understated elegance.
        </span>
      </div>
    </section>}
    
   {id==2&& < section id="merchandise" className="merchandise" style={{minHeight:'90vh'}}>
      <div className="single-tshirt-image">
        <div className='image_container'>
        <img src={t1}  width="" height="" id="MainImg" alt="" />
        </div>
        <div className="small-tshirt-group">
          <div className="small-tshirt-col">
            <img
              src={t1}
              width="100%"
              height="80%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(0)}
            />
          </div>
          <div className="small-tshirt-col">
            <img
              src={t3}
              width="100%"
             
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(1)}
            />
          </div>
          <div className="small-tshirt-col">
            <img
              src={t6}
             
           
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(2)}
            />
          </div>
         
          <div className="small-tshirt-col">
            <img
              src={t4}
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(3)}  
            />
          </div>
          {/* <div className="small-tshirt-col">
            <img
              src={t6}
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(3)}
            />
          </div> */}
        </div>
      </div>

      <div className="single-tshirt-details">
        <h2 style={{ fontFamily: 'Roboto' }}>Basic Utkansh T-shirt</h2>
        <h3>₹350.00</h3>

        <button onClick={handleClick}>Book Now</button>

        <h4>Product Details</h4>
        <span>
          Embrace the timeless elegance of simplicity with our Classic Utkansh T-Shirt. This design
          features the iconic Utkansh logo in a clean and minimalistic style, allowing the essence of
          the fest to speak for itself. The classic Utkansh lettering is artfully integrated, creating
          a sophisticated and versatile look suitable for various occasions. Whether you're attending
          events, workshops, or simply expressing your college fest pride, this T-shirt is a perfect
          choice for those who appreciate understated elegance.
        </span>
      </div>
    </section>}
    
    </>
  );
};

export default Tshirtdetails;
