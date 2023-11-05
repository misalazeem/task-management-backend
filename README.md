<a id="readme-top"></a>

<h1 align="center"><b>Task Management BackEnd</b></h3>

# 📗 Table of Contents

- [📗 Table of Contents](#table-of-contents)
- [📖 Task Management Backend](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
  - [💻 Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
  - [👥 Authors](#Authors)
  - [🔭 Future Features](#future-features)
  - [🤝 Contributing](#contributing)
  - [⭐️ Show your support](#️support)
  - [🙏 Acknowledgments](#acknowledgements)
  - [❓ FAQ](#faq)
  - [📝 License](#license)

# 📖 Task Management Backend <a id="about-project"></a>

**Task Management Backend** This is the backend for a Task Management application, built on NestJS with PostGresSql as the database.

<a href="https://github.com/misalazeem/task-management-frontend">Link to Front End Repository</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🛠 Built With <a id="built-with"></a>

### Tech Stack <a id="tech-stack"></a>

<details>
  <summary>Server</summary>
  <ul>
    <li>NestJs</li>
    <li>TypeScript</li>
  </ul>
</details>

<details>
  <summary>Database</summary>
  <ul>
    <li>Docker</li>
    <li>PostGreSQL</li>
  </ul>
</details>

### Key Features <a id="key-features"></a>

- **Gitflow**
- **RESTFUL API**
- **JWT AUTHENTICATION**
- **GUARDED ROUTES**
- **Use PostgreSQL**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🚀 Live Demo <a name="live-demo"></a>

> [Live Demo](https://brilliant-horse-b1b052.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a id="getting-started"></a>

### Prerequisites

In order to run this project you need:

- To clone or fork this repo
- Docker Client Installed
- PostgreSQL install in you computer

### Setup

Clone this repository to your desired folder:

For example, using Ubuntu:

```sh
  cd my-desired-folder
  git clone https://github.com/misalazeem/task-management-backend
```

For more information on how to clone or fork a repository:

- <a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository">How to clone a repo</a>
- <a href="https://docs.github.com/en/get-started/quickstart/fork-a-repo">How to fork a repo</a>

### Install

To install dependencies, the following command must be run in the terminal:

```sh
  cd task-management-app
  npm install
```

```bash
cp .env.example .env
```

- update the database username password port etc

To create database, migrate schema and implement initial database entries

```sh
  docker-compose up
  npx prisma migrate dev
```

### Usage

In the project directory, run the first time:

```sh
  npm start run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a id="Authors"></a>

👤 **Misal Azeem**

- GitHub: [@misalazeem](https://github.com/misalazeem)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a id="future-features"></a>

Future changes:

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a id="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a id="️support"></a>

If you like this project, I encourage you to clone, fork and contribute. Our community and knowledge grows with each engagement.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a id="acknowledgements"></a>

We would like to thank Pesto for the idea for this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a id="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
