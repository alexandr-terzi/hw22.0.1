import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// Компонент Хеддера
const Header = () => {
  return (
    <header className="App-header">
      <h1>My first React App</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

// Компонент Боковой Навигации
const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav-list">
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
      </ul>
    </nav>
  );
};

// Компонент Центрального Контейнера
const MainContainer = () => {
  return (
    <main className="main-cont">
      <h2>Main Information</h2>
      <p>
        Aliquip consectetur deserunt duis exercitation aute ut ad eiusmod eu
        velit esse non pariatur anim. Elit consequat voluptate mollit dolore
        velit mollit. Aliqua id ullamco consectetur laborum eiusmod cupidatat
        eiusmod. Quis sunt dolore consequat eu et ex sit ea minim ad fugiat in
        sunt. Dolor sint anim sint proident ipsum occaecat non nostrud eiusmod
        ut veniam non. Id anim occaecat aute reprehenderit mollit aliquip non
        culpa anim cupidatat.
      </p>
    </main>
  );
};

// Компонент Приложения
const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Nav />
        <MainContainer />
      </div>
    </div>
  );
};

export default App;
