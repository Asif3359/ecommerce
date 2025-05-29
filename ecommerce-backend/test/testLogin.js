const axios = require('axios');

async function testLogin() {
  try {
    const response = await axios.post('http://localhost:3000/auth/login', {
      email: 'testuser@example.com',
      password: 'password123'
    });
    console.log('Login Success:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Login Error:', error.response.data);
    } else {
      console.error('Login Error:', error.message);
    }
  }
}

async function testProfile() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODM4OTMzZmZjMDkxNDhkYzJlODIxN2EiLCJpYXQiOjE3NDg1MzgxNzUsImV4cCI6MTc0ODYyNDU3NX0.jtZLLKmAA32DUEeCZVG_TIJiRacfK9bvG44MPS0YPRk'; // Replace with your token

  try {
    const response = await axios.get('http://localhost:3000/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Profile Success:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Profile Error:', error.response.data);
    } else {
      console.error('Profile Error:', error.message);
    }
  }
}

testLogin();
// testProfile(); 