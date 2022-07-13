//const db = require('./connection/db')
const express = require('express')
const flash = require('express-flash')
const session = require('express-session')
const { render } = require('express/lib/response')

// menggunakan package express
const app = express()


app.set('view engine', 'hbs')

app.use(flash())

const port = 3000
app.listen(port, function(){
  console.log('server running on port ' + port)
})

// jembatan untuk mengirim data dari frontend ke backend
app.use(express.urlencoded({extended: false}))

// app.get('/register', function(req, res){
//     res.render('register')
//   })
  
//   app.post('/register', function(req, res){
//     const {name, email, password} = req.body
//     const bcrypt = require('bcrypt');
//     // const hash = bcrypt.hashSync(password, 10);
//     const hash2 = bcrypt.hashSync(password, 10);
  
//     db.connect((err, client, done)=>{
//         if(err) throw err
  
//         let query = `INSERT INTO "user_tb"(name, email, password) VALUES('${name}','${email}','${hash2}')`
//           console.log('It is normal if you can see this')
//           console.log(name + email + password)
//          client.query(query,(err, result) =>{
//               done()
//               if(err) throw err
//               console.log('hello')
//               req.flash('success', 'Account success')
//               res.redirect('/login')
//               console.log('you supposed to able to see this')
//          })
//     })
  
  
//   })

//   app.get('/login', function(req, res){
//     res.render('login')
   
// })

//   app.post('/login', function(req, res){
//     const {email, password} = req.body

//     db.connect((err, client, done) =>{
//         if(err) throw err

//         let query = `SELECT * FROM user_tb WHERE email='${email}'`

//         client.query(query, (err, result)=>{
//             done()
//             if (err) throw err

//             if(result.rowCount == 0){
//                 req.flash('danger','account not found')
//                 return res.redirect('/login')
//             }

//             const bcrypt = require('bcrypt');
//             const tbPass = result.rows[0].password
//             let isMatch = bcrypt.compareSync(password, result.rows[0].password)
//             console.log(isMatch)
//             console.log(password)
//             console.log(result.rows[0].password)

//             if(isMatch){
//               req.session.isLogin = true
//               req.session.user = {
//                   id : result.rows[0].id,
//                   name : result.rows[0].name,
//                   email : result.rows[0].email
//                 }
//                 console.log(result.rows[0].name)
//                 console.log(req.session.user)

//               req.flash('success','Login success')
//               res.redirect('/index-home')
//             } else {
//               res.redirect('/login')
//               req.flash('danger','Wrong Password')
//               console.log('doesnt match')
//             }
//         })
//       })
// })