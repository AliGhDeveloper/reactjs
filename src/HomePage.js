import Navbar from './Navbar'
import MainPage from './MainPage'
import SiteFooter from './SiteFooter'
import React from 'react';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText : ''
        }
        this.searchBarHandle = this.searchBarHandle.bind(this);
    }

    searchBarHandle(value){
        this.setState({
            searchText: value
        })
    }
    render(){
        return(
            <div className="HomePage">
                <Navbar searchBarHandle={this.searchBarHandle} />
                <MainPage searchText={this.state.searchText}/>
                <SiteFooter />
            </div>
        ) 
    }
}

export default HomePage;