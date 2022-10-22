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
  Divider,
  FormControlLabel,
} from '@mui/material';


const Seriados=()=> {

    const [formSeriado, setFormSeriado] = useState({
    
        talla1:'',
        talla2:'',
        talla3:'',
        talla4:'',
        metraje: '',
        color:'',
        descripcion:'',
        garibaldi:false,
        contrafuerte:false,
        etiquetas:false,
        estado: 'Cortado',
    });

    function handleChangeCheckBox(e){
        const name = e.target.name;
        const value = e.target.checked;
        setFormSeriado((prev)=>{
            return {...prev, [name]:value};
        });

    }
    function handleChange(e) {

        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.value);
        setFormSeriado((prev)=>{
            return {...prev, [name]:value};
        });

      }
    function handleSubmit(e){
        e.preventDefault()
        const values = JSON.stringify(formSeriado)
        alert(values);
       
        //For Production
        fetch('https://backendkayoga-production.up.railway.app/postSeriados',{
        //For Develop
        //fetch('http://localhost:4000/postSeriados',{
            headers: {
                'Content-Type': 'application/json'
              },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify(formSeriado),
        })
        .then(response => response.json())
        .then(data => console.log(data));
            
    }
    

    

    return (
        
        <div style={{padding:16, margin:'auto', maxWidth:600}}>
            <CssBaseline />
            <Typography align='center' component='h3' variant="h3" gutterBottom>
                Nuevo Lote
            </Typography>
            <form onSubmit={handleSubmit}>
            <Paper style ={{padding:20 }} >
                <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={3}>
                        <TextField
                            name="metraje"
                            value={formSeriado.metraje}
                            onChange={handleChange}
                            fullWidth
                            type="number"
                            label="Metraje"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            name="color"
                            value={formSeriado.color}
                            onChange={handleChange}
                            fullWidth
                            type="string"
                            label="Color"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            name="descripcion"
                            value={formSeriado.descripcion}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            type="string"
                            label="Descripcion"
                        />
                    </Grid>
                    {/* Seccion Checkbox  */}
                    <Grid item xs={6}>
                        <FormControlLabel control={<Checkbox checked={formSeriado.garibaldi} name="garibaldi" onChange={handleChangeCheckBox} />} label="Garibaldi" />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel control={<Checkbox checked={formSeriado.contrafuerte} name="contrafuerte" onChange={handleChangeCheckBox} />} label="Contrafuerte" />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox  checked={formSeriado.etiquetas} name="etiquetas" onChange={handleChangeCheckBox} />} label="Etiquetas" />
                    </Grid>
                    {/* Seccion Seriado */}
                    
                    <Grid item xs={3}>
                        <TextField
                            name="talla1"
                            value={formSeriado.talla1}
                            onChange={handleChange}
                            fullWidth
                            type="number"
                            label="Talla 1"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            name="talla2"
                            value={formSeriado.talla2}
                            onChange={handleChange}
                            fullWidth
                            type="number"
                            label="Talla 2"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            name="talla3"
                            value={formSeriado.talla3}
                            onChange={handleChange}
                            fullWidth
                            type="number"
                            label='Talla 3'
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            name="talla4"
                            value={formSeriado.talla4}
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