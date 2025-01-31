// @ts-ignore
import React, { PropsWithChildren } from 'react';

type TableProps = {
  className?: string
};

export default function Table(props: PropsWithChildren<TableProps>) {
  return (
    <table className={`w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ${props.className}`}>
      { props.children }
    </table>
  )
}
