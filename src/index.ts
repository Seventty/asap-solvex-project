import app from '@/loaders/app';
require('./loaders');

app.listen(3000, () => {
    console.log("Hello world");
});

