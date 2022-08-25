const grpc = require('grpc')
const taskProtoBuffer = grpc.load('task.proto')

const gRpcServer = new grpc.Server()
gRpcServer.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
gRpcServer.start()