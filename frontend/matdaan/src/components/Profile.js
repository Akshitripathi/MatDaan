import React, { useState } from 'react';
import './Profile.css'; // Updated CSS file name

function Profile() {
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [isEditable, setIsEditable] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Full Name: ${fullName}, Email: ${email}, Username: ${username}, Phone Number: ${phone}`);
        setIsEditable(false);
    };

    return (
        <div className="user-profile-container">
            <h1>User Profile</h1>

            {/* Profile Image */}
            <div className="profile-img-container">
                <img src="https://via.placeholder.com/150" alt="Profile" className="profile-img" />
            </div>

            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <label htmlFor="full-name">Full Name:</label>
                    <div className="input-container">
                        <input
                            type="text"
                            id="full-name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            readOnly={!isEditable}
                        />
                        <span className="edit-icon" onClick={() => setIsEditable(true)}>
                            ✏️
                        </span>
                    </div>
                </div>

                <div className="field-group">
                    <label htmlFor="email">Email:</label>
                    <div className="input-container">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            readOnly={!isEditable}
                        />
                        <span className="edit-icon" onClick={() => setIsEditable(true)}>
                            ✏️
                        </span>
                    </div>
                </div>

                <div className="field-group">
                    <label htmlFor="username">Username:</label>
                    <div className="input-container">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            readOnly={!isEditable}
                        />
                        <span className="edit-icon" onClick={() => setIsEditable(true)}>
                            ✏️
                        </span>
                    </div>
                </div>

                <div className="field-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <div className="input-container">
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            readOnly={!isEditable}
                        />
                        <span className="edit-icon" onClick={() => setIsEditable(true)}>
                            ✏️
                        </span>
                    </div>
                </div>

                {/* Submit button always visible */}
                <button className="btn-submit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Profile;
