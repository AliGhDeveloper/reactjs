import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow'

function ProductTable(props){
    let cats = props.list.map(item => item.category);
    cats = cats.filter((cat,index) => cats.indexOf(cat) === index);
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
    };
    let grouped = groupBy(props.list, 'category');
    let PCRows = []
    cats.forEach(cat => {
        PCRows.push(<ProductCategoryRow key={cat} categoryName={cat} >{grouped[cat]}</ProductCategoryRow>)
    })
    return(
        <div className="ProductTable">
            <div className="ProductTableHeading">
                <span className="name">Name</span>
                <span className="price">Price</span>
            </div>
            {PCRows}
        </div>
    )
}

export default ProductTable;