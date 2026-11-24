import React from 'react';

// The Barnabas Commission logo with its name: dark on light themes, white on dark themes.
export const LogoTextComponent = () => {
  return (
    <>
      <img
        src="/tbc-logo.png"
        alt="The Barnabas Commission"
        className="h-[72px] w-auto dark:hidden"
      />
      <img
        src="/tbc-logo-white.png"
        alt="The Barnabas Commission"
        className="h-[72px] w-auto hidden dark:block"
      />
    </>
  );
};
