import { Link, useLoaderData } from 'react-router-dom';

import './Search.css';

const Search = () => {
    const data = useLoaderData();
    const query = data.query;
    const results = data.data;

    return (
        <div id='search-page'>
            <div id='search-results'>
                <div id='search-query'>Showing results for &quot;{query}&quot;</div>
                {results.length > 0 ? results.map((e) => 
                (<div className='search-result'>
                    <div className='result-screen-name'><Link to={`/artist/${e.screen_name}/music`}>{e.screen_name}</Link></div>
                    <div className='result-followers'>Followers: {e.followers.length}</div>
                    <div className='result-bio'>Bio: {e.bio}</div>
                </div>)
                )
                : <div>No results found</div>}
            </div>
        </div>
    );
}

export default Search;