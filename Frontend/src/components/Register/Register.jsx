import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../Config/Config.js';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [privacy, setPrivacy] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        if (!terms || !privacy) {
            toast.error('Please agree to the terms and conditions and privacy policy');
            return;
        }
        try {
            const res = await axios.post(`${config.API_URL}/register`, { name, email, password });
            if (res.status === 201) {
                toast.success('Registration successful');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || 'Error registering. Please try again later.');
            } else if (error.request) {
                toast.error('No response from the server. Please try again later.');
            } else {
                toast.error('Error registering. Please try again later.');
            }
        }
    };

    return (
        <div className="flex items-center justify-center bg-[#e0f7f9] py-20 px-4">
            <div className="w-full max-w-lg bg-white shadow-2xl rounded-lg p-8 space-y-6">
                <h2 className="text-2xl font-bold text-center text-[#1f5156]">Create Your Account</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-semibold text-[#1f5156]">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffdd40]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-semibold text-[#1f5156]">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffdd40]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-semibold text-[#1f5156]">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffdd40]"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="terms" 
                                name="terms" 
                                checked={terms}
                                onChange={(e) => setTerms(e.target.checked)}
                                className="h-4 w-4 text-[#1f5156] border-gray-300 rounded focus:ring-0 cursor-pointer"
                            />
                            <label htmlFor="terms" className="ml-2 text-sm text-[#1f5156]">I agree to the <a href="#" className="text-[#f5b921] hover:underline">terms and conditions</a></label>
                        </div>

                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                id="privacy" 
                                name="privacy" 
                                checked={privacy}
                                onChange={(e) => setPrivacy(e.target.checked)}
                                className="h-4 w-4 text-[#1f5156] border-gray-300 rounded focus:ring-0 cursor-pointer"
                            />
                            <label htmlFor="privacy" className="ml-2 text-sm text-[#1f5156]">I agree to the <a href="#" className="text-[#f5b921] hover:underline">privacy policy</a></label>
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-[#ffdd40] hover:bg-[#f5b921] text-[#1f5156] font-bold py-3 rounded-md transition duration-200"
                    >
                        Register
                    </button>
                </form>

                <div className="text-center text-sm text-[#1f5156] mt-4">
                    <p>Already have an account? <a href="/login" className="text-[#f5b921] hover:underline">Login</a></p>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={1500}
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

export default Register;
