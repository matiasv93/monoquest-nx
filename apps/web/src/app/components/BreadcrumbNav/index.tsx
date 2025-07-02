import React from 'react';
import { useLocation, Link } from 'react-router';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@monoquest-nx/ui';

import { useBreadcrumbs } from '../../contexts/BreadcrumbContext';

export const BreadcrumbsNav = () => {
  const { labels } = useBreadcrumbs();
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);

  const crumbs = [
    { path: '/foo', label: labels.foo },
    { path: '/foo/bar', label: labels.bar },
    { path: '/foo/bar/baz', label: labels.baz },
  ];

  const currentIdx = crumbs.findIndex(
    (crumb) => crumb.path === `/${segments.join('/')}`
  );

  // Custom style for each active breadcrumb based on index
  const activeClasses = [
    'text-primary font-bold', // foo
    'text-secondary font-bold', // bar
    'text-accent font-bold', // baz
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb, idx) => (
          <React.Fragment key={crumb.path}>
            <BreadcrumbItem>
              {idx === currentIdx ? (
                <BreadcrumbPage
                  aria-current="page"
                  className={activeClasses[idx]}
                >
                  {crumb.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={crumb.path}>{crumb.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {idx < crumbs.length - 1 && (
              <BreadcrumbSeparator aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
