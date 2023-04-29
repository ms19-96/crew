import { Box, Card, CardActions, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Slider from "react-slick";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../utils/theme';

const SliderSection = () => {
    const [imageIndex, setImageIndex] = useState(1);

    const NextArrow = ({ onClick }) => {
        return (
            <Box sx={{
                "backgroundColor": "#fff",
                "position": "absolute",
                "cursor": "pointer",
                "zIndex": "10", "right": "4%",
                "top": "50%", display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, p: 0.5
            }} onClick={onClick}>
                <ArrowForwardIcon />
            </Box>
        );
    };

    // @ts-ignore
    const PrevArrow = ({ onClick }) => {
        return (
            <Box sx={{
                "backgroundColor": "#fff",
                "position": "absolute",
                "cursor": "pointer",
                "zIndex": "10", "left": "4%",
                "top": "50%", display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, p: 0.5
            }} onClick={onClick}>
                <ArrowBackIcon />
            </Box>
        );
    };


    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        centerMode: true,
        centerPadding: 0,
        initialSlide: 2,
        nextArrow: <NextArrow onClick={undefined} />,
        prevArrow: <PrevArrow onClick={undefined} />,
        beforeChange: (current: any, next: any) => setImageIndex(next),
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const cardContents = [
        {
            name: "PC/ CONSOLE/ ESPORTS",
            title: "VR RACING/DRIVING SIMULATOR",
            img: '/image/nav-corousol-img.svg'
        },
        {
            name: "PC/ CONSOLE/ ESPORTS",
            title: "VR RACING/DRIVING SIMULATOR",
            img: '/image/nav-corousol-img.svg'
        },
        {
            name: "PC/ CONSOLE/ ESPORTS",
            title: "VR RACING/DRIVING SIMULATOR",
            img: '/image/nav-corousol-img.svg'
        },
        {
            name: "PC/ CONSOLE/ ESPORTS",
            title: "VR RACING/DRIVING SIMULATOR",
            img: '/image/nav-corousol-img.svg'
        },
        {
            name: "PC/ CONSOLE/ ESPORTS",
            title: "VR RACING/DRIVING SIMULATOR",
            img: '/image/nav-corousol-img.svg'
        },
        {
            name: "PC/ CONSOLE/ ESPORTS",
            title: "VR RACING/DRIVING SIMULATOR",
            img: '/image/nav-corousol-img.svg'
        },
    ]

    const tablet = useMediaQuery(theme.breakpoints.only('sm'));
    const mobile = useMediaQuery(theme.breakpoints.only('xs'));
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <Box mt={{ md: 3, sm: 2, xs: 0 }} sx={{ p: { lg: 2, md: 2, sm: 2, xs: 0 } }}>
                <Slider {...settings} >
                    {cardContents.map((e, idx) => (
                        <Card
                            key={idx + 1}
                            sx={idx === imageIndex ? {
                                "transform": mobile ? "scale(0.7)" : tablet ? "scale(0.9)" : "scale(0.8)",
                                "transition": "transform 300ms",
                                borderRadius: 2,
                                height: { xs: 200, sm: 230, md: 300, lg: 250 },
                                width: "auto",
                                backgroundImage: `url('${e.img}')`,
                                backgroundSize: '100vh auto',
                                objectFit: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: "no-repeat",
                                // p: 2
                            } :
                                {
                                    "transform": mobile ? "scale(0.7)" : tablet ? "scale(0.6)" : "scale(0.6)",
                                    "transition": "transform 300ms",
                                    borderRadius: 2,
                                    height: { xs: 200, sm: 230, md: 300, lg: 250 },
                                    width: "auto",
                                    backgroundImage: `url('${e.img}')`,
                                    backgroundSize: '100vh auto',
                                    objectFit: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: "no-repeat",
                                    p: 2
                                }
                            }
                        >
                            <CardActions
                                sx={{
                                    height: '100%',
                                    flexDirection: 'row',
                                    width: '100%',
                                    alignItems: 'end',
                                }}
                            >
                                <Stack>
                                    <Typography
                                        variant='caption'
                                        color={'#FFE070'}
                                        sx={{ textAlign: 'start', }}>
                                        {e?.name}
                                    </Typography>

                                    <Typography variant='subtitle1' color={'#FFFFFF'}>
                                        {e?.title}
                                    </Typography>
                                </Stack>
                            </CardActions>
                        </Card>
                    ))}
                </Slider>
            </Box >
        </>
    )
}

export default SliderSection