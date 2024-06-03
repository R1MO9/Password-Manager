import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash, FaCopy } from 'react-icons/fa';

const PasswordCard = ({ username, siteName, password }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!');
    };

    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md w-full max-w-sm">
            <div className="flex justify-between items-center w-full mb-4">
                <h3 className="text-lg font-bold text-[#1f5156]">{siteName}</h3>
                <button 
                    className="text-[#ffdd40] hover:text-[#f5b921]"
                    onClick={toggleVisibility}
                >
                    {isVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
            <div className="flex items-center justify-between w-full bg-gray-100 p-2 rounded-lg mb-2">
                <span className="text-[#1f5156] text-lg">{username}</span>
            </div>
            <div className="flex items-center justify-between w-full bg-gray-100 p-2 rounded-lg mb-2">
                <span className="text-[#1f5156] text-lg">
                    {isVisible ? password : '*'.repeat(password.length)}
                </span>
                <button 
                    className="text-[#ffdd40] hover:text-[#f5b921]"
                    onClick={copyToClipboard}
                >
                    <FaCopy />
                </button>
            </div>
        </div>
    );
};

PasswordCard.propTypes = {
    username: PropTypes.string.isRequired,
    siteName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};

export default PasswordCard;
