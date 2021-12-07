import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

const CheckoutProduct = ({ product: {id, title, price, description, category, image, rating, hasPrime } }) => {

    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = {
            id, 
            title, 
            price, 
            description, 
            category, 
            image, 
            rating, 
            hasPrime
        }
        
        dispatch(addToBasket(product))
    }  
    
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    } 

    return (
        <div className="grid grid-cols-5">
            <Image 
                src={image}
                alt={title}
                height={200}
                width={200}
                objectFit='contain'
            />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className='flex'>
                    {Array(Math.round(rating.rate)).fill().map((_, i) => (
                        <div key={i}>
                            <StarIcon className='h-5 text-yellow-500' />
                        </div>
                    ))}
                </div>
                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} currency='EUR' />
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img 
                            loading='lazy'
                            src="https://links.papareact.com/fdw" 
                            alt="prime-img" 
                            className='w-12'
                        />
                        <p className="text-xs text-gray-500">FREE NEXT-day Delivery</p>
                    </div>
                )}
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className='button'>Add to Basket</button>
                <button onClick={removeItemFromBasket} className='button'>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct