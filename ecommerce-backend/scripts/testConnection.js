const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✅ MongoDB Connected Successfully');
    console.log('Database Name:', mongoose.connection.name);
    console.log('Host:', mongoose.connection.host);
    console.log('Port:', mongoose.connection.port);
})
.catch((err) => {
    console.error('❌ MongoDB Connection Error:', err.message);
})
.finally(() => {
    // Close the connection
    mongoose.connection.close();
}); 