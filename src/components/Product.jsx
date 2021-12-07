import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { addToBasket } from '../slices/basketSlice'

const Product = ({ product: { id, title, price, description, category, image, rating } }) => {     

    const [hasPrime, setHasPrime] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        setHasPrime(Math.random() < 0.5)
    }, [hasPrime])

    const addItemToBasket = () => {
        const product = {    
            id, 
            title, 
            price, 
            rating,
            description, 
            category, 
            image, 
            hasPrime
        }

        dispatch(addToBasket(product))
    }
    
    return (    
        <div className='h-[480px] z-20 relative flex flex-col m-5 bg-white p-6 cursor-pointer shadow-md'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            
            <Image 
                src={image}
                height={200}
                width={200}
                objectFit='contain'
            />

            <h4 className='my-3'>{title}</h4>  

            <div className='flex'>
                {Array(Math.round(rating.rate)).fill().map((_, i) => (
                    <div key={i}>
                        <StarIcon className='h-5 text-yellow-500' />
                    </div>
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className="mb-5 font-semibold">
                <Currency quantity={price} currency='EUR' />
            </div>
            
            {hasPrime !== null && hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img 
                        loading='lazy'
                        className='w-12' 
                        src="https://links.papareact.com/fdw" 
                        alt="prime-img" 
                    />
                    <div className="text-xs text-gray-500">FREE Next-day Delivery</div>
                </div>
            )}
            
            <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>
        </div>
    )
}

export default Product