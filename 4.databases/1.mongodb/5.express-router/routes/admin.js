const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    // Now whataver the request you make will go through this .use() right? 
    // Since we have defined this in this file and not in index.js, we are avoiding other requests from other files to go through this .use() method. Only routes defined within this file ('/topsecret' and '/deleteeverything') will go through this. 
    if (req.query.isAdmin) {
        // We are basically checking whether the query has 'isAdmin' along with the route. If it has, then we will res.send the respective data based on the actual route
        return next();
    }
    return res.send("SORRY NOT AN ADMIN!")
})

router.get('/topsecret', (req, res) => {
    res.send('THIS IS TOP SECRET')
})
router.get('/deleteeverything', (req, res) => {
    res.send('OK DELETED IT ALL!')
})

module.exports = router;
