import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
    // Initialize the token state with the token stored in local storage
    const [token, setToken] = useState(localStorage.getItem('token'));

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('progressData');
        // Update the token state to reflect the change in local storage
        setToken(null);
        navigate('/login');
    };

    // Use the useEffect hook to listen for changes in local storage
    useEffect(() => {
        // Create a function to handle storage changes
        const handleStorageChange = (event) => {
            if (event.key === 'token') {
                // Update the token state when the token changes in local storage
                setToken(event.newValue);
            }
        };

        // Add an event listener for storage changes
        window.addEventListener('storage', handleStorageChange);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <>
            <nav className="p-2 px-5" style={{ backgroundColor: '#0d6efd' }}>
                <div className="d-flex justify-content-between align-content-center">
                    <div>
                        <h1 className='text-light fs-2 p-0 m-0'>Learn Language</h1>
                    </div>
                    <div className='d-flex align-content-center'>
                        {token && (
                            <h1 onClick={logout} className='text-light fs-5 p-2 m-0 cursor-pointer'>
                                Logout
                            </h1>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
