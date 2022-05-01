import {Link} from 'react-router-dom';


function Article(props){
    return(
        <div className="Article" >
            <h3>{props.article.title}</h3>
            <hr />
            <p>{props.article.description}</p>
            <div className="articleFooter">
                <span>{props.article.date}</span>
                <button><Link to={props.article.url}>More...</Link></button>
            </div>
        </div>
    )
}

export default Article;