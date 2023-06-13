import { Outlet, useLoaderData, Form } from 'react-router-dom';
import Button  from 'react-bootstrap/Button';
import { useState } from 'react';

import default_pfp from '../assets/default_user.svg';

import './ArtistProfile.css';


const ArtistProfile = () => {
    const { auth, artist_name, bio, followers, following, is_following } = useLoaderData();
    const [edit, setEdit] = useState(false);
    const [numFollowers, setNumFollowers] = useState(followers.length);
    const [checkFollowing, setCheckFollowing] = useState(is_following);

    const HandleFollow = () => {
        setCheckFollowing(true);
        setNumFollowers(numFollowers + 1);
        fetch(`http://localhost:3001/api/artist/id/${artist_name}/follow`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    const HandleUnfollow = () => {
        setCheckFollowing(false);
        setNumFollowers(numFollowers - 1);
        fetch(`http://localhost:3001/api/artist/id/${artist_name}/follow`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
        })
    }

    return (
        <>
            <div id='artist-page'>
                <div className='artist-aside'>
                    <img className='artist-pfp' src={default_pfp} />
                    <div className='artist-name'>{artist_name}</div>
                    <div className='following-followers'>
                        <div className='followers-count'>Followers: {numFollowers}</div>
                        <div className='following-count'>Following: {following.length}</div>
                    </div>
                    {auth ?
                        <></>
                        : checkFollowing ? 
                            <Button variant='dark' onClick={HandleUnfollow}>Unfollow</Button>
                            :
                            <Button variant='dark' onClick={HandleFollow}>Follow</Button>
                        
                    }
                    <div className='artist-bio'>
                        <p>{bio}</p>
                    </div>
                    {auth && !edit ? 
                        <Button variant='dark' onClick={() => setEdit(true)}>Edit Profile</Button>
                        : <></>}
                    {edit ?
                        <>
                            <Form method='post' id='edit-form'>
                                <div>Screen Name</div>
                                <input
                                    placeholder='Screen Name...'
                                    aria-label='screen_name'
                                    type='text'
                                    name='screen_name'
                                />
                                <div>Bio</div>
                                <input
                                    placeholder='Bio...'
                                    aria-label='bio'
                                    type='text'
                                    name='bio'
                                />
                                <Button variant='dark' type='submit'>Submit</Button>
                            </Form>
                            <Button variant='dark' onClick={() => setEdit(false)}>Cancel Edit</Button>
                        </>
                        
                        : <></>}
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default ArtistProfile;