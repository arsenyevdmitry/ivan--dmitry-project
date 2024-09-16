import { Link, Route, BrowserRouter as Router } from "react-router-dom"

import AboutMe from "./AboutMe"
import Contacts from "./Contacts"
import MainPage from "./mainpage"
import Portfolio from "./Portfolio"

function Header() {
  return (
    <Router>
      <nav>
        <div className="flex justify-evenly">
          <div>
            <Link
              to="/"
              className="text-4xl border-4 border-cyan-400 text-white font-medium"
            >
              Главная
            </Link>
          </div>
          <div>
            <Link
              to="/AboutMe"
              className="text-4xl border-4 border-cyan-400 text-white font-medium"
            >
              О себе
            </Link>
          </div>
          <div>
            <Link
              to="/Contacts"
              className="text-4xl border-4 border-cyan-400 text-white font-medium"
            >
              Контакты
            </Link>
          </div>
          <div>
            <Link
              to="/Portfolio"
              className="text-4xl border-4 border-cyan-400 text-white font-medium"
            >
              Портфолио
            </Link>
          </div>
        </div>
      </nav>
      <Route path="/AboutMe" exact component={AboutMe} />
      <Route path="/Contacts" exact component={Contacts} />
      <Route path="/Portfolio" exact component={Portfolio} />
      <Route path="/" exact component={MainPage} />
    </Router>
  )
}

export default Header
