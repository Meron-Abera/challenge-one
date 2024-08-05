const jwt = require('jsonwebtoken');

const SECRET_KEY = '0965ade12489f5d928844d35dba6c099cb94b164a381bf2684a82d3452572a8197c8feb3efa02e897ea94ce41496057e2da42e1d5262c195964dced73f325c3b'; // Use a secure key and keep it private

export function signToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}
