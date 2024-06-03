import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({
    label,
    type = 'text',
    id,
    placeholder,
    value,
    onChange,
    className = '',
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleToggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className={`flex w-full flex-col items-start space-y-2 ${className}`}>
            {label && <label htmlFor={id} className="text-lg font-bold">{label}:</label>}
            
            <div className="relative w-full">
                <input 
                    type={type === 'password' && showPassword ? 'text' : type} 
                    id={id} 
                    className="w-full p-2 border border-gray-300 rounded-md" 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange} 
                    {...props}
                />
                {type === 'password' && (
                    <button 
                        type="button" 
                        onClick={handleToggleShowPassword}
                        className="text-sm text-blue-500 absolute right-2 top-2"
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                )}
            </div>
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default Input;
