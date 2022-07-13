import { DownloadOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

function ListSong(props) {
    const { DataSongs, handleSetSong, song } = useContext(Songs);

    const [idSong, setIdSong] = useState()

    const handlePlaySong = idSong => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }

    useEffect(() => {
        setIdSong(song.id)
    }, [song])

    return (
        <div className="col-span-2 overflow-y-scroll">
            <table className="table-auto w-full mt-3">
                <thead className="text-white h12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]">Download</th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr key={index}
                            className={`text-neutral-500 h-12 cursor-pointer hover:bg-slate-400 hover:text-cyan-800 hover:font-bold ${idSong === song.id && 'text-teal-400'}`}
                            onClick={() => { handlePlaySong(song.id) }}
                        >
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center"><a href={song.url}><DownloadOutlined /></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListSong;
