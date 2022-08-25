const clientGrpc = require('./client_app')

clientGrpc.findAllTask({}, (err, tasks) => {
  if (err) { console.log('Error', err) } else { console.log('Sucess', tasks) }
})