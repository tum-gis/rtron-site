import React from 'react';
import type { Key } from 'react';

export default function Authors(props: {
    children?: React.ReactNode,
    date: String,
}) {
    return (
        <div className="mt-8 mb-16 text-gray-400 text-sm">
            {props.date} by {props.children}
        </div>
    );
}

interface AuthorProps {
    name: Key | null | undefined,
    link: string | undefined
}

export function Author(props: AuthorProps) {
    return (
        <span className="after:content-[','] last:after:content-['']">
      <a
          key={props.name}
          href={props.link}
          target="_blank"
          className="mx-1 text-gray-800 dark:text-gray-100"
      >
        {props.name as string}
      </a>
    </span>
    );
}
