import React from "react";

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.onChangeHandle = this.onChangeHandle.bind(this)
    }

    onChangeHandle(event){
        let name = event.target.name;
        let value = event.target.type === "checkbox"? event.target.checked : event.target.value;
        this.props.onChangeHandle(name, value)
    }

    render(){
        return(
            <div className="Searchbar" >
                <div>
                    <input type="text" placeholder="search" name="searchText" id="searchbar" onChange={this.onChangeHandle} />
                </div>
                <label>
                    <input type="checkbox" id="stockCheckbox" name="isStockedOnly" onChange={this.onChangeHandle} />
                    Stocked
                </label>
            </div>
        )
    }
    
}

export default Searchbar;