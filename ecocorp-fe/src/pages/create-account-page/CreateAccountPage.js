import React, { useState } from 'react';
import './CreateAccountPage.css';

const CreateAccountPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your account creation or login logic here
    console.log('Form data submitted:', formData);
    // Reset the form after submission
    setFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      {isLogin ? (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div style={{height: "70%"}}>
          <h1 style={{paddingBottom: "20px"}}>Create an Account</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Choose a password"
              />
            </label>
            <br />
            
            <button type="submit">Create Account</button>
          </form>
        </div>
      )}
      <p>
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <button onClick={toggleLogin}>
          {isLogin ? 'Create an account' : 'Go to login'}
        </button>
      </p>
    </div>
  );
};

export default CreateAccountPage;
