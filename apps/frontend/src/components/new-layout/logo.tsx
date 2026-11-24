'use client';

// The Barnabas Commission mark: dark on light themes, white on dark themes.
export const Logo = () => {
  return (
    <>
      <img
        src="/tbc-mark.png"
        alt="The Barnabas Commission"
        width={60}
        height={60}
        className="mt-[8px] min-w-[60px] min-h-[60px] dark:hidden"
      />
      <img
        src="/tbc-mark-white.png"
        alt="The Barnabas Commission"
        width={60}
        height={60}
        className="mt-[8px] min-w-[60px] min-h-[60px] hidden dark:block"
      />
    </>
  );
};
