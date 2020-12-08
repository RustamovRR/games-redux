import React from 'react'
import './home.css'
import Product from './Product'

export default function Home() {
    return (
        <div className='root'>
            <div className="home">
                <Product
                    image='https://images-na.ssl-images-amazon.com/images/I/41qR7C253KL._AC_US160_.jpg'
                    title='Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)'
                    creator='by SAMSUNG'
                    price='$101.99'
                    rating={3}
                />
                <Product
                    image='https://images-na.ssl-images-amazon.com/images/I/413DcxIjkOL._AC_US160_.jpg'
                    title='Nintendo Switch Pro Controller'
                    creator='by Nintendo'
                    price='$49.99'
                    rating={2}
                />
                <Product
                    image='https://images-na.ssl-images-amazon.com/images/I/41jSuUHT8eL._AC_US160_.jpg'
                    title='Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black'
                    creator='by Bose'
                    price='$19.38'
                    rating={4}
                />
            </div>
        </div>
    )
}
