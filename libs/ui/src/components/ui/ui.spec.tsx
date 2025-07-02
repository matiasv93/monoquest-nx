import { render } from '@testing-library/react';

import { MonoquestNxUi } from './ui';

describe('MonoquestNxUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MonoquestNxUi />);
    expect(baseElement).toBeTruthy();
  });
});
