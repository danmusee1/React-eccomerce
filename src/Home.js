import React from 'react';
import './Home.css';
import Product from './Product';





function Home() {


  
  return (
    
    <div className='home'>
      <div className='home_container'>
        
        <img
          className='home_image'
          src='https://i.pinimg.com/originals/1a/e6/cd/1ae6cd3508c4b8a1877f4de7eacb6af8.jpg'
          alt=''
        />

        



        <div className='home_row'>
          <Product
         
            id='123'
            title='vans off the wall'
            price={18.50}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.21%20PM%20(1).jpeg'
            rating={4}
          />
          <Product
            id='456'
            title='vans off the wall'
            price={18.50}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.19%20PM.jpeg'
            rating={4}
          />
          <Product
         
         id='123'
         title='vans off the wall'
         price={18.50}
         image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.21%20PM.jpeg'
         rating={4}
       />
        </div>
        <div className='home_row'>
          <Product
            id='789'
            title='Air force '
            price={25.00}
            image="https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.21%20PM%20(2).jpeg"
            rating={4}
          />
          <Product
            id='987'
            title='Air force'
            price={29.99}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.23%20PM%20(1).jpeg'
            rating={4}
          />
          <Product
            id='654'
            title='Air force'
            price={35.99}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.23%20PM%20(1).jpeg'
            
            rating={4}
          />
          <Product
            id='789'
            title='Air force'
            price={35.99}
            image='https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f2c81329-e0a6-4723-9090-0a96c65a7c64/air-force-1-07-mens-shoe-5wR62v.jpg'
            rating={4}
          />
          </div> 
          <div className='home_row'>
          <Product
            id='987'
            title='vans off the wall'
            price={18.00}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.16%20PM%20(1).jpeg'
            rating={4}
          />
          <Product
            id='654'
            title='vans off the wall '
            price={18.00}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.16%20PM.jpeg'
            rating={4}
          />
          <Product
            id='789'
            title='vans off the wall'
            price={18.00}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.16%20PM%20(2).jpeg'
            rating={4}
          />
          <Product
            id='987'
            title='vans off the wall'
            price={18.00}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.16%20PM.jpeg'
            rating={4}
          />
          <Product
            id='654'
            title='vans off the wall '
            price={18.00}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.19%20PM%20(1).jpeg'
            rating={4}
          />
          </div>
           <div className='home_row'>
          <Product
            id='789'
            title='Air max270 '
            price={29.99}
            image='https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F02%2Fnike-top-10-best-selling-sneakers-list-2019-01.jpg?q=75&w=800&cbr=1&fit=max'
            rating={4}
          />
          <Product
            id='987'
            title='Air force '
            price={29.99}
            image='https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f2c81329-e0a6-4723-9090-0a96c65a7c64/air-force-1-07-mens-shoe-5wR62v.jpg'
            rating={4}
          />
          <Product
            id='654'
            title='Air force'
            price={35.99}
            image='https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f2c81329-e0a6-4723-9090-0a96c65a7c64/air-force-1-07-mens-shoe-5wR62v.jpg'
            rating={4}
          />
        
          <Product
            id='321'
            title='Air max 270  '
            price={29.99}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.23%20PM.jpeg'
            rating={4}
          />
          <Product
            id='321'
            title='Air max 270 '
            price={29.99}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.29%20PM%20(2).jpeg'
            rating={4}
          />
          <Product
            id='321'
            title='TN '
            price={29.99}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.30%20PM.jpeg'
            rating={4}
          />
       </div>
        <div className='home_row'>
          <Product
            id='321'
            title='TN '
            price={29.99}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.25%20PM.jpeg'
            rating={4}
          />
          <Product
            id='321'
            title='AIR NIKE  '
            price={49.99}
            image='https://cdn-images.farfetch-contents.com/13/67/87/74/13678774_21606856_600.jpg'
            rating={4}
          />
          <Product
            id='321'
            title='Vapor max  '
            price={29.99}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.25%20PM%20(1).jpeg'
            rating={4}
          />
          <Product
            id='321'
            title='Air jordan '
            price={35.99}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.29%20PM%20(1).jpeg'
            rating={4}
          />
          <Product
            id='321'
            title=' Air jordan '
            price={35.99}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.42%20PM%20(1).jpeg'
            rating={4}
          />
          <Product
            id='321'
            title=' FASHION '
            price={29.99}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.42%20PM.jpeg'
            rating={4}
          />
          <Product
            id='321'
            title='Prada cloudbust thunder  '
            price={29.99}
            image='https://dandrey.000webhostapp.com/WhatsApp%20Image%202021-04-06%20at%203.00.30%20PM%20(2).jpeg' 
            rating={4}
          />
        </div>
      </div>
    </div>
    
  );
}




export default Home;
