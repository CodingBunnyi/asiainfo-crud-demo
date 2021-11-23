const jsonServer = require('json-server');
const path = require('path')
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const userdb = JSON.parse(fs.readFileSync('./src/mockApi/users.json', 'UTF-8'));

const middlewares = jsonServer.defaults();
server.use(middlewares);

function isAuthenticated({ username, password }) {
  return userdb.users.findIndex((user) => user.username === username && user.password === password) !== -1;
}

router.render = (req, res) => {
  const url = req.originalUrl;
  // signup
  // if (url === '/api/v1/signup' && req.method === 'POST') {
  //  res.sendStatus(200);
  //  const { email, password, name } = req.body;
  //  const last_item_id = userdb.users[userdb.users.length - 1].id;
  //  userdb.users.push({ id: last_item_id + 1, email, name, password });
  //  fs.writeFileSync('./src/mockApi/users.json', JSON.stringify(userdb));
  // }
  // login
  if (url === '/login' && req.method === 'POST') {
   const { username, password } = req.body;
   const index = userdb.users.findIndex((user) => user.username === username);
   if (isAuthenticated({ username, password }) === true) {
    res.status(200).jsonp({ 
     nickyName: userdb.users[index].nickyName,
     id: userdb.users[index].id,
   });
   } else {
    res.sendStatus(401);
   }
  }

  if (url === '/signup' && req.method === 'POST') {
   res.sendStatus(200);
   const { username, password, nickyName } = req.body;
   const last_item_id = userdb.users[userdb.users.length - 1].id;
   userdb.users.push({ id: last_item_id + 1, username, nickyName, password });
   fs.writeFileSync('./src/mockApi/users.json', JSON.stringify(userdb));
  } else {
    res.sendStatus(401);
   }
 };

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

