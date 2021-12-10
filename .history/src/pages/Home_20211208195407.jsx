import React from 'react'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            {/* Hero  slider */}
            <HeroSlider/>
            {/* End hero slider */}
        </Helmet>
    )
}

export default Home
