import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash, FaCopy, FaSave } from 'react-icons/fa';
import Input from '../Input/Input';
import Button from '../Button/Button';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const SavePasswordCard = ({ onSave }) => {
    const [username, setUsername] = useState('');
    const [siteName, setSiteName] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleSave = async(e) => {
        e.preventDefault();
        if(!username || !siteName || !password) {
            return toast.error('Please fill all the fields');
        }
        const user = localStorage.getItem('user');
        try {
            const res = await axios.post('http://localhost:5000/save-password', {
                user,
                siteName,
                username,
                password
            });

            if (res.status === 201) {
                toast.success('Password saved successfully');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || 'Error saving password. Please try again later.');
            } else if (error.request) {
                toast.error('No response from the server. Please try again later.');
            } else {
                toast.error('Error saving password. Please try again later.');
            }
        }
    };

    // Options for the dropdown
    const siteOptions = [
        { value: 'google', label: 'Google' },
        { value: 'facebook', label: 'Facebook' },
        { value: 'twitter', label: 'Twitter' },
        { value: 'instagram', label: 'Instagram'},
        { value: 'linkedin', label: 'LinkedIn'},
        { value: 'github', label: 'GitHub'},
        { value: 'slack', label: 'Slack'},
        { value: 'discord', label: 'Discord'},
        { value: 'twitch', label: 'Twitch'},
        { value: 'netflix', label: 'Netflix'},
        { value: 'amazon', label: 'Amazon'},
        { value: 'ebay', label: 'eBay'},
        { value: 'etsy', label: 'Etsy'},
    ];

    return (
        <div className='bg-[#e0f7f9] p-6 rounded-lg'>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full max-w-sm mx-auto">
            <h3 className="text-lg font-bold text-[#1f5156] mb-4">Save New Password</h3>
            <div className="flex flex-col w-full mb-4">
                {/* Dropdown for Site Name */}
                <label className="text-lg font-bold text-[#1f5156] mb-2">Site Name</label>
                <select
                    className="input-field text-[#1f5156] border-[#1f5156] placeholder-[#1f5156] focus:ring-[#ffdd40]"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                >
                    <option value="" disabled>Select a site</option>
                    {siteOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <Input
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="text-[#1f5156] border-[#1f5156] placeholder-[#1f5156] focus:ring-[#ffdd40]"
                />
                
                <Input
                    label="Password"
                    type={isVisible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    rightIcon={
                        isVisible ? (
                            <FaEyeSlash
                                onClick={toggleVisibility}
                                className="text-[#ffdd40] hover:text-[#f5b921]"
                            />
                        ) : (
                            <FaEye
                                onClick={toggleVisibility}
                                className="text-[#ffdd40] hover:text-[#f5b921]"
                            />
                        )
                    }
                    className="text-[#1f5156] border-[#1f5156] placeholder-[#1f5156] focus:ring-[#ffdd40]"
                />
            </div>
            
            <Button
                variant='primary'
                size='medium'
                onClick={handleSave}
                icon={<FaSave />}
                className="rounded-lg bg-[#ffdd40] hover:bg-[#f5b921] text-[#1f5156]"
            >
                Save Password
            </Button>
        </div>

        <ToastContainer 
            position="top-center"
            autoClose={3000}
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

SavePasswordCard.propTypes = {
    onSave: PropTypes.func.isRequired,
};

export default SavePasswordCard;
