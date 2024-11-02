import Link from 'next/link';

export default function HeroLink({ children, className, ...rest }) {

    const style = {

    };
    return (
      <a
        {...rest}
        className={className}
        >
        {children}
      </a>
    );
  }