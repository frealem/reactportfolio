import './style.css'
import { useState } from "react";
export const Contact=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

    const whenSend=(e)=>{
        e.preventDefault();
        alert('message :'+message);
    }
    
    return(<div className="contact1">
        <div className="space"></div>
    <div className='contact-text'><h1>My Portfolio</h1>
    <div className="contact"><span><i class="fa-solid fa-phone fa-2xl"></i></span>
    <h2>+251966782412</h2><time>Monday - Friday  8am-6pm</time></div>
    
    <div className="contact"><span><i class="fa-solid fa-location-dot fa-2xl"></i></span>
    <h2>Addis Ababa, Ethiopia</h2><time>4kilo ,Arada</time></div>
  
    <div className="contact"><span><i class="fa-solid fa-envelope-open-text fa-2xl"></i></span>
    <h2>frealemtekalign@gmail.com</h2><time>contact me every time!</time></div>
    </div>
    <div className="form">
        <h1>Get In Touch</h1>
        <form onSubmit={whenSend}>
        <div className='input-part'><input value={name} type='text' id='name' name='name' placeholder='Full Name...' onChange={(e)=>setName(e.target.value)}/>
    <input value={email} type='email' id='em' name='em' placeholder='email...' onChange={(e)=>setEmail(e.target.value)}/>
    <textarea className="text-area" value={message} placeholder="typing..." onChange={(e)=>setMessage(e.target.value)}></textarea>
    <input type="submit" value='send' className='button'/></div>
        </form>
    </div>
    </div>);
}
