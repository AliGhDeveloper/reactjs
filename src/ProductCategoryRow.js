import ProductRow from "./ProductRow";

function ProductCategoryRow(props){
    let productList = props.children
    let PR;
    if(productList){
        PR = productList.map(item => <ProductRow key={item.name} name={item.name} price={item.price} /> )
    }
    return(
        <div className="ProductCategoryRow" >
            <span className="catName" >{props.categoryName}</span>
            {PR && PR}
        </div>
    )
}

export default ProductCategoryRow;