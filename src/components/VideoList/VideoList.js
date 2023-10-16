import React from 'react';
import { Link } from 'react-router-dom';
import './VideoList.scss';

function VideoList({ videos }) {
    return (
        <section className="videos">
            <h3 className="videos__heading">NEXT VIDEOS</h3>
            <ul className="videos__list">
                {
                    videos.map(video => (
                            <Link to={`/video/${video.id}`} className="video__link" key={video.id}>
                                <li className="video__item">
                                    <img className="video__image" src={"http://localhost:4000/videos/" + video.image} alt={video.title} />
                                    <div className="video__details">
                                        <h3 className="video__heading">{video.title}</h3>
                                        <p className="video__author">{video.channel}</p>
                                    </div>
                                </li>
                            </Link>
                    ))
                }
            </ul>
        </section>
    );
}

export default VideoList;