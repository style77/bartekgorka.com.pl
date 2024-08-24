import React from 'react'
import './App.css'
import './Videos.css'
import Sidebar from './components/sidebar'


function Videos() {
    return (
        <div className="App-no-h">
            <div className="sidebar-container">
                <Sidebar />
            </div>
            <div className="container">
                <p className="video-desc-text mobile-hidden">
                    Jako doświadczony fotograf i filmowiec, tworzę krótkie, dynamiczne filmy w formacie pionowym, które idealnie nadają się do publikacji w mediach społecznościowych. Te krótkie klipy skutecznie przyciągają uwagę potencjalnych klientów, podkreślając najważniejsze cechy nieruchomości. Dzięki moim filmom, Twoja oferta staje się bardziej widoczna, generując większe zainteresowanie i szybciej przyciągając potencjalnych nabywców.
                </p>
                <p className="video-desc-text mobile-visible">
                    Jako doświadczony fotograf i filmowiec tworzę dynamiczne filmy pionowe, które doskonale prezentują nieruchomości w mediach społecznościowych. Dzięki moim krótkim klipom Twoja oferta stanie się bardziej atrakcyjna i szybciej przyciągnie uwagę potencjalnych klientów.
                </p>
                <div className="video-container">
                    <iframe
                        className="video"
                        src="videos/1.mp4"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <iframe
                        className="video"
                        src="videos/2.mp4"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <iframe
                        className="video"
                        src="videos/3.mp4"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <p className="video-desc-text mobile-hidden">
                    Tworzę również dłuższe, poziome filmy, które oferują pełne i szczegółowe przedstawienie nieruchomości. Moje produkcje pokazują wszystkie zalety i wyjątkowe cechy oferty, co pomaga wyróżnić ją na zatłoczonym rynku. Profesjonalne filmy wideo zwiększają zasięg kampanii marketingowych, przyciągając więcej potencjalnych nabywców. Dzięki moim filmom, Twoja nieruchomość zyskuje na wartości i atrakcyjności, co przekłada się na szybsze i bardziej opłacalne transakcje. Inwestując w wysokiej jakości wideo, zyskujesz narzędzie, które skutecznie zwiększa zainteresowanie i wartość Twojej oferty.
                </p>
                <p className="video-desc-text mobile-visible">
                    Tworzę również dłuższe, poziome filmy, które szczegółowo prezentują nieruchomości, ukazując ich zalety i wyjątkowe cechy. Moje profesjonalne produkcje zwiększają zasięg kampanii marketingowych i przyciągają więcej nabywców, czyniąc Twoją ofertę bardziej atrakcyjną i wartościową.
                </p>
                <div className="video-container-col">
                    <iframe
                        className="video"
                        src="https://www.youtube.com/embed/5qap5aO4i9A"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <iframe
                        className="video"
                        src="https://www.youtube.com/embed/5qap5aO4i9A"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}

export default Videos
