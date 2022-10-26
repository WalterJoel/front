import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from 'react-router-dom';

import HomePage from './HomePage'
import React from "react";
import { TextField, Checkbox, Radio, Select } from '@mui/material';
import {
  Typography,
  Paper,
  Divider,
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

import {tallasDamaJson,tallasNinoJson,tallasVaronJson} from '../Elements/TallasGeneralJson';

const Seriados=()=> {
    const [validarStar,setValidarStar] = useState(false);
    let [loading, setLoading] = useState(false);
    let navigate = useNavigate();
    const [serie,setSerie]=useState('');
    const [talla,setTallas]=useState({});
    const [formSeriado, setFormSeriado] = useState({
    
        talla1:'0',
        talla2:'',
        talla3:'',
        talla4:'',
        talla5:'',
        metraje: '',
        color:'',
        descripcion:'...',
        serie:'',
        garibaldi:false,
        contrafuerte:false,
        etiquetas:false,
        estado: 'Cortado',
    });
    //Funcion para cambiar el valor del Select
    const handleChangeSelect = (e) => {
        const name = e.target.name;
        const value =e.target.value;
        setSerie(value);
        //Valido que serie se va insertar
        if(value==='nino'){
            setTallas(tallasNinoJson);  
        }
        else if(value==='dama'){
            setTallas(tallasDamaJson);
        }
        else{
            setTallas(tallasVaronJson);  
        }

        setFormSeriado((prev)=>{
            return {...prev, [name]:value};
        });
    };    
    function handleChangeValidarStar(e){
        const value=  e.target.checked;
        setValidarStar(value)
    }
    //Para los cambios en campos que tienen el valor en el .checked
    function handleChangeCheckBox(e){
        const name = e.target.name;
        const value = e.target.checked;
        setFormSeriado((prev)=>{
            return {...prev, [name]:value};
        });

    }
    //Para los cambios de campos normales
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target.value);
        setFormSeriado((prev)=>{
            return {...prev, [name]:value};
        });

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoading(!loading);
        const values = JSON.stringify(formSeriado)
        alert('Estas seguro de enviar la infornacion?');
       
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
        .then(function(response) {
            if(response.ok) {
                console.log(response.json());setLoading(false);navigate('/ListLotesPage')
            } else {
              setLoading(false)
              console.log('Respuesta de red OK pero respuesta HTTP no OK');
            }
          })
          .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
          });
        /*.then(response => {console.log(response.json());setLoading(false);navigate('/')})
        //Finamente tenemos la respuesta en formato objeto

        .catch(()=>{ console.log('Algo salio mal al enviar el formulario');navigate('/E')})*/

    }

    

    return (
        
        <div style={{padding:16, margin:'auto', maxWidth:800}}>
            <CssBaseline />
            <Typography align='center' component='h3' variant="h3" gutterBottom>
                Nuevo Lote
            </Typography>

            <form onSubmit={handleSubmit}>
            <Paper style ={{padding:20 }} >
                <Grid container alignItems="flex-start" justifyContent='center' spacing={2}>
                    <Grid item xs={3}>
                        <TextField
                            name="metraje"
                            value={formSeriado.metraje}
                            onChange={handleChange}
                            fullWidth
                            required
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
                            required
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


                    {/* {validarStar&&(
                        <Grid item xs={12}>
                            <FormControlLabel control={<Checkbox  checked={formSeriado.etiquetas} name="etiquetas" onChange={handleChangeCheckBox} />} label="Etiquetas" />
                        </Grid>
                    )} */}
                    <Divider style={{width:'100%'}} />
                    <Divider style={{width:'100%'}} />
            {/* Seleccionar la serie                */}
                    <Grid item  xs={6} >
                        <Typography variant='body1' sx={{padding:1,fontWeight:'bold'}}>
                            Selecciona la serie
                        </Typography>
                        <Select
                            name="serie"
                            required
                            value={serie}
                            onChange={handleChangeSelect}
                            >
                            <MenuItem key={1} value='nino'>NIÑO</MenuItem>
                            <MenuItem key={2} value='dama'>DAMA</MenuItem>
                            <MenuItem key={3} value='varon'>VARON</MenuItem>                                                        
                        </Select>
                    </Grid>
            {/* Seccion Agregar una talla mas */}
                    <Grid item xs={6}>
                        <Typography variant='body1' sx={{padding:1,fontWeight:'bold'}}>
                            Selecciona la serie
                        </Typography>
                        <FormControlLabel control={<Checkbox  checked={validarStar} onChange={handleChangeValidarStar} />} label="Agregar talla?" />
                    </Grid>
            {/* Seccion Seriado */}
                    <Divider style={{width:'100%',padding:5 }} />
                    <Divider style={{width:'100%' }} />
                    { validarStar&&(
                        <Grid item sx={{flexGrow:1}}>
                            <TextField  
                                name="talla1"
                                value={formSeriado.talla1}
                                onChange={handleChange}
                                fullWidth
                                required    
                                type="number"
                                label={talla.talla1}
                            />
                        </Grid>
                    )}  
                    <Grid item sx={{flexGrow:1}}>
                        <TextField
                            name="talla2"
                            required
                            value={formSeriado.talla2}
                            onChange={handleChange}
                            fullWidth
                            type="number"
                            label={talla.talla2}
                        />
                    </Grid>
                    <Grid item sx={{flexGrow:1}}>
                        <TextField
                            name="talla3"
                            value={formSeriado.talla3}
                            onChange={handleChange}
                            fullWidth
                            required
                            type="number"
                            label={talla.talla3}
                        />
                    </Grid>
                    <Grid item sx={{flexGrow:1}}>
                        <TextField
                            name="talla4"
                            value={formSeriado.talla4}
                            onChange={handleChange}                        
                            fullWidth
                            required
                            type="number"
                            label={talla.talla4}
                        />  
                    </Grid>

                    <Grid item sx={{flexGrow:1}}>
                        <TextField
                            name="talla5"
                            value={formSeriado.talla5}
                            onChange={handleChange}                        
                            fullWidth
                            required
                            type="number"
                            label={talla.talla5}
                        />  
                    </Grid>
                    <Grid item xs={7}  style={{marginTop: 16 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Guardar
                        </Button>
                        {/* Spinner                   */}
                    <Grid item xs={5}  style={{marginTop: 16 }}>
                        <HashLoader
                            color={'orange'}
                            loading={loading}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </Grid>
                    </Grid>
                </Grid>
            </Paper>
            </form>
      </div>
    )
  }

  export default Seriados;