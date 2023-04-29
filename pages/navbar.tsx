import { Box, Button, Grid, Hidden, Stack, Typography } from '@mui/material';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../utils/theme';
import SearchButton from '../components/SearchButton';
import SliderSection from '../components/SliderSection';
const NavBar = () => {
    const tablet = useMediaQuery(theme.breakpoints.only('sm'));
    const mobile = useMediaQuery(theme.breakpoints.only('xs'));
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    const navItems = [
        {
            name: "Menu"
        },
        {
            name: "Contact"
        },
        {
            name: "About"
        },

    ]

    return (
        <>
            <Stack justifyContent={'center'} alignItems={'center'}>
                <Stack justifyContent={'center'} alignItems={'center'} sx={{ position: "fixed", top: 0, left: 0, width: '100%', zIndex: 10, height: { xs: 20, sm: 70, md: 70, lg: 100 } }}>
                    {
                        mobile &&
                        <img src={"/image/mobile-bg.svg"} height={'auto'} width={'100%'} />
                    }
                    {
                        tablet &&
                        <img src={"/image/tablet-bg.svg"} height={'auto'} width={'100%'} />
                    }
                    {
                        desktop &&
                        <img src={"/image/appbar-bg.svg"} height={'auto'} width={'100%'} />
                    }
                </Stack>


                <Stack sx={{ height: { xs: 40, sm: 70, md: 70, lg: 110 }, width: "90%", pt: { xs: 1, sm: 1, md: 0, lg: 2 }, zIndex: 10, display: "flex", justifyContent: "space-between", position: 'fixed', top: 0 }}>

                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", alignItems: 'center', gap: 2 }}>
                            <Hidden smUp>
                                <img src={"/icons/drawer.svg"} height={15} />
                            </Hidden>
                            <img src={"/image/logo.svg"} height={50} />
                            <Hidden>
                                <SearchButton />
                            </Hidden>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "flex-end" }}>
                            <Hidden smDown>
                                {
                                    navItems.map((e) => (
                                        <Typography color={'#FFFFFF'} sx={{ textTransform: "uppercase", mr: 2, cursor: 'pointer' }}>{e?.name}</Typography>
                                    ))
                                }
                            </Hidden>

                            <Box display={'flex'} gap={2}>
                                <Button sx={{ border: "1px solid #FFFFFF", borderRadius: "12px", color: '#FFFFFF' }}>OUR STORE</Button>
                                <Hidden smDown>
                                    <Button variant="contained" sx={{ bgcolor: "#D90280", borderRadius: "12px" }}>BOOK TABLE</Button>
                                </Hidden>
                            </Box>
                        </Box>
                    </Box>


                </Stack>

                <Box sx={{ height: "100vh" }}>
                    <Box
                        sx={{
                            display: "flex",
                            // flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            mt: { md: 10, sm: 10, xs: 9 },
                            height: { md: "300px", sm: "300px", xs: "350px" },
                            width: "100%",
                        }}
                    >
                        <Hidden smDown>
                            <img
                                src={"/image/home-bgg.png"}
                                alt={"Image"}
                                style={{ width: "95%", height: "auto" }}
                            />
                        </Hidden>
                        <Hidden smUp>
                            <img
                                src={"/image/home-bg-2.svg"}
                                alt={"Image"}
                                style={{ width: "95%", height: "auto" }}
                            />
                        </Hidden>

                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                // zIndex: 100,
                                width: "100%",
                                height: "auto",
                                mt: { xs: 2, sm: 2, md: 3, lg: 5 },
                            }}
                        >
                            <Box
                                sx={{
                                    ml: { md: 10 },
                                    gap: 2,
                                    color: "#ffffff !important",
                                    fontWeight: 400,
                                    fontSize: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: { sm: "center", xs: "center", md: "flex-start", lg: "flex-start" }
                                }}
                            >
                                <Hidden smDown>
                                    <img src={"/icons/call.svg"} alt={"Image"} />
                                </Hidden>
                                <Typography sx={{ ml: { md: 1 } }}>{"+91-9556266574,"}</Typography>
                                <Typography sx={{ ml: 1 }}>{"+91-9556266575"}</Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    mt: { md: 1.5, sm: 2, xs: 2 },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "Space Grotesk",
                                        fontWeight: 300,
                                        fontSize: "20px",
                                        textShadow: "0px 0px 5px #D90280",
                                        lineHeight: "116%",
                                        wordBreak: "break-word",
                                        p: 1,
                                        letterSpacing: "-0.02em",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {"WELCOME TO"}
                                    <span
                                        style={{
                                            fontFamily: "Space Grotesk",
                                            fontStyle: "normal",
                                            fontWeight: 700,
                                            fontSize: "20px",
                                            lineHeight: "116%",
                                            letterSpacing: "-0.02em",
                                            color: "#ED1F98",
                                            textShadow: "0px 0px 5px #D90280",
                                        }}
                                    >
                                        {" QREW"}
                                    </span>
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        textAlign: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            background:
                                                "linear-gradient(180deg, #FAFFF3 16.07%, #E8C473 32.59%, #D9B568 42.69%, #C49013 45.15%, #E6D76D 54.35%, #FFFFFF 65.84%, #DBB554 77.14%);",
                                            fontFamily: "Montserrat",
                                            fontWeight: 800,
                                            fontSize: { lg: "110px", md: "90px", sm: "72px", xs: "50px" },
                                            textShadow: "0px 0px 23px rgba(228, 193, 114, 0.23)",
                                            "-webkit-background-clip": "text",
                                            "-webkit-text-fill-color": "transparent",
                                            backgroundClip: "text",
                                            textFillColor: "transparent",
                                            lineHeight: "116%",
                                            wordBreak: "break-word",
                                        }}
                                    >
                                        {"GROW YOUNG AGAIN"}
                                    </Typography>
                                    <Button
                                        sx={{
                                            background:
                                                "linear-gradient(180deg, #F31898 0%, #C80075 100%)",
                                            color: "white",
                                            borderRadius: "15px",
                                            mt: 1,
                                            width: { lg: "279px", md: "279px", sm: "279px", xs: "90%" },
                                        }}
                                    >
                                        BOOK YOUR TABLE*
                                    </Button>
                                    <Typography
                                        variant={"caption"}
                                        sx={{
                                            color: "#798AED",
                                            mt: 1,
                                            wordBreak: "break-all",
                                            // ml: { md: 0, sm: 0, xs: 2 },
                                            // mr: { md: 0, sm: 0, xs: 2 },
                                        }}
                                    >
                                        {"*Table booking is only applicable for 21 years old or elder"}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box>
                                <SliderSection />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </>
    );
}

export default NavBar