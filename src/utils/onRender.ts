import { ProfilerOnRenderCallback } from 'react';

export const onRender: ProfilerOnRenderCallback = (
  id,
  _,
  actualDuration,
  baseDuration,
) => {
  // eslint-disable-next-line no-console
  console.log({
    actualDuration,
    baseDuration,
  });
};
