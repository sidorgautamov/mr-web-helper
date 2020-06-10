import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, ButtonBase } from '@material-ui/core';
import { useHttp } from './../hooks/http.hook';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '4px',
        boxShadow: '#f5f5f5 0px 4px 4px'
    },
    input: {
        transition: 'font-size 1s ease-out 0s',
        fontFamily: '"Jost", sans-serif',
        fontWeight: '300',
        '@media screen and (min-width:20rem)': {
            fontSize: '1rem'
        },
        '@media screen and (min-width:35rem)': {
            fontSize: '1.5rem'
        },
        '@media screen and (min-width:60rem)': {
            fontSize: '1.8rem'
        },
        '@media screen and (min-width:80rem)': {
            fontSize: '2.2rem'
        },
        '@media screen and (min-width:120rem)': {
            fontSize: '2.4rem'
        },
        width: '18rem',
        height: '2rem',
        backgroundColor: '#fafafa',
        textAlign: 'center',
        border: '0px solid #000',
        borderBottom: '4px solid #ff6f00',
        outline: 'none'
    },
    textButton: {
        width: '18rem',
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
        backgroundColor: 'rgba(33, 33, 33, 1)'
    }
}));

export default function CallbackForm() {
    const classes = useStyles();
    const { request } = useHttp();
    const [form, setForm] = useState({ name: '', number: '' });

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const sendData = async () => {
        try {
            const data = await request('api/callback', 'POST', { ...form });
            console.log(data);
        } catch (e) {

        }
    };

    return (
        <Grid container alignContent="center" justify="center" className={classes.container}>

            <Grid item xs={8} md={6}>
                <Typography variant="h3" color="textPrimary" align="center">
                    <strong>Консультация?<br /> С удовольствием!</strong>
                </Typography>
            </Grid>

            <Grid item xs={8} md={6}>
                <Typography variant="body2" color="textSecondary" align="center">
                    <strong>Ваше имя</strong>
                </Typography>
                <input id="name" color="secondary" label="Ваше имя" className={classes.input}/>
            </Grid>


            <Grid item xs={8} md={6}>
                <Typography variant="body2" color="textSecondary" align="center">
                    <strong>Ваш номер</strong>
                </Typography>
                <input id="name" color="secondary" label="Ваше имя" className={classes.input} />
            </Grid>

            <ButtonBase className={classes.textButton} onClick={() => { }}>
                <Typography variant="button" color="textPrimary" align="center">
                    Отправить
                </Typography>
                <Box className={classes.buttonUnderline} />
            </ButtonBase>

        </Grid>
    );
}