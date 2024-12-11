
import '../modules/Technology.scss'
import spaceport from '../assets/technology/image-spaceport-portrait.jpg'
import {useState} from "react";
import Technology3 from "./Technology3.jsx";
import Technology from "./Technology.jsx";


const Technology2 = () => {

    const [techSlide , setTechSlide] = useState("TECHNOLOGY2");

    const renderTech = () => {
        switch (techSlide) {
            case "TECHNOLOGY2":
                return (
                    <div className='background-technology'>
                        <main>
                            <div className='main-technology-div'>
                                <h2> The terminology... </h2>
                                <h1 className={"technology-h1"}> Spaceport</h1>
                                <p className={"technology-p"}>
                                    A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,<br/>
                                    by analogy to the seaport for ships or airport for aircraft. Based in the<br/>
                                    famous Cape Canaveral, our spaceport is ideally situated to take advantage<br/>
                                    of the Earth’s rotation for launch.</p>
                            </div>
                            <div className='technology-btn-div'>
                                <button onClick={() => setTechSlide("TECHNOLOGY")} className='technology-btn'>1</button>
                                <button onClick={() => setTechSlide("TECHNOLOGY2")} className='technology-btn'>2
                                </button>
                                <button onClick={() => setTechSlide("TECHNOLOGY3")} className='technology-btn'>3
                                </button>
                            </div>
                            <img className="technology-img" src={spaceport}/>
                        </main>
                        <footer></footer>
                    </div>
                );
            case "TECHNOLOGY":
                return <Technology/>;
            case "TECHNOLOGY3":
                return <Technology3/>;
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

export default Technology2