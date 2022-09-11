import {
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
  copyFile,
} from 'fs';
import { dirname } from 'path';

type File = {
  dir: string;
  name: string;
};

const recursiveAndbuild = (
  root: string,
  rootDir: string,
  outDir: string,
  skipFileList: File[],
) => {
  const join = (...parts: string[]) => parts.join('/').replace(/\/\//g, '/');

  const projectRoot = process.cwd();

  const nodeSrcRoot = join(projectRoot, rootDir);
  const denoSrcRoot = join(projectRoot, outDir);

  const skipList: string[] = [];

  if (skipFileList.length > 0) {
    skipFileList.forEach((file: File) => {
      const skipListFile = join(nodeSrcRoot, file.dir, file.name);
      skipList.push(skipListFile);
    });
  }

  const build = (root: string) => {
    for (const entry of readdirSync(join(nodeSrcRoot, root), {
      withFileTypes: true,
      encoding: 'utf-8',
    })) {
      if (entry.isDirectory()) {
        build(join(root, entry.name));
      } else if (entry.isFile() && entry.name.endsWith('.ts')) {
        const nodePath = join(nodeSrcRoot, root, entry.name);
        const denoPath = join(denoSrcRoot, root, entry.name);

        if (skipList.includes(nodePath)) continue;

        const nodeSource = readFileSync(nodePath, { encoding: 'utf-8' });

        const denoSource = nodeSource.replace(
          /^(?:import|export)[\s\S]*?from\s*['"]([^'"]*)['"];$/gm,
          (line, target) => {
            if (target === '@jest/globals') {
              return `import { expect } from 'https://deno.land/x/expect@v0.2.6/mod.ts';\r\nconst test = Deno.test;`;
            }

            if (target === '@sptruz/color-name') {
              return `import ColorName from 'https://deno.land/x/sptruz_color_name@0.0.0-beta.0.0.1/mod.ts';`;
            }

            if (target === '@sptruz/convert') {
              return `import convert from 'https://deno.land/x/sptruz_convert@0.0.0-beta.0.0.1/mod.ts';`;
            }

            if (target === '@sptruz/parse') {
              return `import parse from 'https://deno.land/x/sptruz_parse@0.0.0-beta.0.0.0/mod.ts';`;
            }

            if (target === '@sptruz/mix') {
              return `import mix from 'https://deno.land/x/sptruz_mix@0.0.0-beta.0.0.0/mod.ts';`;
            }

            const targetNodePath = join(dirname(nodePath), target);
            const targetNodePathIfFile = targetNodePath + '.ts';
            const targetNodePathIfDir = join(targetNodePath, 'index.ts');

            try {
              if (statSync(targetNodePathIfFile)?.isFile()) {
                return line.replace(target, target + '.ts');
              }
            } catch (error) {
              if (error?.code !== 'ENOENT') {
                throw error;
              }
            }

            try {
              if (statSync(targetNodePathIfDir)?.isFile()) {
                return line.replace(target, join(target, 'index.ts'));
              }
            } catch (error) {
              if (error?.code !== 'ENOENT') {
                throw error;
              }
            }

            return line;
          },
        );

        mkdirSync(dirname(denoPath), { recursive: true });
        writeFileSync(denoPath, denoSource, { encoding: 'utf-8' });
      }
    }
  };

  (() => {
    build(root);
  })();

  const mod = `import Sptruz from './index.ts';
export * from './index.ts';
export default Sptruz;
\r\n`;

  writeFileSync(join(denoSrcRoot, 'mod.ts'), mod, {
    encoding: 'utf-8',
  });

  copyFile(
    `${root.length === 0 ? '.' : root}/README.md`,
    `${denoSrcRoot}/README.md`,
    (err) => {
      if (err) throw err;
    },
  );
};

(() => {
  const skipFileList: File[] = [
    {
      dir: 'playground',
      name: 'playground.ts',
    },
  ];

  recursiveAndbuild('', 'src', 'deno', skipFileList);
})();
