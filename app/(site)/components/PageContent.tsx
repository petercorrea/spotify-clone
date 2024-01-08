'use client';

import useOnPlay from '@/hooks/useOnPlay';
import { Song } from '@/types/types';
import SongItem from '../../../components/SongItem';

interface PageContentProps {
  songs: Song[];
}

const PageContent = ({ songs }: PageContentProps) => {
  console.log(
    `👋👋👋 Hi there!`,
    `If you're seeing this, you should consider hiring me for your next project! https://www.linkedin.com/in/petercorrea`
  );

  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No Songs avalaible.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {songs.map((song) => {
        return (
          <SongItem key={song.id} onClick={(id) => onPlay(id)} data={song} />
        );
      })}
    </div>
  );
};

export default PageContent;
