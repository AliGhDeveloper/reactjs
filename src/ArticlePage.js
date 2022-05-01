import {useParams} from 'react-router-dom'
import Navbar from './Navbar';
import AddBar from './AddBar';
import SiteFooter from './SiteFooter';

function SingleArticle(props){
    return(
        <div className="SingleArticle">
            <div className='header'>
                <h1>{props.article.title}</h1>
                <span>Author: {props.article.author}</span>
            </div>
            <hr />
            <p>{props.article.body}</p>
            <hr />
            <span className="footer">{props.article.date}</span>
        </div>
    )
}


function ArticlePage(){
    let articles = localStorage.getItem('articles');
    articles = JSON.parse(articles);
    let {title} = useParams();
    let pageLayoutObj;
    articles.forEach(article => {
        if(article.title === title){
            pageLayoutObj = article
        }
    })
    return(
        <div className="ArticlePage">
            <Navbar />
            <div className="row">
                <div className="MPcol9"> 
                    <SingleArticle article={pageLayoutObj} />
                </div>
                <div className="MPcol3"><AddBar /></div>
            </div>
            <SiteFooter />
        </div>
    )
}

export default ArticlePage;