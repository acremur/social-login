import { Link } from 'react-router-dom'

const Card = ({ post: { id, title, img, longDesc } }) => {   
    return (
        <div className="card">
            <Link className='link' to={`/post/${id}`}>
                <span className="title">{title}</span>
                <img 
                    src={img} 
                    alt={title} 
                    className="img"
                />
                <p className="desc">{longDesc}</p>
                <button className="cardButton">Read More</button>
            </Link>
        </div>
    )
}

export default Card