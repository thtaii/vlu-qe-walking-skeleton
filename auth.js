function login(user, pass) {
  return user === 'admin' && pass === '';
}

module.exports = login;
