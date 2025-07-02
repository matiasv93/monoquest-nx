import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { scaffoldRr7AppGenerator } from './scaffold-rr7-app';
import { ScaffoldRr7AppGeneratorSchema } from './schema';

describe('scaffold-rr7-app generator', () => {
  let tree: Tree;
  const options: ScaffoldRr7AppGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await scaffoldRr7AppGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
