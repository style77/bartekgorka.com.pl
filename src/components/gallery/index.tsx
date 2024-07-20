import React from 'react';
import './Gallery.css';

const column1 = [
    "https://i.imgur.com/oBdKA4F.jpeg",
    "https://i.imgur.com/PTR1Tti.jpeg",
    "https://i.imgur.com/LY9Tley.jpeg",
    "https://i.imgur.com/fleH4sK.jpeg",
    "https://i.imgur.com/5drqGZf.jpeg",
    "https://i.imgur.com/oSz0WON.jpeg"
];

const column2 = [
    "https://i.imgur.com/qXXdseS.jpeg",
    "https://i.imgur.com/KbMwZ1z.jpeg",
    "https://i.imgur.com/ThIOTbc.jpeg",
    "https://i.imgur.com/MPd67jt.jpeg",
    "https://i.imgur.com/IZOR7zS.jpeg",
    "https://i.imgur.com/vAk3zW4.jpeg",
    "https://i.imgur.com/kocYW5r.jpeg"
];

const column3 = [
    "https://i.imgur.com/capDZ7H.jpeg",
    "https://i.imgur.com/eSJ8fp2.jpeg",
    "https://i.imgur.com/6YMYVic.jpeg",
    "https://i.imgur.com/OuOlzwN.jpeg",
    "https://i.imgur.com/vkEYVCJ.jpeg",
    "https://i.imgur.com/HPfJjq9.jpeg"
];

const column4 = [
    "https://i.imgur.com/9d2Uyrh.jpeg",
    "https://i.imgur.com/f7Esgpx.jpeg",
    "https://i.imgur.com/lxR4HUG.jpeg",
    "https://i.imgur.com/0PHg6pY.jpeg",
    "https://i.imgur.com/AGOObLn.jpeg",
    "https://i.imgur.com/BgnW2e3.jpeg",
    "https://i.imgur.com/4mB7xiB.jpeg"
];

function Gallery() {
    return (
        <div className="gallery">
            <div className="gallery-column">
                {
                    column1.map((image, index) => (
                        <img key={index} src={image} alt="" className="gallery-image" />
                    ))
                }
            </div>
            <div className="gallery-column">
                {
                    column2.map((image, index) => (
                        <img key={index} src={image} alt="" className="gallery-image" />
                    ))
                }
            </div>
            <div className="gallery-column">
                {
                    column3.map((image, index) => (
                        <img key={index} src={image} alt="" className="gallery-image" />
                    ))
                }
            </div>
            <div className="gallery-column">
                {
                    column4.map((image, index) => (
                        <img key={index} src={image} alt="" className="gallery-image" />
                    ))
                }
            </div>
        </div>
    );
}

export default Gallery;