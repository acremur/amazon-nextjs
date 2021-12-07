import Product from "./Product"

const ProductFeed = ({ products }) => {
    return (
        <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
            {products.slice(0, 5).map(product => (
                <Product key={product.id} product={product} />
            ))}

            <img 
                src="https://links.papareact.com/dyz" 
                className="pl-3.5 m-1 md:col-span-full cursor-pointer" 
                alt="" 
            />

            <div className='md:col-span-2 h-full'>
                {products.slice(5, 6).map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>

            {products.slice(6, 13).map(product => (
                <Product key={product.id} product={product} />
            ))}

            <div className='md:col-span-2 h-full'>
                {products.slice(13, 14).map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>

            {products.slice(14, products.length).map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductFeed