export const Products = (props) =>{

    const handleClick = () =>
        alert (`¡Bienvenido! El ${props.title} estara disponible proximamente`)
    
    
    return(
<div>
    <div onClick={handleClick}>
        <h2> Titulo : {props.title}</h2>
    </div>
    <div>
        <p> Precio : {props.price}</p> 
        <p> Descripcion : {props.description}</p>
    </div>
</div>
    )

}