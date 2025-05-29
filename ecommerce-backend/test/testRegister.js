const axios = require('axios');

async function testRegister() {
  try {
    const response = await axios.post('http://localhost:3000/auth/register', {
      fullName: 'Test User',
      email: 'testuser2@example.com',
      password: 'password123',
      role: 'user'
    });
    console.log('Register Success:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Register Error:', error.response.data);
    } else {
      console.error('Register Error:', error.message);
    }
  }
}

testRegister(); 