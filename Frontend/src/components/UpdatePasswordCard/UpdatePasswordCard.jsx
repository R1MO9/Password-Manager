import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash, FaSave, FaTrash } from 'react-icons/fa';
import Input from '../Input/Input';
import Button from '../Button/Button';

const UpdatePasswordCard = ({ onUpdate, onDelete, passwordData }) => {
    const [username, setUsername] = useState(passwordData.username);
    const [siteName, setSiteName] = useState(passwordData.siteName);
    const [password, setPassword] = useState(passwordData.password);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleUpdate = () => {
        onUpdate({ username, siteName, password });
    };

    const handleDelete = () => {
        onDelete();
    };

    useEffect(() => {
        setUsername(passwordData.username);
        setSiteName(passwordData.siteName);
        setPassword(passwordData.password);
    }, [passwordData]);

    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full max-w-sm">
            <h3 className="text-lg font-bold text-[#1f5156] mb-4">Update Password</h3>
            <div className="flex flex-col w-full mb-4">
                <Input
                    label="Site Name"
                    value={siteName}
                    disabled={true}
                    className="text-[#1f5156] border-[#1f5156] placeholder-[#1f5156] focus:ring-[#ffdd40]"
                />

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
            
            <div className="flex gap-6">
                <Button
                    variant='danger'
                    size='medium'
                    onClick={handleDelete}
                    icon={<FaTrash />}
                    className="rounded-lg bg-[#ffdd40] hover:bg-[#f5b921] text-[#1f5156]"
                >
                    Delete
                </Button>

                <Button
                    variant='primary'
                    size='medium'
                    onClick={handleUpdate}
                    icon={<FaSave />}
                    className="rounded-lg bg-[#ffdd40] hover:bg-[#f5b921] text-[#1f5156]"
                >
                    Update
                </Button>
            </div>
        </div>
    );
};

UpdatePasswordCard.propTypes = {
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    passwordData: PropTypes.shape({
        username: PropTypes.string,
        siteName: PropTypes.string,
        password: PropTypes.string,
    }).isRequired,
};

export default UpdatePasswordCard;
