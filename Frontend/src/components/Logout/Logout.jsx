import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../Button/Button';
import { FaSave, FaUndo } from 'react-icons/fa';

const Logout = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogout = async (e) => {
        e.preventDefault();

        if (!password) {
            toast.error('Please enter your password');
            return;
        }

        const username = localStorage.getItem('user');

        if (!username) {
            toast.error('User not found. Please log in again.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/logout', { password, username });

            if (res.status === 200) {
                toast.success('Logged out successfully');
                localStorage.removeItem('user');
                localStorage.removeItem('accessToken');

                setTimeout(() => {
                    navigate('/');
                    window.location.reload();
                }, 1500);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Error logging out. Please try again later.';
            toast.error(errorMessage);
        }
    };

    const handleResetPassword = () => {
        console.log('Resetting password');
        // Add your reset password logic here
    };

    return (
        <div className="flex justify-center items-center p-4 sm:p-6 lg:p-8 bg-[#e0f7f9]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Logout</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <Button 
                        variant='primary'
                        size='medium'
                        icon={<FaSave />}
                        className="rounded-lg bg-[#ffdd40] hover:bg-[#f5b921] text-[#1f5156]"
                        onClick={handleLogout}
                    >Logout</Button>
                    
                    <Button
                        variant='secondary'
                        size='medium'
                        icon={<FaUndo />}
                        className="rounded-lg bg-[#ffdd40] hover:bg-[#f5b921] text-[#1f5156]"
                        onClick={handleResetPassword}
                    >Reset Password</Button>
                    
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Logout;
