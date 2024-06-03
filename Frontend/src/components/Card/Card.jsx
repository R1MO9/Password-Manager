import React from 'react'
import Button from '../Button/Button'
const Card = () => {
    return (
        <div className='flex items-center justify-center bg-gray-200 text-gray-700 font-sans text-lg'>
            <div className='mb-4 p-2 bg-white rounded-lg shadow-lg'>
                <img src='https://www.pngkey.com/png/full/114-1149878_react-logo-png-hd.png' alt='React Logo' className='w-56 h-56' />
            </div>
            <div className='text-center p-4'>
                <h1 className='text-2xl'>Welcome to the Home Page</h1>
                <p className='mt-4'>This is the Home Page of the React App</p>
                <p>This is a Card Component</p>
                <p>It is reusable</p>
                <p>It can be used multiple times</p>
                <p>It can be styled easily</p>


                <Button
                    variant='primary'
                    size='medium'
                    className='mt-4 rounded-xl'
                    onClick={() => alert('Button Clicked!')}

                >
                    Click Me
                </Button>
            </div>
        </div>
    )
}

export default Card