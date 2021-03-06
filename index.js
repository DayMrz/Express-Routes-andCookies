const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters')
const dogsRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

// app.use((req, res, next) => {
//     if (req.query.isAdmin) {
//         next()
//     }
//     res.send("Sorry, not an Admin")
// })

app.use('/shelters', shelterRoutes);

app.use('/dogs', dogsRoutes);

app.use('/admin', adminRoutes);



app.listen(3000, () => {
    console.log('Serving app on localhost 3000')
})


