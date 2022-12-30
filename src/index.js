if (process.env.NODEENV !== 'production') {
require('dotenv').config();
}
const app = require('./app');


app.listen(app.get('port'), () =>{
    console.log('servidor  on ', app.get('port'));
    console.log('Environment :', process.env.NODEENV);
});