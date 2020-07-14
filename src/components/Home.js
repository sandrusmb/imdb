import React, { useState } from 'react';
import { Container, Card, Grid, Typography, TextField, Button } from '@material-ui/core';

function Home() {

    const [searchText, setSearchText] = useState("");

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
            <Container>
                <Card>
                    <Grid container>
                        <Grid>
                            <Typography>Bienvenido</Typography>
                        </Grid>
                        <Grid><label>Icono</label></Grid>
                    </Grid>
                    <TextField
                        value={searchText}
                        placeholder="Buscar..."
                        onChange={handleSeachTextChange} />
                    <Grid>
                        <Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
                        <Button variant="contained" color="primary" size="large" onClick={handleSeachTextClick}>Buscar</Button>
                    </Grid>
                </Card>
            </Container>
        </div>
    )
}

export default Home;