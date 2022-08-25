const grpc = require('grpc')
const protoLoader = require("@grpc/proto-loader")
const tasks = require('./tasks')
const packageDefs = protoLoader.loadSync('./task.proto')
const taskProto = grpc.loadPackageDefinition(packageDefs)

const gRpcServer = new grpc.Server()
gRpcServer.addService(taskProto.TaskService.service, {
  findAllTask:(_, callback) => {
    callback(null, {tasks});
  },
  createTask:(_, callback) => {
    const task = _.request
    tasks.push(task)
    callback(null, {task})
  },
  findIdTask:(_, callback) => {
    const task = tasks.find(el => el.id === _.request.id)
    if(task) {
      callback(null, {task})
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'id not exists'
      })
    }
  }

})

gRpcServer.bind('0.0.0.0:9000', grpc.ServerCredentials.createInsecure())
gRpcServer.start()
console.log('grpc Server has been started ...')