import { Routes, Link } from 'react-router';
import { Button } from '@monoquest-nx/ui';

import { AppRoutes } from './routes';

export function App() {
  return (
    <>
      <Button onClick={() => alert('Button from UI lib clicked!')}>
        Randomize breadcrumb labels!
      </Button>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>{AppRoutes}</Routes>
    </>
  );
}

export default App;
