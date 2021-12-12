import { useLocation } from 'react-router-dom'
import { posts } from '../data'

const Post = () => {

    const path = useLocation().pathname.split('/')[2]

    const post = posts.find(p => p.id.toString() === path)
    const { img, title, desc, longDesc } = post
    
    return (
        <div>
            <div className="post">
                <img 
                    className="postImg" 
                    src={img}
                    alt={title} 
                />
                <h1 className="postTitle">{title}</h1>
                <p className="postDesc">{desc}</p>
                <p className="postLongDesc">{longDesc}</p>
            </div>
        </div>
    )
}

export default Post