import React, { createRef, useRef, useState, useEffect, useCallback } from 'react'
import { Card, CardBody, Image, Button, Progress, CardFooter } from "@nextui-org/react";
import { HeartIcon } from './HeartIcon';
import { RepeatOneIcon } from "./RepeatOneIcon";
import { PreviousIcon } from "./PreviousIcon";
import { PauseCircleIcon } from "./PauseCircleIcon";
import { ShuffleIcon } from "./ShuffleIcon";
import { NextIcon } from './NextIcon';

import { intervalToDuration } from "date-fns";
import { useAudioPlayer, useGlobalAudioPlayer } from "react-use-audio-player"
function CardPlayer({ canciones, toggleLike, indexSong, setIndexSong }) {
    const [liked, setLiked] = React.useState(false);

    const [loading, setLoading] = useState(true);
    const [timePlaying, setTimePlaying] = useState('00:00');
    const [progressTime, setProgressTime] = useState(0);

    const song1 = useAudioPlayer();

    const formatTime = (timeData) => {
        const duration = intervalToDuration({ start: 0, end: timeData * 1000 })
        // { minutes: 30, seconds: 7 }

        return `${duration.minutes < 10 ? '0' + duration.minutes : duration.minutes}:${duration.seconds < 10 ? '0' + duration.seconds : duration.seconds}`
    }

    useEffect(() => {
        song1.load(canciones[indexSong].url, {
            autoplay: true,
            onend: () => handleNextSong()
        })
        setLoading(false);


    }, []);


    const togglePlayingBoth = useCallback(() => {
        song1.togglePlayPause()

    }, [song1.togglePlayPause])

    useEffect(() => {
        const i = setInterval(() => {
            setTimePlaying(formatTime(song1.getPosition()))

            setProgressTime(song1.getPosition())
        }, 500)

        return () => clearInterval(i)
    }, [song1.getPosition])


    const handleNextSong = () => {
        let aux = indexSong + 1
        if (aux < canciones.length) {

            song1.load(canciones[aux].url, {
                autoplay: true,
                onend: () => handleNextSong()
            })
            setIndexSong(aux);
        }


    }
    const handleBackSong = () => {
        let aux = indexSong - 1;
        if (aux >= 0) {
            song1.load(canciones[aux].url, {
                autoplay: true,
                onend: () => handleNextSong()
            })
            setIndexSong(aux);
        }
    }




    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
            shadow="sm"
        > {loading ? <p>loading</p> : (
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        <Image
                            alt="Album cover"
                            className="object-cover"
                            height={200}
                            shadow="md"
                            src="https://m.media-amazon.com/images/I/A1i7RW6NffL._UF894,1000_QL80_.jpg"
                            width="100%"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h3 className="font-semibold text-foreground/90">{canciones[indexSong].band} - Origins</h3>
                                <p className="text-small text-foreground/80">{canciones.length} Canciones</p>
                                <h1 className="text-large font-medium mt-2">{canciones[indexSong].name}</h1>
                            </div>
                            <Button
                                isIconOnly
                                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                radius="full"
                                variant="light"
                                onPress={() => toggleLike(canciones[indexSong].id)}
                            >
                                <HeartIcon
                                    className={canciones[indexSong].like ? "[&>path]:stroke-transparent" : ""}
                                    fill={canciones[indexSong].like ? "currentColor" : "none"}
                                />
                            </Button>
                        </div>

                        <div className="flex flex-col mt-3 gap-1">
                            <Progress
                                aria-label="Music progress"
                                classNames={{
                                    indicator: "bg-default-800 dark:bg-white",
                                    track: "bg-default-500/30",
                                }}
                                color="default"
                                size="sm"
                                value={(progressTime / song1.duration) * 100}
                            />
                            <div className="flex justify-between">
                                <p className="text-small">{timePlaying}</p>
                                <p className="text-small text-foreground/50">{formatTime(song1.duration)}</p>
                            </div>
                        </div>

                        <div className="flex w-full items-center justify-center">
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                            >
                                <RepeatOneIcon className="text-foreground/80" />
                            </Button>
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10 "
                                radius="full"
                                variant="light"
                                disabled={indexSong == 0 ? true : false}
                                onClick={handleBackSong}
                            >
                                <PreviousIcon fill={indexSong == 0 ? '#808080' : '#000'}
                                />
                            </Button>
                            <Button
                                isIconOnly
                                className="w-auto h-auto data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                                onClick={togglePlayingBoth}

                            >
                                {!song1.playing ? (
                                    <div className='w-[54px] h-[54px] '>
                                        <Image src={'/assets/icons/play-icon.png'} alt="play-icon" className="top-[4.5px] left-[4.5px]  w-[45px] h-[45px] object-cover object-center" />
                                    </div>

                                ) : (
                                    <PauseCircleIcon size={54} />
                                )}
                            </Button>
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                                onClick={handleNextSong}
                                disabled={indexSong >= (canciones.length - 1) ? true : false}
                            >
                                <NextIcon fill={indexSong >= (canciones.length - 1) ? '#808080' : '#000'} />
                            </Button>
                            <Button
                                isIconOnly
                                className="data-[hover]:bg-foreground/10"
                                radius="full"
                                variant="light"
                            >
                                <ShuffleIcon className="text-foreground/80" />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        )}
            <CardFooter className=''>

            </CardFooter>
        </Card>
    );
}

export default CardPlayer