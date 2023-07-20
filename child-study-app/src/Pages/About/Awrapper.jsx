import React from 'react'
import { aWrapper } from '../../Data/dummyData'
const Awrapper = () => {
    return (
        <>
            <section className='awrapper'>
                <div className='container grid'>
                    {aWrapper.map( ( val ) => {
                        return (
                            <div className='box flex'>
                                <div className='img'>
                                    <img src={val.cover} alt='' />
                                </div>
                                <div className='text'>
                                    <h1>{val.data}</h1>
                                    <h3>{val.title}</h3>
                                </div>
                            </div>
                        )
                    } )}
                </div>
            </section>
        </>
    )
}

export default Awrapper
