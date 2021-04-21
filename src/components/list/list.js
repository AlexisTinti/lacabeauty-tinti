import {Products} from '../products/product.js'

export const List = (props) =>{

    return ( props.listProducts.map((product) =>(
        <Products
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))
    )
}