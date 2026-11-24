import React from 'react';

// Postiz is AGPL-3.0. Because this modified version is hosted for others, its complete source must be offered to users.
// Change this one constant to wherever the fork's source is published.
export const SOURCE_CODE_URL =
  'https://github.com/thesamueljohn/barnabas-postiz';

export const SourceLink = () => {
  return (
    <p className="text-[11px] text-center text-[#999999]">
      Built on{' '}
      <a
        href="https://github.com/gitroomhq/postiz-app"
        target="_blank"
        rel="noreferrer noopener"
        className="underline"
      >
        Postiz
      </a>{' '}
      (AGPL-3.0).{' '}
      <a
        href={SOURCE_CODE_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="underline"
      >
        Source code of this version
      </a>
    </p>
  );
};
