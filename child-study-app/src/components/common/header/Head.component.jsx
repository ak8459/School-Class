import React from 'react'
import "../../../Routes/Header.styles.css"
const Head = () => {

    return (
        <>
            <section className='head'>
                <div className="container flexSB">
                    <div className="logo">
                        <h1>GROW SKILL</h1>
                        <span>ONLINE EDUCATION & LEARNING</span>
                    </div>
                    <div className='social'>
                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-twitter icon'></i>
                    </div>
                    {/* className={!isAuth?} */}
                    {/* <div >
                        <i class="fa-solid fa-right-to-bracket"></i>
                    </div> */}

                </div>

            </section>

        </>
    )
}

export default Head
