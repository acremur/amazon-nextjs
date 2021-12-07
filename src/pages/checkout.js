import Image from 'next/image'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'
import Currency from 'react-currency-formatter'
import { useSession } from 'next-auth/react'

const Checkout = () => {

    const products = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const { data: session } = useSession()
    
    return (
        <div className='bg-gray-100'>
            <Header />
            
            <main className='pt-[100px] lg:flex max-w-screen-2xl mx-auto'>
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        className='min-w-full'
                        src='https://links.papareact.com/ikj'
                        alt='checkout-banner'
                        height={250}
                        width={1020}
                        objectFit='contain'
                    />
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className='text-3xl border-b pb-4'>
                            {products.length === 0 
                            ? 'Your Amazon Basket is empty.'
                            : 'Shopping Basket'}
                        </h1>
                        {products.map((product, i) => (
                            <div key={product.id}>
                                <CheckoutProduct product={product}  />
                                <hr className='mt-2' />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col bg-white p-10 shadow-md">
                    {products.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap'>
                                Subtotal ({products.length} items):{' '}
                                <span className='font-bold'>
                                    <Currency quantity={total} currency='EUR' />
                                </span>
                            </h2>

                            <button 
                                disabled={!session}
                                className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}
                            >
                                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout