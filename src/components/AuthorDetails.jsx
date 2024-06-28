import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_KEY } from '../assets/Key';

function AuthorDetails() {
    const navigate = useNavigate();
    const { username } = useParams();
    const [author, setAuthor] = React.useState(null);

    React.useEffect(() => {
        const fetchAuthor = async () => {
            const response = await fetch(`https://api.unsplash.com/users/${username}?`, {
                headers: {
                    Authorization: `Client-ID ${API_KEY}`,
                },
            });

            const data = await response.json();
            setAuthor(data);
        };

        fetchAuthor();
    }, [username]);

    if (author === null) {
        return <div className='loading'>Loading...</div>;
    }

    return (
        <div className='author__container'>
            <div className='author__profile'>
                <img src={author.profile_image.large} alt={author.name} />
                <h2>{author.name}</h2>
                <p>{author.bio}</p>
                <p>Location: {author.location}</p>
                <p>Photos: {author.total_photos}</p>
                <p>Likes: {author.total_likes}</p>
                <p>Followers: {author.followers_count}</p>

                <a href={author.links.html} target='_blank' rel='noopener noreferrer'>
                    Unsplash Profile
                </a>
                {author.portfolio_url && (
                    <a href={author.portfolio_url} target='_blank' rel='noopener noreferrer'>
                        Personal Portfolio
                    </a>
                )}
            </div>
            <div>
                <button onClick={() => navigate(-1)} className='back-button'>
                    Back
                </button>
            </div>
        </div>
    );
}

export default AuthorDetails;
