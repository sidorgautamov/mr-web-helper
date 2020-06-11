import React, { useState } from 'react';
import { Grid, Typography, ButtonBase, Box, makeStyles } from '@material-ui/core';
import { useHttp } from '../hooks/http.hook';

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0rem',
        padding: '1rem'
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#fafafa',
        borderRadius: '4px',
        boxShadow: '#eceff1 0px 4px 4px'
    },
    textButton: {
        [theme.breakpoints.up('xs')]:
        {
            width: '10rem'
        },
        [theme.breakpoints.up('sm')]:
        {
            width: '12rem'
        },
        [theme.breakpoints.up('md')]:
        {
            width: '10rem'
        },
        [theme.breakpoints.up('lg')]:
        {
            width: '12rem'
        },
        [theme.breakpoints.up('xl')]:
        {
            width: '18rem'
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '2rem',
        border: '1px solid rgba(0, 0, 0, 0)',
        '&:hover': {
            transition: 'border 0.5s ease-in 0.25s',
            border: '1px solid rgba(33, 33, 33, 1)',
            '& $buttonUnderline': {
                transition: 'width 0.5s ease-in 0s',
                width: '100%'
            }
        }
    },
    buttonUnderline: {
        transition: 'width 0.5s ease-in 0s',
        width: '50%',
        height: '1px',
        position: 'absolute',
        bottom: '-1px',
        backgroundColor: theme.palette.text.secondary
    },
    inputForm: {
        fontFamily: '"Jost", sans-serif',
        fontWeight: '300',
        [theme.breakpoints.up('xs')]:
        {
            width: '10rem',
            fontSize: '1rem',
            height: '1rem'
        },
        [theme.breakpoints.up('sm')]:
        {
            width: '12rem',
            fontSize: '1.5rem',
            height: '1.5rem'
        },
        [theme.breakpoints.up('md')]:
        {
            width: '10rem',
            fontSize: '1.8rem',
            height: '1.8rem'
        },
        [theme.breakpoints.up('lg')]:
        {
            width: '12rem',
            fontSize: '2.2rem',
            height: '2.2rem'
        },
        [theme.breakpoints.up('xl')]:
        {
            width: '18rem',
            fontSize: '2.5rem',
            height: '2.5rem'
        },
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: '#fafafa',
        border: '0px',
        borderBottom: '2px solid #ff6f00',
        outline: 'none'
    }
}));

export default function CallbackFrom() {
    const classes = useStyle();
    const { request } = useHttp();
    const [form, setForm] = useState({ name: '', number: '' });
    
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const sendMessage = async () => {
        try {
            await request('https://mr-web-helper.glitch.me/api/callback', 'POST', { ...form });
        } catch (e) {}
    }

    return (
        <Grid container spacing={0} className={classes.container}>
            <Grid item xs={10} md={8} xl={6} className={classes.item}>
                <Typography variant="h3" color="textSecondary" align="center">
                    MrWebHelper - Telegram Bot <span role="img">🤖</span>
                </Typography>

                <Typography variant="body2" color="textSecondary" align="center">
                    Ваше имя
                </Typography>
                <input id="name" name="name" className={classes.inputForm} onChange={changeHandler} />

                <Typography variant="body2" color="textSecondary" align="center">
                    Ваш номер
                </Typography>
                <input id="number" name="number" className={classes.inputForm} onChange={changeHandler} />

                <ButtonBase className={classes.textButton} onClick={sendMessage}>
                    <Typography variant="button" color="textSecondary" align="center">
                        Отправить
                    </Typography>
                    <Box className={classes.buttonUnderline} />
                </ButtonBase>
            </Grid>
        </Grid>
    )
}
