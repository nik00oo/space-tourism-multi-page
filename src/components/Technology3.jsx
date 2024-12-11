
import capsule  from '../assets/technology/image-space-capsule-portrait.jpg'
import '../modules/Technology.scss'
import {useState} from "react";
import Technology from "./Technology.jsx";
import Technology2 from "./Technology2.jsx";

const Technology3 = () => {
    const [techSlide , setTechSlide] = useState("TECHNOLOGY3");

    const renderTech = () => {
        switch (techSlide) {
            case "TECHNOLOGY3":
                return (
                    <div className='background-technology'>
                        <main>
                            <div className='main-technology-div'>
                                <h2> The terminology... </h2>
                                <h1 className={"technology-h1"}> Space capsule </h1>
                                <p className={"technology-p"}>
                                    A space capsule is an often-crewed spacecraft that uses a blunt-body reentry<br/>
                                    capsule to reenter the Earth's atmosphere without wings. Our capsule is where<br/>
                                    you'll spend your time during the flight. It includes a space gym, cinema,<br/>
                                    and plenty of other activities to keep you entertained.</p>
                            </div>
                            <div className='technology-btn-div'>
                                <button onClick={() => setTechSlide("TECHNOLOGY")} className='technology-btn'>1</button>
                                <button onClick={() => setTechSlide("TECHNOLOGY2")} className='technology-btn'>2
                                </button>
                                <button onClick={() => setTechSlide("TECHNOLOGY3")} className='technology-btn'>3
                                </button>
                            </div>
                            <img className="technology-img" src={capsule}/>
                        </main>
                        <footer></footer>
                    </div>
                );
            case "TECHNOLOGY2":
                return <Technology2/>;
            case "TECHNOLOGY":
                return <Technology/>;
            default:
                return null;
        }
    };

    return (
        <div className={"background-technology"}>
            {renderTech()}
        </div>
    );

}


export default Technology3