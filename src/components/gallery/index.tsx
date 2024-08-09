import React from 'react';
import './Gallery.css';

const column1 = [
    "https://i.imgur.com/oBdKA4F.jpeg",
    "https://i.imgur.com/PTR1Tti.jpeg",
    "https://i.imgur.com/LY9Tley.jpeg",
    "https://i.imgur.com/fleH4sK.jpeg",
    "https://i.imgur.com/5drqGZf.jpeg",
    "https://i.imgur.com/oSz0WON.jpeg",
    "https://i.imgur.com/upTTWpH.jpeg",
    "https://i.imgur.com/3tMgldm.jpeg",
    "https://i.imgur.com/HwH6SIu.jpeg",
    "https://i.imgur.com/D63KaYF.jpeg",
    "https://i.imgur.com/khVykNZ.jpeg",
    "https://i.imgur.com/CH8aj1o.jpeg",
    "https://i.imgur.com/2mbwjgH.jpeg"
];

const column2 = [
    "https://i.imgur.com/qXXdseS.jpeg",
    "https://i.imgur.com/KbMwZ1z.jpeg",
    "https://i.imgur.com/ThIOTbc.jpeg",
    "https://i.imgur.com/MPd67jt.jpeg",
    "https://i.imgur.com/IZOR7zS.jpeg",
    "https://i.imgur.com/vAk3zW4.jpeg",
    "https://i.imgur.com/kocYW5r.jpeg",
    "https://i.imgur.com/Tp0AL3y.jpeg",
    "https://i.imgur.com/4KpTQyo.jpeg",
    "https://i.imgur.com/hBR6590.jpeg",
    "https://i.imgur.com/0nDnn3J.jpeg",
    "https://i.imgur.com/ePqqksp.jpeg",
];

const column3 = [
    "https://i.imgur.com/xHoUurH.jpeg",
    "https://i.imgur.com/JmoHL9G.jpeg",
    "https://i.imgur.com/JetPTOX.jpeg",
    "https://i.imgur.com/Sgj1sf4.jpeg",
    "https://i.imgur.com/CYcPfXw.jpeg",
    "https://i.imgur.com/hqWHyIX.jpeg",
    "https://i.imgur.com/uaUNW16.jpeg",
    "https://i.imgur.com/Pf7zude.jpeg",
    "https://i.imgur.com/BQVcttV.jpeg",
    "https://i.imgur.com/usAKJtQ.jpeg",
    "https://i.imgur.com/B57fGLE.jpeg",
    "https://i.imgur.com/4UkZWLC.jpeg",
    "https://i.imgur.com/w65eDW3.jpeg",
    "https://i.imgur.com/SzqvpOL.jpeg",
];

const column4 = [
    "https://i.imgur.com/9fSR8SO.jpeg",
    "https://i.imgur.com/aYySEdT.jpeg",
    "https://i.imgur.com/RAXAoH7.jpeg",
    "https://i.imgur.com/w4N6s5F.jpeg",
    "https://i.imgur.com/O0MNuez.jpeg",
    "https://i.imgur.com/NiAgTQO.jpeg",
    "https://i.imgur.com/62FTvC7.jpeg",
    "https://i.imgur.com/Aq9oYgN.jpeg",
    "https://i.imgur.com/WKY8E0h.jpeg",
    "https://i.imgur.com/DDV35CN.jpeg",
    "https://i.imgur.com/WDMleaM.jpeg",
    "https://i.imgur.com/R8Oiir6.jpeg",
    "https://i.imgur.com/oAfKF8Y.jpeg",
    "https://i.imgur.com/ZrPFd9l.jpeg",
    "https://i.imgur.com/MWLHrBu.jpeg",
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