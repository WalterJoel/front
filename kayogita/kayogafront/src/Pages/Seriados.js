import { useState, useEffect } from "react";
import axios from "axios";


import React from "react";
import { TextField, Checkbox, Radio, Select } from '@mui/material';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@mui/material';


function Seriados() {

    const [formSeriado, setFormSeriado] = useState([{
    values:{
        talla1:'',
        talla2:'',
        talla3:'',
        talla4:'',
    }}]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormSeriado({
          values: {
            ...formSeriado.values,
            [name]: value,
          },
        })
      }
    function handleSubmit(e){
        e.preventDefault()
        const values = JSON.stringify(formSeriado.values)
        alert(values);

        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data));

        fetch('https://yts.lt/api/v2/list_movies.json')
        .then(response => response.json())
        .then(data => console.log(data));
            
    }
    

    
    const { talla1,talla2,talla3,talla4 } = formSeriado.values;

    return (
        
        <div style={{padding:16, margin:'auto', maxWidth:600}}>
            <CssBaseline />
            <Typography align='center' component='h3' variant="h3" gutterBottom>
                Nuevo Lote
            </Typography>
            <form onSubmit={handleSubmit}>
            <Paper style ={{padding:20 }} >
                <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="email"
                            fullWidth
                            multiline
                            type="number"
                            label="Descripción"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            name="talla1"
                            value={talla1}
                            onChange={handleChange}
                            fullWidth
                            type="number"
                            label="Talla"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            name="talla2"
                            value={talla2}
                            onChange={handleChange}
                            fullWidth
                            type="number"
                            label="Talla"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            name="talla3"
                            value={talla3}
                            onChange={handleChange}
                            fullWidth
                            type="number"
                            label="Talla"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            name="talla4"
                            value={talla4}
                            onChange={handleChange}                        
                            fullWidth
                            type="number"
                            label="Talla"
                        />  
                    </Grid>
                    <Grid item style={{ marginTop: 16 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            </form>
      </div>
    )
  }

  export default Seriados;