import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

function Playing(props) {
    const { song, handleSetSong } = useContext(Songs)

    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }

    const handleClickPrevious = () => {
        handleSetSong(song.id - 1)
    }

    return (
        <AudioPlayer
            className='player-music'
            autoPlay
            src={song.url}
            onPlay={e => console.log("onPlay")}
            layout="stacked"
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrevious}
        // other props here
        />
    );
}

export default Playing;