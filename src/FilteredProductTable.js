import React from 'react';
import Searchbar from './Searchbar';
import ProductTable from './ProductTable'

class FilteredProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            isStockedOnly: false
        }
       this.searchBarChange = this.searchBarChange.bind(this)
    }

    searchBarChange(name,value){
        this.setState({
            [name]: value
        })
    }

    render(){
        
        let productList = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Handball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];
        if(this.state.searchText){
            productList = productList.filter(item =>
                item.name.toLowerCase().includes(this.state.searchText.toLowerCase())
            )
        }
        const filteredProductList = productList.filter(product => product.stocked == this.state.isStockedOnly)
        return(<div className="FilteredProductTable">
            <Searchbar onChangeHandle={this.searchBarChange} />
            <ProductTable list={filteredProductList} />
            
        </div>
        )
    }
}

export default FilteredProductTable;