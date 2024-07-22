import React, { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'email') {
            setEmail(value);
        } else if (id === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Both fields are required');
            return;
        }
        try {
            const res = await axios.post('http://localhost:5000/login', { email, password });

            console.log( res.data.result.username);
    
            if (res.status === 200) {
                toast.success('Login successful');
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', res.data.result.username);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || 'Error logging in. Please check your credentials and try again.');
            } else if (error.request) {
                toast.error('No response from the server. Please try again later.');
            } else {
                toast.error('Error logging in. Please check your credentials and try again.');
            }
        }
    };
    

    return (
        <div className="flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-[#e0f7f9] min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-[#1f5156]">Login</h1>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 space-y-8 sm:space-y-0 sm:space-x-8 bg-white p-8 rounded-lg shadow-md"
            >
                <div className="flex flex-col items-center w-full sm:w-1/2 space-y-4">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                        alt="React Logo"
                        className="w-24 sm:w-48 lg:w-56 xl:w-64 mb-4"
                    />
                </div>

                <div className="flex flex-col items-center w-full sm:w-1/2 space-y-4">
                    <div className="w-full">
                        <label htmlFor="email" className="text-lg font-bold">Email:</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="password" className="text-lg font-bold">Password:</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md"
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#ffdd40] hover:bg-[#f5b921] text-[#1f5156] font-bold py-3 px-12 rounded"
                    >
                        Login
                    </button>
                </div>
            </form>

            <div className="flex gap-2 text-lg text-[#1f5156] mt-4">
                <p>Don't have an account?</p>
                <a href="/register" className="text-[#f5b921] hover:underline">Register</a>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Login;
