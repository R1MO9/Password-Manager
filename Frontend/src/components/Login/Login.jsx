import React, { useState } from 'react';
import Input from '../Input/Input';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log(formData);
    };

    return (
        <div className="flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-[#e0f7f9] min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-[#1f5156]">Login</h1>

            <form 
                onSubmit={handleSubmit}
                className="flex flex-col xs:flex-row items-center w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 space-y-8 sm:space-y-0 sm:space-x-8 bg-white p-8 rounded-lg shadow-md"
            >
                <div className="flex flex-col items-center w-full sm:w-1/2 space-y-4">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" 
                        alt="React Logo" 
                        className="w-24 sm:w-48 lg:w-56 xl:w-64 mb-4" 
                    />
                </div>

                <div className="flex flex-col items-center w-full sm:w-1/2 space-y-4">
                    <Input 
                        label="Username" 
                        id="username" 
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <Input
                        label="Password"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <button type="submit" className="bg-[#ffdd40] hover:bg-[#f5b921] text-[#1f5156] font-bold py-3 px-12 rounded">
                        Login
                    </button>
                </div>
            </form>

            <div className="flex gap-2 text-lg text-[#1f5156] mt-4">
                <p>Don't have an account?</p>
                <a href="/register" className="text-[#f5b921] hover:underline">Register</a>
            </div>
        </div>
    );
};

export default Login;
