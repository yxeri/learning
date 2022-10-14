import React, { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren & { title: string };

const Section: React.FC<SectionProps> = ({ children, title }: SectionProps) => (
  <div>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

export default Section;
