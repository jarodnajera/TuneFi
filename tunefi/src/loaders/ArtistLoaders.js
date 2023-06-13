export async function ProfileLoader({ params }) {
    // Get profile info and check if user 
    // also owns the profile
    const artist_id = params.artistID;
    let response = await fetch(`http://localhost:3001/api/artist/id/${artist_id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    });
    let data = await response.json();
    console.log(data);

    if(data.auth) {
        return { auth: true, artist_name: data.artist_name, bio: data.bio, followers: data.followers, following: data.following, is_following: data.is_following };
    }
    else {
        return { auth: false, artist_name: data.artist_name, bio: data.bio, followers: data.followers, following: data.following, is_following: data.is_following };
    }
}

export async function PostsLoader({ params }) {
    // Load posts for community tab
    const artist_page = params.artistID;
    let response = await fetch(`http://localhost:3001/api/artist/id/${artist_page}/community`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    });
    let data = await response.json();
    console.log(data);
    return data;
}

export async function EventsLoader({ params }) {
    // Load events for events tab
    const artist_page = params.artistID;
    let response = await fetch(`http://localhost:3001/api/artist/id/${artist_page}/events`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    });
    let data = await response.json();
    console.log(data);
    return data;
}