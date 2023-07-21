// import React from 'react'
import Back from '../../components/common/back/Back'
import Faq from './Faq'
import PriceCard from './PriceCard'
import './price.styles.css'
const Pricing = () => {
    return (
        <>
            <Back title='Choose The Right Plan' />
            <section className="price padding">
                <div className="container grid">
                    <PriceCard />
                </div>
            </section>
            <Faq />
        </>
    )
}

export default Pricing
