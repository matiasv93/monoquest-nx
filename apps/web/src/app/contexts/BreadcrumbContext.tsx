import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  BreadcrumbLabels,
  defaultLabels,
  fetchBreadcrumbLabels,
  getRandomLabel,
} from '../utils/breadcrumb';

const BreadcrumbContext = createContext<{
  labels: BreadcrumbLabels | null;
  randomize: () => void;
  loading: boolean;
  error: string | null;
}>({
  labels: null,
  randomize: () => null,
  loading: false,
  error: null,
});

export const useBreadcrumbs = () => useContext(BreadcrumbContext);
export const BreadcrumbProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [labels, setLabels] = useState<BreadcrumbLabels>(defaultLabels);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadLabels() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchBreadcrumbLabels();
        setLabels(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLabels(defaultLabels);
      } finally {
        setLoading(false);
      }
    }
    loadLabels();
  }, []);

  const randomize = () => {
    setLabels({
      foo: getRandomLabel(),
      bar: getRandomLabel(),
      baz: getRandomLabel(),
    });
  };

  return (
    <BreadcrumbContext.Provider value={{ labels, randomize, loading, error }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};
