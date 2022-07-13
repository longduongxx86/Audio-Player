import React, { useContext } from 'react';
import { Songs } from '../Context';

function DetailSong(props) {
    const { song } = useContext(Songs)

    return (
        <div className='col-span-1 p-3'>
            <p className='text-cyan-600 font-bold'>Now playing</p>
            <p className='text-neutral-400 text-2xl'>{song.name}</p>
            <div className='w-[240px] mt-10 m-auto'>
                <img className='w-full' src={song.links.images[0].url} alt="music" />
            </div>
            <div className='flex justify-evenly items-center mt-10'>
                <img className='w-[70px] h-[70px] rounded-full' src={song.links.images[1].url} alt="" />
                <span className='text-xl text-neutral-400'>{song.author}</span>
            </div>
        </div>
    );
}

export default DetailSong;