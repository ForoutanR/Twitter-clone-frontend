// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        // Fetch tweets from your backend
        const fetchTweets = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/tweets'); // Adjust URL accordingly
                setTweets(response.data);
            } catch (error) {
                console.error('Error fetching tweets:', error);
            }
        };

        fetchTweets();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <div>
                {tweets.length > 0 ? (
                    tweets.map((tweet) => (
                        <div key={tweet.TweetID}>
                            <p>{tweet.Content}</p>
                            {/* Display image if it exists */}
                            {tweet.ImageURL && <img src={tweet.ImageURL} alt="Tweet" />}
                        </div>
                    ))
                ) : (
                    <p>No tweets to display</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;
