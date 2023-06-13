import { useState } from 'react';

import './Post.css';

import liked_svg from '../../assets/liked.svg';
import unliked_svg from '../../assets/unliked.svg'

const Post = ({ text, user, likes, timestamp, id }) => {
    const [liked, setLiked] = useState(false);
    const [hearts, setHearts] = useState(likes);

    const HandleLike = () => {
        setLiked(true);
        setHearts(hearts + 1);
        fetch('http://localhost:3001/api/artist/likes', {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ likes: 'inc', post_id: id })
        })
    }

    const HandleUnlike = () => {
        setLiked(false);
        setHearts(hearts - 1);
        fetch('http://localhost:3001/api/artist/likes', {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ likes: 'dec', post_id: id })
        })
    }

    return (
        <div className='post-container'>
            <div className='post-content'>
                <div className='user'>{user}</div>
                <div>{text}</div>
                <div className='date'>{new Date(timestamp).toLocaleString()}</div>
                <div className='likes-container'>
                    {liked ? 
                        <button className='like-btn' onClick={HandleUnlike}>
                            <img className='like-icon' src={liked_svg} />
                        </button>
                        : <button className='like-btn' onClick={HandleLike}>
                            <img className='like-icon' src={unliked_svg} />
                          </button>
                    }
                    {hearts}
                    <button className='reply-btn'>Reply</button>
                </div>
            </div>
        </div>
    )
}

export default Post;