import React, { createContext, useContext, useState } from 'react';
import { defaultLabels, getRandomLabel } from '../utils/breadcrumb';

type BreadcrumbLabels = { foo: string; bar: string; baz: string };

const BreadcrumbContext = createContext<{
  labels: BreadcrumbLabels;
  randomize: () => void;
}>({
  labels: defaultLabels,
  randomize: () => null,
});

export const useBreadcrumbs = () => useContext(BreadcrumbContext);

export const BreadcrumbProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [labels, setLabels] = useState<BreadcrumbLabels>(defaultLabels);

  const randomize = () => {
    setLabels({
      foo: getRandomLabel(),
      bar: getRandomLabel(),
      baz: getRandomLabel(),
    });
  };

  return (
    <BreadcrumbContext.Provider value={{ labels, randomize }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};
