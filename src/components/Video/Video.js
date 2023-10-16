import './Video.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg"
import Comments from '../Comments/Comment.js';

const api_url = "http://localhost:4000";
const api_key = "40268bd7-3a36-4cab-bfc0-98e0d99add75";

function Video({selectedVideoId}) {
    const [video, setVideo] = useState(null);


    
    useEffect(() => {
        if(selectedVideoId === null){
            return;
        }
        axios.get(`${api_url}/videos/${selectedVideoId}?api_key=${api_key}`)
            .then(response => {
                setVideo(response.data);
            })
    }, [selectedVideoId])
    
    if(video === null) {
        return <div>Loading!!</div>
    }    
    
const {title, channel, image, description, views, likes, duration, videoUrl, timestamp} = video;

    const date = new Date(timestamp);

    const formattedDate = date.toLocaleDateString('en-US', 
    {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit'
    });

    return (
        <>
            <main className="video">
                <video className="video__player" controls poster={`${api_url}/videos/${image}`}>
                    <source src={videoUrl} />
                </video>
            </main>
            <section className="wrapper">
                <div className="video__info">
                    <h1 className="video__title">{title}</h1>
                    <div className="video__wrapper">
                        <div className="video__reference">
                            <h2 className="video__channel">By {channel}</h2>
                            <p className="video__timestamp">{formattedDate}</p>
                        </div>
                        <div className="video__engagement">
                            <p className="video__views"><img className="video__icon" src={viewsIcon} alt="Video Views Icon"/>{views}</p>
                            <p className="video__likes"><img className="video__icon" src={likesIcon} alt="Video Likes Icon"/>{likes}</p>
                        </div>
                    </div>
                    <p className="video__description">{description}</p> 
                </div>
                <Comments selectedVideoId={selectedVideoId} />
            </section>
        </>
    )
}

export default Video;