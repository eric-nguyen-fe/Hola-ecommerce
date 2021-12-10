import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, {SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/product'


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
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                    {
                        policy.map((item, index) => <Link to="/policy">
                            <PolicyCard
                                key={index}
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                            />
                        </Link>
                        )
                    }
                    </Grid>
                    
                </SectionBody>
            </Section>

            {/* end policy section */}

            {/* best selling section */}
            <Section>
                <SectionTitle>
                    top sản phẩm bán chạy nhất trong tuần
                </SectionTitle>
                <SectionBody>
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >

                        </Grid>
                </SectionBody>
            </Section>
            {/* end best selling section */}
        </Helmet>
    )
}

export default Home
