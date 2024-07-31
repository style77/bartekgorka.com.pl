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
    "https://i.imgur.com/xHoUurH.jpeg",
    "https://i.imgur.com/JmoHL9G.jpeg",
    "https://i.imgur.com/JetPTOX.jpeg",
    "https://i.imgur.com/Sgj1sf4.jpeg",
    "https://i.imgur.com/CYcPfXw.jpeg",
    "https://i.imgur.com/hqWHyIX.jpeg"
];

const column4 = [
    "https://i.imgur.com/9fSR8SO.jpeg",
    "https://i.imgur.com/aYySEdT.jpeg",
    "https://i.imgur.com/RAXAoH7.jpeg",
    "https://i.imgur.com/w4N6s5F.jpeg",
    "https://i.imgur.com/O0MNuez.jpeg",
    "https://i.imgur.com/NiAgTQO.jpeg",
    "https://i.imgur.com/62FTvC7.jpeg"
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