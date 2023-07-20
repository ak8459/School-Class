import React from 'react'
import { homeAbout } from '../../Data/dummyData'
import Title from '../../components/common/Title/Title'
import "./About.style.css"
import Awrapper from './Awrapper'
const AboutCard = () => {
    const imgUrl = 'https://images.unsplash.com/photo-1605818215588-c8013661b021?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
    return (
        <>
            <section className='aboutHome'>
                <div className='container flexSB'>
                    <div className='left row' >
                        <img src={imgUrl} alt='not found!' />
                    </div>
                    <div className='right row'>
                        <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
                        <div className='items'>
                            {homeAbout.map( ( val ) => {
                                return (
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <img src={val.cover} alt='' />
                                        </div>
                                        <div className='text'>
                                            <h2>{val.title}</h2>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                )
                            } )}
                        </div>
                    </div>
                </div>
            </section>
            <Awrapper />
        </>
    )
}

export default AboutCard
