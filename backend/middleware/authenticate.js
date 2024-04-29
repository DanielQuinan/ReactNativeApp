const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'abc', (err, decoded) => { // Atenção à chave 'abc'
      if (err) {
        return res.status(403).send('Forbidden');
      }
      req.user = decoded;
      next();
    });
  } else {
    res.status(401).send('Unauthorized');
  }
};


module.exports = authenticate;