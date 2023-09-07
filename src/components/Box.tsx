import React, { Children, PropsWithChildren } from 'react';

export function Box({ children }: PropsWithChildren) {
  return <div className="border b-2 rounded-md p-4">{children}</div>;
}
