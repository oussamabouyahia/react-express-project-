const mysql=require('mysql2')
const mysqlConfig=require('./config.js')
const connection= mysql.createConnection(mysqlConfig)


const addUser='INSERT INTO users (name,email,password) VALUES(?,?,?)'
const getSubscribers='SELECT * FROM users'
const checkSignIn = 'SELECT * FROM users WHERE email = ? '
const NewRequest='INSERT INTO request (name,idcard,grossSalary,leftYears,pensionOption,monthlyPayment,adress,date,status)VALUES(?,?,?,?,?,?,?,?,"pending")'
const getRequests='SELECT * FROM request'
const updateStatus='UPDATE request SET status=? WHERE idrequest=?'
connection.connect(()=>{console.log('db connected')})

module.exports.connection=connection
module.exports.addUser=addUser
module.exports.getSubscribers=getSubscribers
module.exports.checkSignIn=checkSignIn
module.exports.NewRequest=NewRequest
module.exports.getRequests=getRequests
module.exports.updateStatus=updateStatus