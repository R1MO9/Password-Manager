import React from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordCard from '../components/PasswordCard/PasswordCard.jsx';

const ManagePassword = () => {
    const navigate = useNavigate();

    const handleAddPasswordClick = () => {
        navigate('/save-password');
    };

    return (
        <div className="p-6 bg-e0f7f9 rounded-lg bg-[#e0f7f9]">
            <h1 className="text-2xl text-1f5156 mb-4">Manage Password</h1>

            <div className="mb-6">
                <button 
                    className="bg-ffdd40 text-black py-2 px-4 rounded-lg hover:bg-f5b921" 
                    onClick={handleAddPasswordClick}
                >
                    Add new Password
                </button>
            </div>

            <div>
                <ul className="space-y-4">
                    <li>
                        <PasswordCard 
                            siteName="Facebook" 
                            username="8240718898"
                            password="k#fdl;fjg" 
                        />
                    </li>
                    <li>
                        <PasswordCard 
                            siteName="Instagram" 
                            username="8240718898"
                            password="k#fdl;fjg" 
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ManagePassword;
