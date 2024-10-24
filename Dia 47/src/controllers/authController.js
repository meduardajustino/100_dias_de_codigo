const users = [
    { username: 'vascomelhordomundo', password: 'meutime21' }, // para exemplo
  ];
  
  exports.showLoginForm = (req, res) => {
    res.render('template', { title: 'Login', message: null }); // renderiza o template com o formulário de login
  };
  
  exports.handleLogin = (req, res) => {
    const { username, password } = req.body;
  
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      req.session.user = user;
      res.redirect('/dashboard');
    } else {
      res.render('template', { title: 'Login', message: 'Usuário ou senha inválidos!' });
    }
  };
  
  exports.logout = (req, res) => {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  };
  