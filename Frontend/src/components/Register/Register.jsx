import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [terms, setTerms] = useState(false);
    const [privacy, setPrivacy] = useState(false);

    const handleRegister = async(e) => {
        e.preventDefault();
        if (!terms || !privacy) {
            toast.error('Please agree to the terms and conditions and privacy policy');
        }
        try {
            const res = await axios.post('http://localhost:5000/register', {
                name,
                email,
                password
            });

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
        <div className="flex flex-col items-center space-y-4 bg-[#e0f7f9] p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col items-center space-y-4 bg-white shadow-xl rounded-lg p-4 sm:p-6 lg:p-8 w-full max-w-md">
                <div className="w-full">
                    <label htmlFor="Name" className="text-lg font-bold">Name:</label>
                    <input className='w-full p-2 border border-gray-300 rounded-md' type="text" placeholder="Enter your fullname" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="w-full">
                    <label htmlFor="email" className="text-lg font-bold">Email:</label>
                    <input className='w-full p-2 border border-gray-300 rounded-md' type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="w-full">
                    <label htmlFor="password" className="text-lg font-bold">Password:</label>
                    <input className='w-full p-2 border border-gray-300 rounded-md' type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="space-y-2 w-full">
                    <div className="flex items-center">
                        <input 
                            type="checkbox" 
                            id="terms" 
                            name="terms" 
                            value="terms" 
                            className="mr-2" 
                            onChange={(e) => setTerms(e.target.checked)}
                        />
                        <label htmlFor="terms">I agree to the terms and conditions</label>
                    </div>

                    <div className="flex items-center">
                        <input 
                            type="checkbox" 
                            id="privacy" 
                            name="privacy" 
                            value="privacy" 
                            className="mr-2" 
                            onChange={(e) => setPrivacy(e.target.checked)}
                        />
                        <label htmlFor="privacy">I agree to the privacy policy</label>
                    </div>
                </div>

                <button 
                    className="bg-[#ffdd40] hover:bg-[#f5b921] text-[#1f5156] font-bold py-2 px-4 rounded w-full"
                    onClick={handleRegister}
                >
                    Register
                </button>
            </div>

            <div className="flex gap-2 text-lg text-[#1f5156]">
                <p>Already have an account?</p>
                <a href="/login" className="text-[#f5b921] hover:underline">Login</a>
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
                transition: Flip
            />
        </div>
    );
};

export default Register;
