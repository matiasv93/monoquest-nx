import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { ScaffoldRr7AppGeneratorSchema } from './schema';

export async function scaffoldRr7AppGenerator(
  tree: Tree,
  options: ScaffoldRr7AppGeneratorSchema
) {
  const projectRoot = `apps/${options.name}`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default scaffoldRr7AppGenerator;
