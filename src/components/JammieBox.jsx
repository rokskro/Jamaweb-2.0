import JamImage from '/jam-image.png';
import '../css/QuadContainer.css';
import Countdown from './Countdown';

export default function JammieBox(){
    return( 
       <div>
    <img src={JamImage} className="img-width-370px"/>
    <div className="card-text" style={{display: 'flex', alignItems: 'center'}}>
        <hr className='clear'/>
        <Countdown expiryDate="2024-03-01" />
    </div>
    <p className="card-text">Up to 15% off on all banana & jam products</p>
</div>
    );
}