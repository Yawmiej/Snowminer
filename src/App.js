import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/header/index';
import { routes } from './pages/_routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map(({ path, component: Component }, index) => (
          <Route path={path} element={<Component />} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
