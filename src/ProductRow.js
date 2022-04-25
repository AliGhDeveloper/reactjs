function ProductRow(props){
    return(
        <div className="ProductRow">
            <span className="name">{props.name}</span>
            <span className="price">{props.price}</span>
        </div>
    )
}

export default ProductRow