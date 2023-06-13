import { redirect } from 'react-router-dom';

export async function HandleSignUp({ request }) {
    const form_data = await request.formData();
    const user_data = Object.fromEntries(form_data);
    console.log(user_data);

    // Make POST fetch
    let response = await fetch('http://localhost:3001/api/auth/signup', {
                        method: 'POST',
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(user_data),
                    })

    // Successfully signed up
    if(response.status) {
        console.log('User made!');
        return redirect(`/artist/${user_data.screen_name}`);
    }
}

export async function HandleLogin({ request }) {
    const form_data = await request.formData();
    const user_data = Object.fromEntries(form_data);

    // Make POST fetch
    let response = await fetch('http://localhost:3001/api/auth/login', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(user_data),
                    });
    
    let data = await response.json();
    
    // Successfully logged in
    // console.log(data);
    // if (data.status) {
    //     console.log('User logged in successful!');
    //     return redirect(`/artist/${data.screen_name}/music`);
    // }
    console.log(data);
    if (data.status) {
        console.log('User logged in successful!');
        return redirect(`/artist/${data.screen_name}`);
    }
}
