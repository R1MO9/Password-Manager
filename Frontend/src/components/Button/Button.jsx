import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
    children,
    type = 'button',
    onClick,
    disabled = false,
    loading = false,
    variant = 'primary',
    size = 'medium',
    icon,
    className,
    ...props
}) => {
    const buttonClasses = classNames(
        'inline-flex items-center justify-center font-bold focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
            'bg-[#ffdd40] text-[#1f5156] hover:bg-[#f5b921]': variant === 'primary',
            'bg-gray-200 text-gray-700 hover:bg-gray-300': variant === 'secondary',
            'bg-red-500 text-white hover:bg-red-600': variant === 'danger',
            'bg-[#1f5156] text-white hover:bg-gray-700': variant === 'dark',
            'opacity-50 cursor-not-allowed': disabled || loading,
            'px-4 py-2 text-sm': size === 'small',
            'px-6 py-3 text-base': size === 'medium',
            'px-8 py-4 text-lg': size === 'large',
        },
        className
    );

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonClasses}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
            ) : (
                <>
                    {icon && <span className="mr-2">{icon}</span>}
                    {children}
                </>
            )}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'dark']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    icon: PropTypes.node,
    className: PropTypes.string,
};

export default Button;
