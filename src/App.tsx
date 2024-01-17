import Protected from '@components/data/Protected';
import { routes } from '@utils/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ Component, path, protectedRoute }) => (
          <Route
            key={path}
            path={path}
            element={
              protectedRoute ? (
                <Protected>
                  <Component />
                </Protected>
              ) : (
                <Component />
              )
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
