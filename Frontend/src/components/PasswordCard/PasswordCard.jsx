import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash, FaCopy, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const PasswordCard = ({ username, siteName, password, key }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const copyPasswordToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };

    const copyUsernameToClipboard = () => {
        navigator.clipboard.writeText(username);
        alert('Username copied to clipboard!');
    };

    const removeSite = async (e) => {
        e.preventDefault();
    
        const user = localStorage.getItem('user');
        if (!user) {
            toast.error('User not found. Please log in again.');
            return;
        }
    
        try {
            const res = await axios.delete('http://localhost:5000/remove-password', {
                data: { user, siteName, username },
            });
    
            if(res.status === 200) {
                window.location.reload();
                console.log('Site removed successfully');
                toast.success('Site removed successfully');
            } else {
                toast.error(res.data.message || 'Error removing site');
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || 'Error removing site. Please try again later.');
            } else if (error.request) {
                toast.error('No response from the server. Please try again later.');
            } else {
                toast.error('Error removing site. Please try again later.');
            }
        }    
    }

    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md w-full max-w-sm">
            <div className="flex justify-between items-center w-full mb-4">
                <h3 className="text-lg font-bold text-[#1f5156]">{siteName}</h3>

                {/* Delete site button */}
                <button className="text-red-500 text-lg" onClick={removeSite}>
                    <FaTrash />
                </button>
                
            </div>
            <div className="flex items-center justify-between w-full bg-gray-100 p-2 rounded-lg mb-2">
                <span className="text-[#1f5156] text-lg">{username}</span>
                <button 
                        className="text-[#1f5156] text-xl"
                        onClick={copyUsernameToClipboard}
                >
                    <FaCopy />
                </button>
            </div>
            <div className="flex items-center justify-between w-full bg-gray-100 p-2 rounded-lg mb-2">
                <span className="text-[#1f5156] text-lg">
                    {isVisible ? password : '*'.repeat(password.length)}
                </span>
                <div className="flex space-x-4">
                    <button 
                        className="text-[#1f5156] text-xl"
                        onClick={toggleVisibility}
                    >
                        {isVisible ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <button 
                        className="text-[#1f5156] text-xl"
                        onClick={copyPasswordToClipboard}
                    >
                        <FaCopy />
                    </button>
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


export default PasswordCard;
