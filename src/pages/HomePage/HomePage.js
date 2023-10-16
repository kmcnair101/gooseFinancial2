import axios from 'axios';
import Video from '../../components/Video/Video.js';
import VideoList from '../../components/VideoList/VideoList.js';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const api_url = "http://localhost:4000";
const api_key = "40268bd7-3a36-4cab-bfc0-98e0d99add75";

function HomePage() {

    const {idFromParams} = useParams();
    const [videos, setVideos] = useState([]);

    let defaultVideoId = null;

    if(videos.length > 0) {
        defaultVideoId = videos[0].id;
    }

    let videoIdToDisplay = idFromParams || defaultVideoId;
    const filteredVideos = videos.filter(video => video.id !== videoIdToDisplay);

    useEffect(() => {
        axios.get(`${api_url}/videos?api_key=${api_key}`)
            .then(response => {
                setVideos(response.data);
            })
            .catch(error => {
                console.error('Error fetching videos:', error);
            });
    }, []);

    return (
        <>
        <Video selectedVideoId={videoIdToDisplay} />
        <VideoList videos={filteredVideos}/>
        </>
    );
}

export default HomePage;