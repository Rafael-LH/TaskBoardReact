const db = require('mongoose');
const { dbUser, dbPassword, dbName } = require('.');
const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0-nt2ff.mongodb.net/${dbName}?retryWrites=true&w=majority`;

db.Promise = global.Promise; // de esta manera utilizamos la forma nativa de node de hacer promesas
const connect = async () => {
  await db.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true, // esta es una configuracion para que no haya problemas de compatibilidad en caso de que el servidor sea más nuevo o mas viejito
  })
    .then((_) => console.log('[db] Conectada con éxito!'))
    .catch(err => console.log(`[db] Ha ocurrido algun error ${err}`))
}
module.exports = connect;


