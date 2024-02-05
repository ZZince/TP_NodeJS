const express = require('express')

const { connectTodB } = require('.\\services\\db\\connection.js');
const app = express()
app.use(express.json());

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, async () => {
    console.log("Example app listening on port", port);
    try {
        await connectTodB();
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
});

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

const watchlistRouter = require('./routes/watchlists');
app.use('/watchlists', watchlistRouter);

const addItemsRouter = require('./routes/addItems');
app.use('/addItems', addItemsRouter);

const updateItemRouter = require('./routes/updateItem');
app.use('/updateItem', updateItemRouter);

const listUsersRouter = require('./routes/listUsers');
app.use('/listUsers', listUsersRouter);

const listWatchlistsRouter = require('./routes/listWatchlists');
app.use('/listWatchlists', listWatchlistsRouter);

const contentWatchlistRouter = require('./routes/contentWatchlist');
app.use('/contentWatchlist', contentWatchlistRouter);