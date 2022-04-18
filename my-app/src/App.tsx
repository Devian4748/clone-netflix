import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={['/', '/movies/:movieId']}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
