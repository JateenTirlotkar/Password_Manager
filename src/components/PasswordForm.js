import React, { useState } from 'react';

const PasswordForm = () => {
    const [website, setWebsite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwords, setPasswords] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const handleWebsiteChange = (event) => {
        setWebsite(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleShowPasswordChange = () => {
        setShowPassword(!showPassword);
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleAddPassword = (event) => {
        event.preventDefault();
        if (!website || !username || !password) {
            alert('Please fill in all fields.');
            return;
        }

        const newPassword = {
            id: Date.now(),
            website,
            username,
            password,
        };

        setPasswords([...passwords, newPassword]);
        setWebsite('');
        setUsername('');
        setPassword('');
    };

    const handleDeletePassword = (id) => {
        const updatedPasswords = passwords.filter((password) => password.id !== id);
        setPasswords(updatedPasswords);
    };

    const filteredPasswords = passwords.filter((password) =>
        password.website.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div>
            <form onSubmit={handleAddPassword}>
                <div>
                    <label htmlFor="website">Enter Website:</label>
                    <input
                        type="text"
                        id="website"
                        value={website}
                        onChange={handleWebsiteChange}
                    />
                </div>
                <div>
                    <label htmlFor="username">Enter Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Enter Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div className="show-password-container">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={handleShowPasswordChange}
                            id="showPassword"
                        />
                        <label htmlFor="showPassword">Show Password</label>
                    </div>
                </div>
                <button type="submit">Add Password</button>
            </form>


            <div>
                <input
                    type="text"
                    placeholder="Search by website"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />
                {filteredPasswords.length === 0 && <div>No Passwords View</div>}
                {filteredPasswords.map((passwordItem) => (
                    <div key={passwordItem.id}>
                        <strong>Website:</strong> {passwordItem.website} |{' '}
                        <strong>Username:</strong> {passwordItem.username} |{' '}
                        <strong>Password:</strong>{' '}
                        {showPassword ? (
                            passwordItem.password
                        ) : (
                            <span>
                                {'*'.repeat(passwordItem.password.length)}
                            </span>
                        )}
                        <button onClick={() => handleDeletePassword(passwordItem.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PasswordForm;
