'use client';

import LibraryItem from '@/components/LibraryItem';
import LikeButton from '@/components/LikeButton';
import { useUser } from '@/hooks/useUser';
import { Song } from '@/types/types';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface LikedContentProps {
  songs: Song[];
}

const LikedContent = ({ songs }: LikedContentProps) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Liked Songs
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 p-6 w-full">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <LibraryItem onClick={() => {}} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
