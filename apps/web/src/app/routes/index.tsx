import { Route } from 'react-router';

import { FooPage, BarPage, BazPage } from '../pages';
import { BreadcrumbControls } from '../layouts/BreadcrumbControls';

export const AppRoutes = (
  <Route path="/" element={<BreadcrumbControls />}>
    <Route path="/foo" element={<FooPage />}>
      <Route path="bar" element={<BarPage />}>
        <Route path="baz" element={<BazPage />} />
      </Route>
    </Route>
  </Route>
);
