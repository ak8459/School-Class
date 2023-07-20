import React from 'react'
import { onlineCourse } from '../../Data/dummyData'
import Title from '../../components/common/Title/Title'
const OnlineCourse = () => {
    return (
        <>
            <section className='online'>
                <div className='container'>
                    <Title subtitle='COURSES' title='Browse Our Online Courses' />
                    <div className='content grid3'>
                        {onlineCourse.map( ( val ) => (

                            <div className='box'>
                                <div className='img'>
                                    <img src={val.cover} alt='not found!' />
                                    <img src={val.hoverCover} alt='not found!' className='show' />
                                </div>
                                <h1>{val.courseName}</h1>
                                <span>{val.course}</span>
                            </div>
                        ) )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OnlineCourse
