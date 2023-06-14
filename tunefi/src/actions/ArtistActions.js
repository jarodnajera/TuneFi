import { redirect } from 'react-router-dom';

export async function UpdateArtist({ request, params }) {
    const artist_id = params.artistID;
    const form_data = await request.formData();
    const user_update = Object.fromEntries(form_data);
    const new_screen_name = user_update.screen_name
    const new_bio = user_update.bio;

    // Make POST fetch
    let response = await fetch(`http://localhost:3001/api/artist/id/${artist_id}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ screen_name: new_screen_name, bio: new_bio }),
    })

    let data = await response.json();
    console.log(data);

    if(data.status) {
        if (new_screen_name) {
            return redirect(`/artist/${new_screen_name}/music`);
        }
        return redirect(`/artist/${artist_id}/music`);
    }
}

export async function AddPost({ request, params }) {
    const artist_page = params.artistID;
    const form_data = await request.formData();
    const post = Object.fromEntries(form_data).new_post;
    
    // Make POST fetch
    let response = await fetch(`http://localhost:3001/api/artist/id/${artist_page}/community`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: post }),
    });

    let data = await response.json();

    if(data.status) {
        return redirect(`/artist/${artist_page}/community`);
    }
}

export async function AddEvent({ request, params }) {
    const artist_page = params.artistID;
    const form_data = await request.formData();
    const event = Object.fromEntries(form_data);
    
    // Make POST fetch
    let response = await fetch(`http://localhost:3001/api/artist/id/${artist_page}/events`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
    });

    let data = await response.json();

    if(data.status) {
        return redirect(`/artist/${artist_page}/events`);
    }
}