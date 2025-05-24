import React, {useContext, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { useEffect } from 'react';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const context = useContext(ShopContext);

  if (!context) {
    return <p className="text-red-500">Context not available</p>;
  }

  const { products } = context;
  const [LatestProducts, setLatestProducts]=useState([]);

  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
  },[])

  // const { products } = useContext(ShopContext);

  // console.log(products);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
      </div>
      
      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          LatestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
