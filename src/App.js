import { Add } from "./components/Add";
import { MovieList } from "./components/MovieList";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="layout">

        {/* Header */}
        <header className="header">
            <div className="logo">
                <div className="play">               
                </div>
            </div>
            <h1>My Movies</h1>
        </header>

        <nav className="nav">
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Movies</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </nav>

        {/* Main - List Of Movies */}
        <section className="content">
          <MovieList  />
        </section>

        {/* Lateral Bar */}
        <aside className="lateral">
          <Search />
          <Add />
        </aside>

        {/* Footer */}
        <footer className="footer">
            &copy; My Movies by LifeEasier
        </footer>
    </div>
  );
}

export default App;
