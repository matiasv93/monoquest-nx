import { render } from '@testing-library/react';

import { MonoquestNxUi } from '.';

describe('MonoquestNxUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MonoquestNxUi />);
    expect(baseElement).toBeTruthy();
  });
});
