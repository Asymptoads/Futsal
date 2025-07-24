import React, { useState } from "react";

const RegisterForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock registration logic with localStorage
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
        } else if (email && password) {
            // Retrieve existing users
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            // Check if user already exists
            const userExists = users.some((u: { email: string }) => u.email === email);
            if (userExists) {
                setMessage("User already exists");
            } else {
                // Add new user
                users.push({ email, password });
                localStorage.setItem("users", JSON.stringify(users));
                setMessage("Registration successful!");
            }
        } else {
            setMessage("Please fill all fields");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
            <h2>Register</h2>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default RegisterForm;
