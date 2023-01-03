# CSS Init Utils

This is a temporary package to easily init the [Community Solid Server](https://github.com/CommunitySolidServer/CommunitySolidServer/) in scripts until https://github.com/CommunitySolidServer/CommunitySolidServer/pull/1509 is released.

```ts
import { createApp } from '@jeswr/css-init-utils';

function main() {
  const app = createApp({
    port: 3_002,
    seededPodConfigJson: path.join(__dirname, 'configs', 'solid-css-seed.json'),
  });
  await app.start();
}

main();
```

## License
©2023–present
[Jesse Wright](https://github.com/jeswr),
[MIT License](https://github.com/jeswr/useState/blob/master/LICENSE).
