import React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.changeHandle = this.changeHandle.bind(this);
    }

    changeHandle(event){
        this.props.searchBarHandle(event.target.value)
    }


    render(){
        return(
            <div className="Navbar">
                <div className="links">
                    <Link to="/" className="brand" >SPa</Link>
                    <div className="navLinks">
                        <Link to="/" className="active">Home</Link>
                        <a >About</a>
                    </div>
                </div>
                <div className="searchBar">
                    <label>
                        Search:
                    </label>
                    <input type="text" style={{marginLeft: '5px'}} name="search" onChange={this.changeHandle}  placeholder="search.." />
                </div>
            </div>
        )
    }
}

export default Navbar;