import '../css/QuadContainer.css';
import HomeCard from './HomeCard';
import ImageContainer from '../components/ImageContainer';
import JammieBox from '../components/JammieBox';
import CatImage from '/cat.png';

export default function QuadContainer(){
    return(
        <div className="container">
                <hr className="clear"/>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <HomeCard title="Jammiest Deal of the Day">
                        {<JammieBox />}
                    </HomeCard>
                    <HomeCard title="Jamazon Essentials">
                        {<ImageContainer />}
                    </HomeCard>
                    <HomeCard title="Sign in for the best experience">
                        <img src={CatImage} />
                        <button className="btn amazonButton" type="submit">Login</button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <p className="card-text font-size-small" style={{ margin: '0' }}>Dont have an account? <span className="gradient-text">Go register here</span></p>
                        </div>
                    </HomeCard>
            </div>
        </div>
    );
}