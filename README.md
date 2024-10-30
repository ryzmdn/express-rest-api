# ExpressJS Rest API

A REST API (Representational State Transfer Application Programming Interface) is an architectural style for designing networked applications. It relies on standard HTTP methods (GET, POST, PUT, DELETE) to interact with resources, which are represented as URIs (Uniform Resource Identifiers). REST APIs are stateless, meaning each request from a client to a server must contain all the information needed to understand and process the request. They use standard HTTP status codes to indicate the outcome of requests and often communicate in formats like JSON or XML. REST APIs are widely used due to their simplicity, scalability, and ease of integration with web services and applications.

- Source: [Roadmap.sh](https://roadmap.sh/backend)

## Folder Structure

```bash
express-rest-api/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── logger.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── postController.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── admin.js
│   │   └── errorHandler.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── adminRoutes.js
│   │
│   ├── app.js
│   └── server.js
│
├── logs/
│   ├── combined.log
│   └── error.log
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Installation

If you want to use this repository, follow the steps below:

```bash
# Clone repository
git clone https://github.com/ryzmdn/express-rest-api.git

# Change directory folder
cd express-rest-api

# Install Dependencies
npm install

# Open code editor
code .

# Run web server
nodemon server.js
# or
npm start
```

These are some packages if you want to install them directly.

```bash
npm install express mongoose bcryptjs jsonwebtoken winston helmet cors morgan dotenv

# nodemon
npm install --save-dev nodemon
```

## Usage

Change the file name from ```.env.example``` to ```.env```, then you can see this variable:

```bash
PORT=
MONGO_URI=
JWT_SECRET=
NODE_ENV=
```

## Packages

- [Express](https://expressjs.com/)
- [Mongoose](https://www.mongodb.com)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [JSON Web Token](https://jwt.io/)
- [Winston](https://www.npmjs.com/package/express-winston)
- [Helmet](https://helmetjs.github.io/)
- [Cors](https://expressjs.com/en/resources/middleware/cors.html)
- [Morgan](https://expressjs.com/en/resources/middleware/morgan.html)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Learn Rest API

- [Red Hat](https://www.redhat.com/en/topics/api/what-is-a-rest-api)
- [Article](https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
- [Restapitutorial](https://restapitutorial.com/)
- [Restful](https://restfulapi.net/)
- [GeeksForGeeks](https://www.geeksforgeeks.org/rest-api-introduction/)
