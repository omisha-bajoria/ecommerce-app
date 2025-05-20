import React, {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'

const LatestCollection = () => {
  const context = useContext(ShopContext);

  if (!context) {
    return <p className="text-red-500">Context not available</p>;
  }

  const { products } = context;

  console.log(products);
  // const { products } = useContext(ShopContext);

  // console.log(products);

  return (
    <div>
      
    </div>
  )
}

export default LatestCollection
