'use client';
import useAuthModal from '@/hooks/useAuthModal';
import useUploadModal from '@/hooks/useUploadModal';
import { useUser } from '@/hooks/useUser';
import { Song } from '@/types/types';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbPlaylist } from 'react-icons/tb';
import LibraryItem from './LibraryItem';

interface LibraryProps {
  children?: React.ReactNode;
  songs: Song[];
}

export default function Library({ children, songs }: LibraryProps) {
  const authModel = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModel.onOpen();
    }

    return uploadModal.onOpen();
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
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((song) => {
          return <LibraryItem key={song.id} data={song} onClick={() => {}} />;
        })}
      </div>
    </>
  );
}
