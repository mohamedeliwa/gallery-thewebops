import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import GalleryWrapper from '../components/GalleryWrapper'
import Pagination from '../components/Pagination'

const Home = () => {
    return (
        <div>
            <Breadcrumb />
            <GalleryWrapper />
            <Pagination />
        </div>
    )
}

export default Home
