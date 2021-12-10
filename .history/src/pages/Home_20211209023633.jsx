import React from 'react'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, {SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'

import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            {/* Hero  slider */}
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={true}
                timeOut={4000}
            />
            {/* End hero slider */}

            {/* policy section */}
            <Section>
                <SectionBody>
                    {
                        policy.map((item, index) => <PolicyCard
                            key={index}
                            name={item.name}
                            description={item.description}
                        />)
                    }
                </SectionBody>
            </Section>

            {/* end policy section */}
        </Helmet>
    )
}

export default Home
