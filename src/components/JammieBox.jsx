import JamImage from '/jam-image.png';
import '../css/QuadContainer.css';

export default function JammieBox(){
    return( 
        <div>
            <img src={JamImage} className="img-width-370px"/>
            <p className="card-text"><span className="badge text-bg-danger">Up to 15% off</span> Ends in: </p>
            <p className="card-text">Up to 15% off on all banana & jam products</p>
        </div>
    );
}