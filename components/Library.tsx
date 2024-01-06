'use client';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbPlaylist } from 'react-icons/tb';
interface LibraryProps {
  children: React.ReactNode;
}

export default function Library({ children }: LibraryProps) {
  const onClick = () => {
    console.log('clicked!');
  };

  const styles = 'flex items-center justify-between px-5 pt-4';
  return (
    <>
      <div onClick={onClick} className={styles}>
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 front-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div>List of songs!</div>
    </>
  );
}
