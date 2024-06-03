import React from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import PasswordCard from '../PasswordCard/PasswordCard'
import SavePasswordCard from '../SavePasswordCard/SavePasswordCard'
import UpdatePasswordCard from '../UpdatePasswordCard/UpdataPasswordCard'

const Home = () => {
    return (
        <div className='bg-[#e0f7f9] min-h-screen p-4 space-y-4'>

            

            <PasswordCard username='john_doe' siteName='Facebook' password='password123' />
            <Card />
            <SavePasswordCard onSave={(data) => console.log(data)} />

            <UpdatePasswordCard onUpdate={(data) => console.log(data)} passwordData={{ username: 'john_doe', siteName: 'Facebook', password: 'password123' }} />
        </div>
    )
}

export default Home