import { ReactNode } from 'react';

interface Properties {
  children: ReactNode;
  className?: string;
  href: string;
}

export const Link = ({ children, className, href }: Properties) => {
  if (!href.startsWith('http')) {
    return <a className={className} href={href}>{children}</a>
  }

  return (
    <a href={href} className={className} rel='noopener noreferrer' target='_blank'>{children}</a>
  );
};
