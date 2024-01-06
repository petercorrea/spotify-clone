import { twMerge } from 'tailwind-merge';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  const styles = `bg-neutral-900 rounded-lg h-fit w-full`;
  return <div className={twMerge(styles, className)}>{children}</div>;
};

export default Box;
