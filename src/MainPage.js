import React from "react"
import AddBar from './AddBar'
import Article from './Article'

class MainPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="MainPage">
                <div className="row">
                    <div className="MPcol9"> 
                        <Article />
                        <Article />
                        <Article />
                    </div>
                    <div className="MPcol3"><AddBar /></div>
                </div>
            </div>
        )
    }
}

export default MainPage