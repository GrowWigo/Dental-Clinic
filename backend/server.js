const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running' });
});

// Mock Booking Endpoint
app.post('/api/appointments', (req, res) => {
    const { service, date, time, name, phone, email } = req.body;

    // Basic validation
    if (!service || !date || !time || !name || !phone) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please provide all required fields (service, date, time, name, phone).' 
        });
    }

    // In a real application, you would save this to a database here
    console.log('New Appointment Received:', { service, date, time, name, phone, email });

    // Simulate database delay
    setTimeout(() => {
        res.status(201).json({
            success: true,
            message: 'Appointment booked successfully!',
            appointmentId: 'APT-' + Math.floor(Math.random() * 1000000)
        });
    }, 1000);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
