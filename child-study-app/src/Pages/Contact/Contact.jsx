import React from 'react'
import Back from '../../components/common/back/Back'
import './contact.styles.css'
const Contact = () => {
    const url = 'https://img.freepik.com/free-photo/report-newsletter-update-subscribe-information_53876-122974.jpg?w=740&t=st=1689932834~exp=1689933434~hmac=1f7fe234b450c247f13a2bdb1aa26c4fa81685d0da080dc4cae3a1e19957d4da'
    return (
        <>
            <Back title='Contact Us' />
            <section className='contacts padding'>
                <div className='container shadow flexSB'>
                    <div className='left row'>
                        <img src={url} alt="" />
                    </div>
                    <div className='right row'>
                        <h1>Contact us</h1>
                        <p>We're open for any suggestion or just to have a chat</p>

                        <div className='items grid2'>
                            <div className='box'>
                                <h4>ADDRESS:</h4>
                                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                            <div className='box'>
                                <h4>EMAIL:</h4>
                                <p> info@yoursite.com</p>
                            </div>
                            <div className='box'>
                                <h4>PHONE:</h4>
                                <p> + 1235 2355 98</p>
                            </div>
                        </div>

                        <form action=''>
                            <div className='flexSB'>
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                            </div>
                            <input type='text' placeholder='Subject' />
                            <textarea cols='30' rows='10'>
                                Create a message here...
                            </textarea>
                            <button className='primary-btn'>SEND MESSAGE</button>
                        </form>

                        <h3>Follow us here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
