export async function SearchLoader({ params }) {
    // Get all possible search results
    const query = params.query;

    console.log(query);

    let response = await fetch(`http://localhost:3001/api/search/${query}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    });

    let data = await response.json();

    console.log(data);

    return {query: query, data: data};
}