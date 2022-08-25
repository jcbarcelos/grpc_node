const grpc = require('grpc')
const protoLoader = require("@grpc/proto-loader")
const packageDefs = protoLoader.loadSync('./task.proto')
const taskProto = grpc.loadPackageDefinition(packageDefs)

const clientGrpc = new taskProto.TaskService(
  '0.0.0.0:9000',
  grpc.credentials.createInsecure()
)

module.exports = clientGrpc