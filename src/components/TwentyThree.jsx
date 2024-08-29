
// Logging Example using Context

import React from 'react';
import { useAuth } from './TwentyThreeContext';

function TwentyThree() {
    const { user, login, logout } = useAuth();

    return (
        <div>
            <h1>Login Example</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.username}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={() => login({ username: 'user123' })}>Login</button>
            )}
        </div>
    );
}

export default TwentyThree;
