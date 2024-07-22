import React from 'react';
import { MdNoEncryptionGmailerrorred } from 'react-icons/md';

const About = () => {
    return (
        <div className="bg-[#e0f7f9] p-8">
            <div className="max-w-4xl mx-auto">
                <div className="container mx-auto">
                    <div className="sm:p-4">
                        <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-start justify-end px-4 pb-10 sm:px-10"
                            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://cdn.usegalileo.ai/sdxl10/21129296-24e4-40f3-bb7d-a2b5e08f53ad.png')" }}>
                            <div className="flex flex-col gap-2 text-left">
                                <h1 className="text-white text-4xl font-black leading-tight tracking-wide sm:text-5xl sm:font-black sm:leading-tight">
                                    Securely store your passwords
                                </h1>
                                <h2 className="text-white text-sm font-normal leading-normal sm:text-base sm:font-normal sm:leading-normal">
                                    Keep your digital life safe and secure. SafePass is a password manager that uses end-to-end encryption, so you have the key to your data.
                                </h2>
                            </div>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#1f5156] text-white text-sm font-bold leading-normal tracking-tight sm:text-base sm:font-bold sm:leading-normal sm:tracking-tight">
                                <span className="truncate">Get Started</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-[#1f5156] mb-4">What is SecurePass?</h2>
                    <p className="text-lg text-[#1f5156]">
                        SecurePass is a password manager that helps you store and manage your passwords, 
                        usernames, and site names in a secure way. It uses end-to-end encryption to ensure that only 
                        you can access your data.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-lg mt-12">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-[#1f5156] mb-4">Get Started with SecurePass</h3>
                        <p className="text-lg text-[#1f5156]">
                            Keep your digital life secure with SecurePass. Sign up now to get started.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#1f5156] text-[#ffcd40] font-semibold py-2 px-4 rounded-lg mt-4">Get Started</button>  
                    </div>  
                </div>

                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-[#1f5156] mb-4">Why use SecurePass?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<MdNoEncryptionGmailerrorred className="w-16 h-16 text-[#1f5156] mb-4" />}
                            title="End-to-end Encryption"
                            description="SecurePass uses end-to-end encryption to ensure that your data is safe and secure."
                        />
                        <FeatureCard
                            icon={<img src="src/assets/hashed.png" alt="Lock icon" className="w-16 h-16 mb-4" />}
                            title="Password Hashing"
                            description="SecurePass uses password hashing to protect your passwords from being exposed."
                        />
                        <FeatureCard
                            icon={<MdNoEncryptionGmailerrorred className="w-16 h-16 text-[#1f5156] mb-4" />}
                            title="Zero-knowledge policy"
                            description="SecurePass follows a zero-knowledge policy, which means that only you can access your data."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <div className="text-center bg-white p-6 hover:bg-gradient-to-r from-[#ffdd40] to-[#ffcd40] rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
        <div className="flex items-center justify-center">{icon}</div>
        <div className="flex flex-col items-center">
            <p className="text-xl font-semibold text-[#1f5156] mb-2">{title}</p>
            <p className="text-[#1f5156]">{description}</p>
        </div>
    </div>
);

export default About;
