import React from 'react';
import Link from 'next/link';

const Test = () => {
  return (
    <>
      <Link href="/">
        <a className="block">main</a>
      </Link>
      <Link href="/sample">
        <a className="block">sample</a>
      </Link>
    </>
  );
};

export default Test;
