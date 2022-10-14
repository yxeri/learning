import React, { PropsWithChildren } from 'react';

const List: React.FC<PropsWithChildren> = ({ children }) => (
  <ul>
    {children}
  </ul>
);

export default List;
