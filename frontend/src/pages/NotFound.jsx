import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='dark:bg-dark-secondary-100 '>
            <section className='container flex flex-col mx-auto justify-between'>

                <div className='head pt-6'>
                    <div className='font-bold text-primary-200 text-2xl ml-28'>
                        FindIntern
                    </div>
                </div>
                <div className="flex items-center justify-center lg:py-20 py-10">
                    <div className='flex lg:flex-row flex-col gap-6 items-center w-full justify-center lg:py-20 py-10'>
                        <div className='text xl:w-1/3 lg:w-1/2 md:w-full w-full text-center lg:text-left'>
                            <h1 className='font-semibold mb-3 text-secondary-300 dark:text-secondary-100' style={{ fontSize: "calc(1.575rem + 3.9vw)" }}>
                                404
                            </h1>
                            <p className='text-secondary-200 font-medium text-xl mb-5 '>
                                Oops! Sorry, we couldn't find the page you were looking for. If you think this is a problem with us
                            </p>
                            <Link to='/' className='bg-primary-200 hover:bg-primary-300 w-full text-white  py-2 px-2 rounded-lg font-medium'>
                                Back To Safety
                            </Link>
                        </div>
                        <div className='img xl:w-1/2 lg:w-1/2 md:w-full w-full mt-8 lg:mt-0'>
                            <img className='w-full' src="https://codescandy.com/geeks-bootstrap-5/assets/images/error/404-error-img.svg" alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className='foot'>Foot</div> */}
            </section>
        </div>
    )
}

export default NotFound