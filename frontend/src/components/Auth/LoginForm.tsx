
import React, { useState } from "react";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((u: { email: string; password: string }) => u.email === email && u.password === password);
        if (user) {
            setMessage("Login successful!");
        } else {
            setMessage("Invalid credentials");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>
            <h2>Login</h2>
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
            <button type="submit">Login</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default LoginForm;
 