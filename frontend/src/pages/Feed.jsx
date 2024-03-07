import React from 'react'
import Navbar from '../components/common/Navbar'
import FeedProfile from '../components/Feed/FeedProfile'
import FeedPosts from '../components/Feed/FeedPosts'
import FeedTopCompanies from '../components/Feed/FeedTopCompanies'

function Feed() {
    return (
        <>
            <Navbar />
            <div className='bg-secondary-100 min-h-screen'>
                <section className='container px-4 xl:px-24 pt-12 h-full'>
                    <div className='lg:grid grid-cols-5 gap-3 lg:space-y-0 space-y-6 h-full'>
                        <div className='left-profile'>
                            <FeedProfile />
                        </div>
                        <div className='feed col-span-3'>
                            <FeedPosts />
                        </div>
                        <div className='right-top-companies'>
                            <FeedTopCompanies />
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Feed