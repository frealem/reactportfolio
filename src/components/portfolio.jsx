import './style.css'
import img1 from '../images/person1.png'
export const Portfolio=()=>{
    return(<div className="portfolio1"><div className="space"></div>
    <div className='portfolio-text'><h1>My Portfolio</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
    <div className="portfolio-img">
       <a href=''> <img alt="portf1" src="https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?size=626&ext=jpg&ga=GA1.2.1320749704.1689930944&semt=ais"/> </a>
       <a href=''><img alt="portf1" src="https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?size=626&ext=jpg&ga=GA1.2.1320749704.1689930944&semt=ais"/> </a>
       <a href=''><img alt="portf1" src="https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?size=626&ext=jpg&ga=GA1.2.1320749704.1689930944&semt=ais"/>  </a>
       <a href=''><img alt="portf1" src="https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?size=626&ext=jpg&ga=GA1.2.1320749704.1689930944&semt=ais"/>  </a>
       <a href=''><img alt="portf1" src="https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?size=626&ext=jpg&ga=GA1.2.1320749704.1689930944&semt=ais"/> <img alt="portf1" src="https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?size=626&ext=jpg&ga=GA1.2.1320749704.1689930944&semt=ais"/></a>
      <a href=''><img alt="portf1" src="https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?size=626&ext=jpg&ga=GA1.2.1320749704.1689930944&semt=ais"/>  <img alt="portf1" src="https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?size=626&ext=jpg&ga=GA1.2.1320749704.1689930944&semt=ais"/></a>
    </div>
    <div className='portfolio-text'><h1>What My Clients Says</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
 <div className='three-person'>
 <div className='person1'>
 <li><i class="fa-solid fa-comments fa-xl"></i></li>
 <img alt='' src={img1}/>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    <span>Jhon kalihd</span>
 </div>
 <div className='person1'>
 <li><i class="fa-solid fa-comments fa-xl"></i></li>
 <img alt='' src={img1}/>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    <span>Jhon kalihd</span>
 </div>
 <div className='person1'>
 <li><i class="fa-solid fa-comments fa-xl"></i></li>
 <img alt='' src={img1}/>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    <span>Jhon kalihd</span>
 </div></div>
 </div>);
}