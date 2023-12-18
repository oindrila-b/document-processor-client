import { TypeAnimation } from 'react-type-animation';
import '../components/css/Home.css'
import { Link } from 'react-router-dom';
export const Home = () => {

    return(
        <div className="container">
            <h1 className="title">
            DOCUMENTO LETS YOU 
            </h1> {" "}
        <div className="animated-typing">
            <TypeAnimation
                sequence={[
                    'Ask Questions About Your Document', 
                    1000,
                    'Make A Summary Out Of Your Document',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '5em', display: 'inline-block' }}
                repeat={Infinity}
            />
        </div>
        <Link to={"/services"}>
        <div className="buttons">
        <button className="btn-pink">Explore Documento</button>
        </div>
        </Link>
        </div>
    )
}