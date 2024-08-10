import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordCard from '../PasswordCard/PasswordCard.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

const ManagePassword = () => {
    const navigate = useNavigate();
    const [passwords, setPasswords] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            navigate('/login');
        } else {
            handleGetAllPasswords(user);
        }
    }, [navigate]);

    const handleAddPasswordClick = () => {
        navigate('/save-password');
    };

    const passwordCount = passwords.length;

    const handleGetAllPasswords = async (user) => {
        try {
            const res = await axios.get('http://localhost:5000/get-passwords', 
                {
                    params: {
                        user: user
                    }
                }
            );
            if (res.status === 200) {
                setPasswords(res.data.result);
            } else {
                toast.error('Failed to fetch passwords');
            }
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Something went wrong';
            toast.error(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <div className='text-center'>
                    <h1 className='text-xl font-medium text-[#1f5156]'>Loading...</h1>
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#1f5156] mt-4"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-[#e0f7f9] rounded-lg mx-auto shadow-md">
            <h1 className='text-3xl font-medium text-[#1f5156] text-center mb-4'>Manage Passwords</h1>

            <div className="flex justify-center mb-4">
                <button 
                    className="bg-[#ffdd40] text-white py-2 px-4 rounded-lg hover:bg-[#f5b921] transition-all duration-300" 
                    onClick={handleAddPasswordClick}
                >
                    Add new Password
                </button>
            </div>

            <div className="m-6">
                <h4 className='text-xl font-medium text-[#1f5156]'>
                    {passwordCount} {passwordCount === 1 ? 'site or app password saved' : 'sites or apps passwords saved'}
                </h4>
            </div>

            <div className="flex justify-center flex-wrap gap-6">
                {passwords.length > 0 ? (
                    passwords.map((password) => (
                        <PasswordCard 
                            key={password.id}
                            siteName={password.siteName}
                            username={password.username}
                            password={password.password}
                        />
                    ))
                ) : (
                    <h1 className='text-xl font-medium text-[#1f5156]'>No Previous Passwords Found!</h1>
                )}
            </div>

            <div className='mt-8 text-center'>
                <img src='/vite.svg' alt='Secure' className='mx-auto w-24 h-24' />
                <h5 className='text-xl font-medium text-[#1f5156] mt-4'>
                    Safer than safe!
                </h5>

                <p className='text-base text-[#1f5156]'>
                    Your passwords are stored securely and are encrypted.
                </p>

                <p className='text-base text-[#1f5156]'>
                    You can access them anytime, anywhere!
                </p>
            </div>
        </div>
    );
}

export default ManagePassword;
