const jsonServer = require('json-server');
const bodyParser = require('body-parser')
const fs = require('fs');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const userdb = JSON.parse(fs.readFileSync('./src/mockApi/users.json', 'UTF-8'));

const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(bodyParser.json());

function isAuthenticated({ username, password }) {
  return userdb.users.findIndex((user) => user.username === username && user.password === password) !== -1;
}

router.render = (req, res) => {
  const url = req.originalUrl;
  if (url === '/login' && req.method === 'POST') {
   const { username, password } = req.body;
   const index = userdb.users.findIndex((user) => user.username === username);
   if (isAuthenticated({ username, password }) === true) {
    res.status(200).json({ 
     id: userdb.users[index].id,
     nickyName: userdb.users[index].nickyName,
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
  }
};

server.patch('/users/:id', (req, res) => {
  res.sendStatus(200);
  const index = userdb.users.findIndex((user) => user.id.toString() === req.params.id.toString());
  const { newNickyName } = req.body;
  userdb.users[index].nickyName = newNickyName;
  fs.writeFileSync('./src/mockApi/users.json', JSON.stringify(userdb));
});

server.delete('/users/:id', (req, res) => {
  res.sendStatus(200);
  const index = userdb.users.findIndex((user) => user.id.toString() === req.params.id.toString());
  userdb.users.splice(index, 1);
  fs.writeFileSync('./src/mockApi/users.json', JSON.stringify(userdb));
})

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

