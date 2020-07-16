import React, { useState } from 'react';
import { Container, Card, Grid, Typography, TextField, Button } from '@material-ui/core';
import styles from "./styles";
import { MovieIcon } from "../icons";

function Home() {

    const [searchText, setSearchText] = useState("");
    const classes = styles();

    const handleSeachTextChange = (ev) => {
        setSearchText(ev.target.value);
        console.log()
    }

    const handleCleanTextClick = (ev) => {
        console.log(10);
    }

    const handleSeachTextClick = (ev) => {
        console.log(11);
    }

    return (
        <div>
            <Container className={classes.container}>
                <Card className={classes.cardContainer}>
                    <Grid container className={classes.titleGridContainer}>
                        <Grid>
                            <Typography className={classes.title}>Bienvenido</Typography>
                        </Grid>
                        <Grid>
                            <MovieIcon className={classes.movieIcon}></MovieIcon>
                        </Grid>
                    </Grid>
                    <TextField
                        value={searchText}
                        placeholder="Buscar..."
                        onChange={handleSeachTextChange}
                        className={classes.textFieldSearch} />
                    <Grid className={classes.buttonsContainer}>
                        <Button
                            variant="contained"
                            onClick={handleCleanTextClick}>
                            Limpiar
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleSeachTextClick}
                            className={classes.searchButton}>
                            Buscar
                        </Button>
                    </Grid>
                </Card>
            </Container>
        </div>
    )
}

export default Home;