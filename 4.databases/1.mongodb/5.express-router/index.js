const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin')

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes)

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})

// Express-router
// A router behaves like middleware itself
// It allows us to organize our routes in a more modular and scalable way. Previously we had all the routes in index.js file. But now we are breaking down and grouping different routes in a separate file.
// Example: Consider an e-commerce website and the following routes
    // www.example.com/mobiles/name/features/
    // www.example.com/laptops/name/features/
    // www.example.com/PC/name/features/
// See in all these routes we see a common pattern. So name/features can be written in a single file provided that we are rendering a same file with just different variables passed to them.