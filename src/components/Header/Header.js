import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg"
import profilePic from "../../assets/images/Mohan-muruge.jpg";


const SearchBar = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <form className="header__form" onSubmit={handleSubmit}>
                <label htmlFor="search" className="header__label">
                </label>
                <img src={search} alt="search icon" className="header__icon" />
                <input type="text" id="search" name="search" placeholder="Search" className="header__input" />
        </form>
    )
}


function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/">
                    <img src={logo} alt="Logo" className="header__logo" />
                </Link> 
                <div className="header__wrapper">
                    <SearchBar />
                    <div className="header__profile">
                        <img src={profilePic} alt="Profile" className="header__profile-pic" />
                    </div>
                    <Link to="/UploadPage" className="header__upload-btn">
                        <img src={upload} alt="Upload icon" className="header__upload-icon" />
                        UPLOAD
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;