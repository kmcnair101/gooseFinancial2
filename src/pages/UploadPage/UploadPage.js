import './UploadPage.scss';
import upload from "../../assets/icons/upload.svg"
import uploadImage from '../../assets/images/Upload-video-preview.jpg'
import Header from '../../components/Header/Header.js';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function UploadPage() {
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(true);

        const data = {
            title: e.target.title.value,
            description: e.target.text.value,
        };

        try {
            await axios.post("http://localhost:4000/videos", data);
            navigate("/");
            window.alert("Upload complete");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Header />
            <main className="upload">
                <h1 className="upload__heading">Upload Page</h1>
                <h2 className="upload__subheading">Video Thumbnail</h2>
                <section className="upload-section">
                    <img className="upload__thumbnail" src={uploadImage} />
                    <form className="upload-form" onSubmit={handleSubmit}>
                        <label className="upload-form__label" htmlFor="title">
                            TITLE YOUR VIDEO
                        </label>
                        <input className="upload-form__input" type="text" id="title" name="title" placeholder="Add a title to your video" required="" />
                        <label className="upload-form__label" htmlFor="text">
                            ADD A VIDEO DESCRIPTION
                        </label>
                        <textarea className="upload-form__textarea" name="text" id="text" placeholder="Add a description to your video"></textarea>
                        <div className="upload-form__wrapper">
                          <button className="upload-form__button" type="submit">
                              <img src={upload} alt="Upload icon" className="upload-form__icon" />
                              PUBLISH
                          </button>
                          <p className="upload-form__cancel">Cancel</p>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}

export default UploadPage;
