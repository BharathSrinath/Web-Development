const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    console.log("line 2:"+data);
    if (data) {
        res.render('subreddit', { ...data });
        // Here data is an object. We are spreading that and passing it as a parameter to the subreddit.
        // In subreddit.ejs we can use the object and display the properties as required.
    } else {
        res.render('notfound', { subreddit })
    }
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num })
    // We are rendering random and passing {num: num} which can be simplified as just {num}.
    // We can use some other name as rand: num. Now in our random.ejs file we should be using rand instead of num
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})