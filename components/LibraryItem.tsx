'use client';

import useLoadImage from '@/hooks/useLoadImage';
import usePlayer from '@/hooks/usePlayer';
import { Song } from '@/types/types';
import Image from 'next/image';

interface LibraryItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const LibraryItem = ({ data, onClick }: LibraryItemProps) => {
  const player = usePlayer();
  const imageUrl = useLoadImage(data);
  const handleOnClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    player.setId(data.id);
  };
  return (
    <div
      onClick={handleOnClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          src={imageUrl || '/images/liked.png'}
          alt="Image"
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.artist}</p>
      </div>
    </div>
  );
};

export default LibraryItem;
