import wands from './wands'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'
import './App.css'
import WandList from './components/WandList'
import WandDetail from './components/WandDetail'
import Search from './components/Search'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          <NavLink className='anchor' exact to='/search'>
            🔍
          </NavLink>
        </p>
        <p>Olivander's Wand Shop</p>
        <p>
          <NavLink
            className='anchor'
            activeClassName='active'
            exact
            to='/wands'>
            ✨
          </NavLink>
        </p>
      </header>
      <Switch>
        <Route exact path='/wands/:wandSlug' component={() => <WandDetail />} />

        <Route exact path='/search' component={() => <Search />} />

        <Route
          path={['/', '/wands']}
          component={() => <WandList wands={wands} />}
        />
      </Switch>
    </div>
  )
}

export default App
