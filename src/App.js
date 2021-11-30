import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import { routes } from './pages/_routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component, headerTheme = '' }, index) => (
          <Route
            path={path}
            element={<Layout component={component} headerTheme={headerTheme} />}
            key={index}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
