import { Rating } from '@material-ui/lab'
import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalState'
import './product.css'


export default function Product({ id, image, title, creator, price, rating }) {
    const [{ basket }, dispatch] = useContext(GlobalContext)

    const addBasket = () => {
        dispatch({
            type: 'ADD_TO_BUSKET',
            item: {
                id: id,
                title: title,
                creator: creator,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='root'>
            <div className="container">
                <img src={image} alt="" />
                <div className="info">
                    <p>{title}</p>
                    <small>{creator}</small>
                    <p className="price">{price}</p>
                    <Rating name="size-small" defaultValue={rating} size="small" />
                </div>
                <button onClick={addBasket}>Add to basket</button>
            </div>
        </div>
    )
}
