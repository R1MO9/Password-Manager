import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordCard from '../PasswordCard/PasswordCard.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

const ManagePassword = () => {
    const navigate = useNavigate();
    const [passwords, setPasswords] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

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
            setLoading(false); // Set loading to false once done
        }
    };

    if (loading) {
        return <h1 className='text-xl font-medium text-[#1f5156]'>Loading...</h1>; // Loading message
    }

    return (
        <div className="p-6 bg-[#e0f7f9] rounded-lg">
            <h1 className='text-3xl font-medium text-[#1f5156] text-center mb-4'>Manage Passwords</h1>

            <div className="flex justify-center mb-4">
                <button 
                    className="bg-[#ffdd40] text-white py-2 px-4 rounded-lg hover:bg-[#f5b921]" 
                    onClick={handleAddPasswordClick}
                >
                    Add new Password
                </button>
            </div>

            <div className="flex justify-center flex-wrap gap-10">
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
        </div>
    );
}

export default ManagePassword;
