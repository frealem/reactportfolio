import './style.css'
import image1 from '../images/frew1.svg'
export const Home=()=>{
    return(<div className="home1">
       <div className="space"></div>
       <div className='home-text'> <h1>I'm Web Developer
Frealem Tekalign</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem ipsum.</p>
  <button className="button">Learn more</button> </div>
 <div className='home-image'><button className='button'>Hire Me</button><img alt='img' src={image1}/></div> </div>);

}