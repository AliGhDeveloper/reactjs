import React from 'react'

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchText : ''};
    }

    render(){
        return(
            <div className="Navbar">
                <div className="links">
                    <a className="brand" >SPa</a>
                    <div className="navLinks">
                        <a className="active">Home</a>
                        <a >About</a>
                    </div>
                </div>
                <div className="searchBar">
                    <label>
                        Search:
                    </label>
                    <input type="text" name="search" placeholder="search.." />
                </div>
            </div>
        )
    }
}

export default Navbar;