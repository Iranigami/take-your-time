// @ts-ignore
import React, { PropsWithChildren } from 'react';

type THeadProps = {
  className?: string
};

export default function THead(props: PropsWithChildren<THeadProps>) {
  return (
    <thead className={`text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ${props.className}`}>
      { props.children }
    </thead>
  )
}
