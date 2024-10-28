import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

export function loadYamlData(fileName: string) {
  const fullPath = path.join(process.cwd(), 'src/content', fileName + '.yaml');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return yaml.load(fileContents);
}
