import { Route, Link } from 'react-router';

export const AppRoutes = (
  <>
    <Route
      path="/"
      element={
        <div>
          This is the generated root route.{' '}
          <Link to="/page-2">Click here for page 2.</Link>
        </div>
      }
    />
    <Route
      path="/exam"
      element={
        <div>
          <Link to="/">Click here to go back to root page.</Link>
        </div>
      }
    />
  </>
);
