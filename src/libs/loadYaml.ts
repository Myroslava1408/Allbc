import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

export function loadYamlData(fileName: string, lang: string) {
  if (!lang) {
    throw new Error(`Language is undefined for file ${fileName}`);
  }

  const fullPath = path.join(process.cwd(), 'src/content', `${fileName}-${lang}.yaml`);
  // eslint-disable-next-line no-useless-catch
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return yaml.load(fileContents);
  } catch (error) {
    throw error;
  }
}

