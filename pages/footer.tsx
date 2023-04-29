import { Box, Divider, Grid, Hidden, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    const footerItems = [
        {
            name: "About us"
        },
        {
            name: "Careers"
        },
        {
            name: "For partners"
        },
        {
            name: "Teams"
        },
        {
            name: "Privacy policy"
        },
        {
            name: "Unsubscribe"
        },
        {
            name: "Blogs"
        },
        {
            name: "Spices"
        },
        {
            name: "Sitemap"
        },
        {
            name: "Exports"
        },
        {
            name: "Basic Spices"
        },
        {
            name: "Whole spices"
        },
        {
            name: "Ready-Mix Spices"
        },
        {
            name: "Pasta & Vernicilli"
        },

    ]

    const socialLinks = [
        {
            name: 'youtube',
            img: '/icons/youtube.svg'
        },
        {
            name: 'instagram',
            img: '/icons/instagram.svg'
        },
        {
            name: 'linkdin',
            img: '/icons/Group 36.svg'
        },
        {
            name: 'youtube',
            img: '/icons/facebook.svg'
        },
        {
            name: 'youtube',
            img: '/icons/twitter.svg'
        },

    ]
    return (

        <Box
            sx={{
                background: "linear-gradient(180deg, rgba(11, 13, 32, 0) 0%, #212553 100%);",
                padding: { xs: 3, sm: 3, md: 4, lg: 5 },
                textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' },
                height: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
            }}
        >
            <Grid container spacing={2} sx={{ pt: { xs: 3, sm: 3, md: 10, lg: 10 } }}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Typography variant='h6' color={"#ffffff"} >Address</Typography>

                    <Typography variant='caption' sx={{ mt: 2, fontWeight: 400, color: "#ffffff", opacity: 0.6 }}>
                        Unit - 8 , DAV-OUAT Guest House <br></br>Road,<br></br>
                        Gopabandhu Nagar,<br></br>
                        Adjacent to DAV Unit-8,<br></br>
                        Bhubaneswar - 751008
                    </Typography>


                    <Hidden smDown>
                        <Typography variant='h6' color={"#ffffff"} sx={{ mt: 3 }} >Contact us:</Typography>

                        <Typography variant='caption' sx={{ mt: 2, fontWeight: 400, color: "#ffffff", opacity: 0.6 }}>
                            (91) 9556266575<br></br>

                            inquiries@gmail.com
                        </Typography>

                    </Hidden>


                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Typography color={"#ffffff"}>Comapny</Typography>
                    <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2, fontWeight: 400, color: "#ffffff" }}>
                        {
                            footerItems.map((e, i) => i < 6 && (
                                <Typography variant='caption' sx={{ opacity: 0.6 }}>{e?.name}</Typography>
                            ))
                        }
                    </Box>

                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Typography color={"#ffffff"}>Explore</Typography>
                    <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 3, fontWeight: 400, color: "#ffffff" }}>
                        {
                            footerItems.map((e, i) => i > 5 && i < 10 && (
                                <Typography variant='caption' sx={{ opacity: 0.6 }}>{e?.name}</Typography>
                            ))
                        }
                    </Box>

                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                    <Typography color={"#ffffff"}>Quick links</Typography>
                    <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 3, fontWeight: 400, color: "#ffffff", width: '100%' }}>
                        {
                            footerItems.map((e, i) => i > 9 && (
                                <Typography variant='caption' sx={{ opacity: 0.6 }}>{e?.name}</Typography>
                            ))
                        }
                    </Box>

                    <Hidden smUp>
                        <Typography variant='h6' color={"#ffffff"} sx={{ mt: 3 }} >Contact us:</Typography>

                        <Typography variant='caption' sx={{ mt: 2, fontWeight: 400, color: "#ffffff", opacity: 0.6 }}>
                            (91) 9556266575<br></br>

                            inquiries@gmail.com
                        </Typography>

                    </Hidden>

                </Grid>

            </Grid>

            <Divider sx={{ bgcolor: "#FFFFFF", height: "2px", opacity: 0.2, mt: 3 }} />

            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={4} md={4} lg={4} sx={{ display: "flex", alignItems: 'center', justifyContent: { xs: 'center', sm: 'center', md: 'center', lg: 'left' } }}>
                    <Hidden smDown>
                        <img src={"/image/logo.svg"} height={80} width={80} />
                    </Hidden>
                </Grid>

                <Grid xs={12} sm={4} md={4} lg={4}
                    sx={{ color: "#ffffff", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center", opacity: 0.6, whiteSpace: "nowrap" }}>
                    <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "center", gap: 5, height: "100%" }}>
                        <Typography variant='caption'>Terms</Typography>
                        <Typography variant='caption'>Privacy</Typography>
                        <Typography variant='caption'>Cookies</Typography>
                    </Box>
                    <Typography variant='caption' sx={{
                        mt: { xs: 3, sm: 3, md: 4, lg: 2 },
                    }}>© 2022 All Rights Reserved. Designed by Smartters Studio</Typography>

                </Grid>

                <Grid xs={12} sm={4} md={4} lg={4}
                    sx={{ display: "flex", gap: 3, height: "100%", width: '100%', justifyContent: "center" }}>
                    {
                        socialLinks.map((e, i) => (
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                width={'2rem'}
                                height={'2rem'}
                                borderRadius={'50%'}
                                border={'2px solid #FFFFFF'}
                                mt={4}
                            >

                                <img src={e?.img} />

                            </Box>
                        ))
                    }
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Hidden smUp>
                        <img src={"/image/logo.svg"} height={100} width={100} />
                    </Hidden>
                </Grid>

            </Grid>

        </Box >
    )
}

export default Footer