import React from "react"
import AddBar from './AddBar'
import Article from './Article'

class MainPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let searchText = this.props.searchText;


        let articles = localStorage.getItem('articles')
        try{
            articles = JSON.parse(articles);
            articles = articles.length? articles : null;
        }catch(e){
            articles = null;
        }

        if(!articles){
            articles = [
                {title: 'Global-Warming', description: 'An article about how we humans destroying earth...', body: "a test ", author: 'ali', date:'4/20/2022', url:"articles/Global-Warming"},
                {title: 'Animal-Extinctions', description: 'An article about how we humans destroying earth...', body: "this is about a serious problem that humanity going to face in the early future", author: 'ali', date:'4/20/2022', url:"articles/Animal-Extinctions"},
                {title: 'NASA', description: 'An article about how we humans destroying earth...', body: "this is about a serious problem that humanity going to face in the early future", author: 'ali', date:'4/20/2022', url:"articles/NASA"},
            ];
            localStorage.setItem('articles', JSON.stringify(articles));
        }

        if(searchText){
            articles = articles.filter(article => article.title.toLowerCase().includes(searchText.toLowerCase()))
        }

        let articleList = articles.map((article,index) => <Article key={index} article={article} />)
        
        return(
            <div className="MainPage">
                <div className="row">
                    <div className="MPcol9"> 
                        {articleList}
                    </div>
                    <div className="MPcol3"><AddBar /></div>
                </div>
            </div>
        )
    }
}

export default MainPage