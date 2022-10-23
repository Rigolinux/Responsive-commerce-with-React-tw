import React from 'react'

//cart 
import CartIcon from '@/components/icons/CartIcon'

function DetailsProducts() {

  const [product, setProduct] = React.useState(1);

  const handleAddProduct = () => {
    setProduct(product + 1);
  };

  const handleRemoveProduct = () => {
    if(product === 1 ){
      
    }
    else{
      setProduct(product - 1);
    }

  }

  return (
   
        <section className='container mx-auto px-4 tracking-wide'>
          <p className='text-quinary fonct-bold uppercase mb-4'>Rigoberto</p>
          <h2 className='font bold text-3xl mb-4'>RTX 3090</h2>
          <p className='text-stone-700 mb-4'>
          The GeForce RTX® 3090 Ti and 3090 are powered by Ampere—NVIDIA’s 2nd gen RTX architecture. They feature dedicated 2nd gen RT Cores and 3rd gen Tensor Cores, streaming multiprocessors, 
          and a staggering 24 GB of G6X memory to deliver high-quality performance for gamers and creators.
          </p>
          <div className='grid gap-4 items-center font-bold grid-cols-4 mb-5 md:gap-0 md:items-start '>
            <div className='md:flex items-center cols-span-2 grid-cols-2'>
            <span className='text-3xl col-span-1 md:col-span-1 '>$1,500.00</span>
            <span className='rounded-md col-span-1 bg-secondary  mr-auto py-2 p px-2  text-white md:text-right md:align-middle  '>25%</span>
  
            </div>
           <span className='text-right col-span-3 justify-end text-secondary opacity-80 text-lg line-through md:col-span-4 md:text-left'>$1800.00</span>
          </div>
          
          <div className='grid grid-cols-3  font-bold md:grid-cols-2 '>
            <div className='col-span-3 mb-2 flex justify-between mx-5 gap-x-3 md:col-span-1 md:justify-center md:items-center  '>
              <button onClick={handleRemoveProduct} className= 'bg-slate-500 w-10  md:h-[60%] rounded-md  hover:bg-slate-800 hover:text-white justify-center'>-</button>
              <span className='justify-center align-middle pt-1  bg-auto text-xl ' >{product}</span>
              <button onClick={handleAddProduct} className='bg-slate-500 w-10 md:h-[60%] rounded-md hover:bg-slate-800 hover:text-white justify-center' >+</button>
            </div>
            <button className='col-span-3 bg-tertiary py-3 text-white rounded-md mb-4 md:col-span-1 flex gap-x-3 items-center justify-center hover:bg-secondary'>
              <CartIcon />
              <span>Add to cart</span> 
              </button>
          </div>
        </section>
    
  )  
}

export default DetailsProducts