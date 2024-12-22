import './MyResumeContact.css'
import email from './assets/logo/github-142-svgrepo-com.svg'
import phone from './assets/logo/phone-alt-svgrepo-com.svg'
import linkedin from './assets/logo/linkedin-svgrepo-com.svg'
import github from './assets/logo/github-142-svgrepo-com.svg'

export function MyResumeContact() {
    return (
        <div>
            <div className='ContactHeader' id='MyresumeContact'>
                <h1>Get in Touch</h1>
            </div>
            <div className="Contact" >
                <div className="MyInfo">
                    <div>
                        <div>
                            <img className='logo' src={email} alt="" />
                            <p id="email">bharathsrinath2110@gmail.com</p>
                        </div>
                        <div>
                            <img className='logo' src={phone} alt="" />
                            <p id="phone">+919677395396</p>
                        </div>
                        <div>
                            <img className='logo' src={linkedin} alt="" />
                            <p id='linkedin'><a href="https://www.linkedin.com/in/bharathsrinath">LinkedIn</a></p>
                        </div>
                        <div>
                            <img className='logo' src={github} alt="" />
                            <p id='github'><a href="https://github.com/BharathSrinath">GitHub</a></p>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="ContactForm">
                    <form action="#">
                        <div>
                            <div>
                                <input type="text" name="name" id="name" placeholder='Name' />
                                <input type="email" name="email" id="email" placeholder='Email' />
                                <input type="text" name="subject" id="subject" placeholder='Subject' />
                            </div>
                            <div>
                                <textarea name="textarea" id="textarea" placeholder="Your message"></textarea>
                            </div>
                        </div>
                        <div id="submitDiv">
                            <input className='invert' type="submit" name="submit" id="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}