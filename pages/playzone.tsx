import { Box, Card, CardActions, CardContent, CardMedia, Container, Grid, Hidden, ImageList, ImageListItem, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../utils/theme';
const PlayZone = () => {
    const cardContents = [
        {
            name: "PC/ CONSOLE/ ESPORTS",
            title: "VR RACING/DRIVING SIMULATOR",
            img: '/image/Rectangle 1057.svg'
        },
        {
            name: "PC/ CONSOLE/ ESPORTS",
            title: "VR RACING/DRIVING SIMULATOR",
            img: '/image/Rectangle 1057.svg'
        },
        // {
        //     name: "PC/ CONSOLE/ ESPORTS",
        //     title: "VR RACING/DRIVING SIMULATOR",
        //     img: '/image/Rectangle 1057.svg'
        // },
        // {
        //     name: "PC/ CONSOLE/ ESPORTS",
        //     title: "VR RACING/DRIVING SIMULATOR",
        //     img: '/image/Rectangle 1057.svg'
        // },
        // {
        //     name: "PC/ CONSOLE/ ESPORTS",
        //     title: "VR RACING/DRIVING SIMULATOR",
        //     img: '/image/Rectangle 1057.svg'
        // },
        // {
        //     name: "PC/ CONSOLE/ ESPORTS",
        //     title: "VR RACING/DRIVING SIMULATOR",
        //     img: '/image/Rectangle 1057.svg'
        // },
        {
            name: "PC/ CONSOLE/ ESPORTS",
            title: "VR RACING/DRIVING SIMULATOR",
            img: '/image/Rectangle 1057.svg'
        },
        {
            name: "PC/ CONSOLE/ ESPORTS",
            title: "VR RACING/DRIVING SIMULATOR",
            img: '/image/Rectangle 1057.svg'
        },
    ]
    const tablet = useMediaQuery(theme.breakpoints.only('sm'));
    const mobile = useMediaQuery(theme.breakpoints.only('xs'));
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <Box
                sx={{
                    background: mobile ? `url('/image/playzone-mob-bg.svg')` : tablet ? `url('/image/playzone-tab-bg.svg')` : `url('/image/playzone-bg.svg')`,
                    backgroundSize: '100vw auto',
                    backgroundPosition: 'start',
                    pt: 1,
                    borderRadius: 5,
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box mt={2}>
                    <Typography variant='h4' sx={{ fontWeight: 700, textAlign: "center", color: "#FFFFFF" }}>PLAY  <span style={{ color: "#ED1F98" }}>ZONE</span> </Typography>
                </Box>
                <Box mt={2}>
                    <Typography variant={'body2'} sx={{ color: '#fff', textAlign: 'center' }}>
                        {'Get bombarded with our super vast game type collection'}
                    </Typography>
                </Box>


                <Box
                    sx={{ width: '100%', overflowX: 'auto', scrollBehavior: 'smooth', mt: 6 }}>

                    <Stack direction={'row'}
                           sx={{ width: { xs: '800px', md: '100%' }, }} spacing={2}>

                        <Grid container spacing={2} sx={{ px: 2.5, }}>

                            {cardContents.map((card) => {
                                return (
                                    <Grid item xs={3}>
                                        <Card
                                            sx={{
                                                height: { xs: 250, md: 350 },
                                                width: "auto",
                                                backgroundImage: `url('${card.img}')`,
                                                backgroundSize: '60vh auto',
                                                objectFit: 'cover',
                                                backgroundPosition: 'center',
                                                borderRadius: 5,
                                            }}
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
                                                        {card?.name}
                                                    </Typography>

                                                    <Typography variant='subtitle1' color={'#FFFFFF'}>
                                                        {card?.title}
                                                    </Typography>
                                                </Stack>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default PlayZone