import React, { PropsWithChildren } from 'react';

const Item: React.FC<PropsWithChildren> = ({ children }) => (<li style={{ display: 'flex', gap: '1rem', position: 'relative' }}>{children}</li>);

export default Item;
