const {
    Febby 
  } = require('febby');
   
  const config = {
    port: 3000,
    db: {
      url: 'mongodb://localhost:27017/bookdb'
    },
    appBaseUrl: '/booksrv'
  }
  const febby = new Febby(config);
   
  const api = febby.router('/api'); 

  const books = febby.model('books', {
    name: {
      type: String
    },
    author: {
      type: String
    },
    price :{
        type: Number,
        default: 10
    }
  });
   
  febby.crud('/books', {
    crud: true,
    middlewares: []
  }, books, api);
   
  febby.route({
    path: '/',
    method: 'get',
    handler: (req, res) => {
      const message = 'welcome to febby.!';
      res.json({
        message
      })
    }
  })
   
  febby.bootstrap(() => {
    console.log(`Server started on port : ${config.port}`)
  });