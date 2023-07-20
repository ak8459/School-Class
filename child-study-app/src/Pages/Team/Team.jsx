import React from 'react'
import Back from '../../components/common/back/Back'
import '../About/About.style.css'
import Awrapper from '../About/Awrapper'
import TeamCard from './TeamCard'
import './team.style.css'
const Team = () => {
    return (
        <>
            <Back title='Team' />
            <section className='team padding'>
                <div className='container grid'>
                    <TeamCard />
                </div>
            </section>
            <Awrapper />
        </>
    )
}

export default Team
