const mongoose = require('mongoose');
const User = require('../models/user');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected Successfully'))
.catch((err) => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
});

const createInitialAdmin = async () => {
    try {
        // Check if admin already exists
        const adminExists = await User.findOne({ email: 'admin@ecommerce.com' });
        
        if (adminExists) {
            console.log('Admin user already exists');
            return;
        }

        // Create admin user
        const adminUser = new User({
            fullName: 'System Admin',
            email: 'admin@ecommerce.com',
            password: 'admin123', // This will be hashed automatically
            role: 'admin'
        });

        await adminUser.save();
        console.log('Admin user created successfully');
    } catch (error) {
        console.error('Error creating admin user:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Run the migration
createInitialAdmin(); 