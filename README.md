![banner](./src/assets/banner.png)

<div align="center">

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4" alt="tailwind" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logo=appwrite&logoColor=FD366E" alt="appwrite" />
  </div>

<hr />

</div>

## 📋 Table of Contents

1. 📜 [About the project](#about)
2. ⚙ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🤝 [Contributing](#contributing)

## 📜 <a name="about">About the Project</a>

ShakeIt is a cocktail and drink exploration application built with React.js. It allows users to browse a variety of cocktail recipes, search for drinks by name, and discover new flavors. The application fetches drink data from an API and provides an intuitive interface for easy navigation.

A unique feature of ShakeIt is the Trending Drinks section, which tracks the most searched drink terms using Appwrite for data storage. This allows users to explore popular and trending cocktails in real-time, enhancing the discovery experience.

ShakeIt is designed to offer a seamless and engaging experience for both casual enthusiasts and professional bartenders.

## <a name="tech-stack">⚙ Tech Stack</a>

- React.js
- Appwrite
- Tailwind CSS

## <a name="features">🔋 Features</a>

- [x] *Search Drinks*: Easily search for specific drinks using a search function.
- [x] *Trending Drinks Algorithm*: Displays trending drinks based on a dynamic algorithm.
- [x] *Details Modal*: When clicking on a drink item, a modal displays more information about it.
- [x] *Modern UI/UX*: A sleek and user-friendly interface designed for a great experience.
- [x] *Responsiveness*: Fully responsive design that works seamlessly across devices.


## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/DhemesonSiqueira/movie-react-app.git
cd movie-react-app
```


**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment VITE Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env.local
VITE_APPWRITE_PROJECT_ID=

VITE_APPWRITE_DATABASE_ID=

VITE_APPWRITE_COLLECTION_ID=
```

Replace the placeholder values with your actual *[Appwrite](https://appwrite.io/)*. You can creating a new project on the [Appwrite](https://appwrite.io/). You should create the following attributes in your collection: count, drink_id, poster_url and drink_name.

**Running the Project**

```bash
npm run dev
```

open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="contributing">🤝 Contributing</a>

Where can I improve?

We welcome contributions! Whether it's improvements, bug fixes, or new features, feel free to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push your changes (git push origin feature/new-feature).
5. Open a Pull Request on GitHub.

---
