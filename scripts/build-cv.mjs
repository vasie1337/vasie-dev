import { NodeCompiler } from '@myriaddreamin/typst-ts-node-compiler';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const input = resolve(root, 'cv/cv.typ');
const output = resolve(root, 'public/cv.pdf');

const compiler = NodeCompiler.create({ workspace: resolve(root, 'cv') });
const pdf = compiler.pdf({ mainFilePath: input });

await mkdir(dirname(output), { recursive: true });
await writeFile(output, pdf);

console.log(`cv: wrote ${output} (${pdf.length} bytes)`);
