import {Products} from '../products/Product.js'

export const List = (props) =>{

    return ( props.ListProducts.map((product) =>(
        <Products
          title={product.title}
          price={product.price}
          description={product.description}
          stock={product.stock}
        />
      ))
    )
}