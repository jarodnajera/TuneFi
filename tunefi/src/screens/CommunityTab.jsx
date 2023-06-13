import { Link, Form, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Post from '../components/artistprofile/Post';

import './Tabs.css';
import './CommunityTab.css';

const CommunityTab = () => {
    const posts = useLoaderData();

    return (
        <div id='community-tab'>
            <div className='artist-nav'>
                <div className='nav-tabs'>
                    <Link to='../music' className='nav-tab'>Music</Link>
                    <Link to='../events' className='nav-tab'>Events</Link>
                    <Link to='../community' className='nav-tab active'>Community</Link>
                </div>
            </div>
            <div id='form-container'>
                <Form method='post' id='post-form'>
                    <textarea
                        id='new-post'
                        placeholder='New Post...'
                        aria-label='new_post'
                        type='text'
                        name='new_post'
                    />
                    <Button id='submit-btn' variant='dark' type='submit'>Add</Button>
                </Form>
            </div>
            <div id='feed-title'>Community Feed</div>
            <div id='posts-container'>
                {posts.map((e) => <Post text={e.text} user={e.user} likes={e.likes} timestamp={e.createdAt} id={e._id} key={e._id} />)}
            </div>
        </div>
    );
}

export default CommunityTab;