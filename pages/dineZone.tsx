import { Box, Button, Card, CardActions, Container, Grid, Hidden, Stack, Typography } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../utils/theme';

const DineZone = () => {
    const cardContents = [
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
                    height: { xs: '100%', sm: '500px', md: '500px', lg: '60vh' },
                    mt: 10
                }}
            >
                <Container maxWidth={'lg'}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={5}>
                            <Stack direction={'row'} sx={{
                                width: { lg: '60%', md: '60%', sm: '60%', xs: '100%' },
                                // pl: 4

                            }}>
                                <Box sx={{ width: { lg: '100%', md: '60%', sm: '100%', xs: '50%' } }}>
                                    <img
                                        src={"/image/dinezonelogo.svg"}
                                        alt={"Image"}
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </Box>
                                <Hidden smUp>
                                    <Button variant="contained" size='small' sx={{ bgcolor: "#D90280", borderRadius: "12px", width: { xs: '60%', sm: '75%', md: '75%', lg: '75%' }, mt: { xs: 1, sm: 2, md: 3, lg: 5 }, height: '30px', }}>VIEW MENU</Button>
                                </Hidden>

                            </Stack>
                            <Typography variant='subtitle1' sx={{ mt: 3, color: "#ffffff" }}>
                                Lorem ipsum dolor sit amet consectetur. At ultrices neque nisl vitae tristique tincidunt sit arcu. Proin nunc sed sem nibh mattis urna fames.
                            </Typography>
                            <Hidden smDown>
                                <Button variant="contained" sx={{ bgcolor: "#D90280", borderRadius: "12px", width: { xs: '50%', sm: '75%', md: '75%', lg: '75%' }, mt: { xs: 0, sm: 2, md: 3, lg: 5 } }}>BROWSE OUR MENU</Button>
                            </Hidden>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Box
                                sx={{ width: '100%', overflowX: 'auto', scrollBehavior: 'smooth', }}>

                                <Stack direction={'row'}
                                       sx={{ width: { xs: '700px', md: '800px', lg: "100%" } }} spacing={2}>

                                    <Grid container spacing={2} sx={{ width: "100%", p: 2 }} >

                                        {cardContents.map((card) => {
                                            return (
                                                <Grid item xs={4} sm={4}>
                                                    <Card
                                                        sx={{
                                                            height: { xs: 250, md: 300 },
                                                            width: "100%",
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
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>
    )
}

export default DineZone