import Home from 'pages/Home';
import { RecoilRoot } from 'recoil';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from 'pages/Login';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <div className='App'>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
