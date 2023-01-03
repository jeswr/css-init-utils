import { AppRunner, resolveModulePath } from '@solid/community-server';
import { Shorthand } from '@solid/community-server/dist/init/variables/Types';

export function createApp(shorthand?: Shorthand | undefined) {
  return new AppRunner().create(
    {
      mainModulePath: resolveModulePath(''),
      typeChecking: false,
    },
    resolveModulePath('config/default.json'),
    {},
    shorthand,
  );
}
