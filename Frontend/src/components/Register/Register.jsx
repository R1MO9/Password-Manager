import React, { useState } from 'react';
import Input from '../Input/Input';

const Register = () => {
    const [terms, setTerms] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleRegister = () => {
        if (!terms || !privacy) {
            setShowError(true);
        } else {
            setShowError(false);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4 bg-[#e0f7f9] p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col items-center space-y-4 bg-white shadow-xl rounded-lg p-4 sm:p-6 lg:p-8 w-full max-w-md">
                <Input
                    label="Full Name"
                    id="fullname"
                    placeholder="Enter your full name"
                />

                <Input
                    label="Email"
                    id="email"
                    placeholder="Enter your email"
                />

                <Input 
                    label="Username"
                    id="username"
                    placeholder="Enter your username"
                />

                <Input
                    label="Password"
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                />

                <Input
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                />

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

                {
                    showError && (
                        <p className="text-red-500 text-sm">Please agree to the terms and conditions and privacy policy</p>
                    )
                }

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
        </div>
    );
};

export default Register;
