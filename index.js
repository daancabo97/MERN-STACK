/* A traves de un metodo express solicitar que escuche a traves de puerto 3000 para poder hacer peticiones*/

const express = require('express');
const morgan = require('morgan');
const app = express();

/* db connection*/


/* settings */
app.set('port', process.env.PORT || 3000);


/* middlewares */


/* routes */


/* static files*/
app.listen(3000, () => {
    console.log(`Server on port ${app.get('port')}`);
})



