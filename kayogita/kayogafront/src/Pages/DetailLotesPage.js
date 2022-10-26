import React,{useEffect,useState} from "react";
import {useParams } from 'react-router-dom';
import {tallasDamaJson,tallasNinoJson,tallasVaronJson} from '../Elements/TallasGeneralJson';

import TitleComponent from "../Components/TitleComponent";
import {FormControl,InputLabel,Divider,MenuItem,TextField,List,ListItem,ListItemText,Card,CardContent,Typography,Grid, Paper, Select} from '@mui/material';
import SelectDisplayComponent from "../Components/SelectDisplayComponent";
import InputSeriadoComponent from "../Components/InputSeriadoComponent";

const DetailLotesPage =() => {
    let {idLote}  = useParams();
    console.log('IDLOTE',idLote);
    const [detalleLote,SetDetalleLote] = useState([]);
    const [aparadores,SetAparadores] = useState([]);
    const [a,SetA]=useState('');
    const [talla,setTallas]=useState({});

    
    //Funcion para cambiar el valor del Select
    const handleChangeSelect = (event) => {
        const aparador =event.target.value;
        SetA(aparador);
    };
    function handleSubmit(e){
        e.preventDefault()

    }
    useEffect(() =>{
        //Obtengo informacion sobre el lote
        const url='https://backendkayoga-production.up.railway.app/getLoteById/'+idLote;
        //const url='http://localhost:4000/getLoteById/'+idLote;
        fetch(url,{
            headers: {
                'Content-Type': 'application/json'
              },
        })
        .then(function(response){
            if(response.ok){
                const promesa = response.json();
                console.log('ok',promesa);
                //Extraigo el resultado de la promesa
                promesa.then(function(loteResult){
                    if(loteResult[0].serie==='nino'){
                        setTallas(tallasNinoJson);  
                    }
                    else if(loteResult[0].serie==='dama'){
                        setTallas(tallasDamaJson);
                    }
                    else{
                        setTallas(tallasVaronJson);  
                    }
                    SetDetalleLote(loteResult[0]);
                })

            }
            
        })
        //.then(response => response.json())

        .catch(()=> console.log('Algo salio mal al requerir lotes cortados'));

        //Obtengo informacion sobre los aparadores
        
        fetch('https://backendkayoga-production.up.railway.app/getAllAparadores',{
        //fetch('http://localhost:4000/getAllAparadores',{
            headers: {
                'Content-Type': 'application/json'
              },
        })
        //Si comento esto, nunca llegara la promesa y por ende no puedo obtener el array que retorna la promise
        .then(response => response.json())
        //Aqui daria error si no llega la promesa
        .then((aparador)=>SetAparadores(aparador))
        .catch((error)=> console.log('Algo salio mal al requerir aparadores'+ error.message));


    },[]);
    return(
        <div style={{padding:16, margin:'auto', maxWidth:1000}}>
            <Grid  container flexWrap='wrap' justifyContent="center">
                <Grid item sx={{flexGrow:1}}>
                    <Paper >
                        <Typography variant='body1' sx={{padding:1,fontWeight:'bold'}}>
                            INFORMACIÓN DE LOTE
                        </Typography>

                        <List >
                            <ListItem>
                                <ListItemText primary="Lote" secondary={'# '+detalleLote.idlote} />
                                <ListItemText primary="Metraje" secondary={detalleLote.metraje} />
                            </ListItem>
                            <Divider/>

                            <ListItem>
                                <ListItemText primary="Color" secondary={detalleLote.color} />
                                <ListItemText primary="Fecha de Corte" secondary={detalleLote.fecha_creacion} />
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText primary="Garibaldi" secondary={detalleLote.garibaldi} />
                                <ListItemText primary="Contrafuerte" secondary={detalleLote.contrafuerte} />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                {/* Lista de Seriado Inicial */}
                <Grid item  sx={{flexGrow:1 ,m:1} }>
                    <Paper>
                        <Typography variant='body1' sx={{padding:1,fontWeight:'bold'}}>
                            SERIADO DE CORTE INICIAL
                        </Typography>
                        <List>
                            <ListItem>
                                {/* Muestro la talla 1 que es o 34 star o 38 adulto solo si tiene datos */}
                                {detalleLote.talla1>0&&(
                                    <ListItemText primary={talla.talla1} secondary={detalleLote.talla1} />
                                )}
                                <ListItemText primary={talla.talla2} secondary={detalleLote.talla2} />
                                <ListItemText primary={talla.talla3} secondary={detalleLote.talla3} />
                                <ListItemText primary={talla.talla4} secondary={detalleLote.talla4} />
                                <ListItemText primary={talla.talla5} secondary={detalleLote.talla5} />                                                                
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
                <form onSubmit={handleSubmit}>
            <Grid  container flexWrap='wrap' justifyContent="center">
                {/* Asignar Aparador */}
                <Grid item  sx={{flexGrow:1 ,m:1}} >
                    <Paper>
                        <Typography variant='body1' sx={{padding:1,fontWeight:'bold'}}>
                            ASIGNA UN APARADOR 
                        </Typography>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            value={a}
                            onChange={handleChangeSelect}
                            >
                            {aparadores.map((apa,i) => (
                                <MenuItem
                                key={i}
                                value={apa.idaparador}
                                >
                                {apa.nombre}
                                </MenuItem>
                            ))}
                        </Select>
                    </Paper>
                </Grid>
                {/* Distribucion de Seriado */}
                <Grid item  sx={{flexGrow:2 ,m:1}} >
                    <Paper>
                        <Typography variant='body1' sx={{padding:1,fontWeight:'bold'}}>
                            ASIGNAR MODELO  
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Lote" secondary={detalleLote.talla1} />
                                <ListItemText primary="Metraje" secondary={detalleLote.talla2} />
                                <ListItemText primary="Metraje" secondary={detalleLote.talla21} />
                                <ListItemText primary="Metraje" secondary={detalleLote.talla3} />
                                <ListItemText primary="Metraje" secondary={detalleLote.talla31} />    
                                <ListItemText primary="Metraje" secondary={detalleLote.talla4} />                                                                
                                <ListItemText primary="Metraje" secondary={detalleLote.talla41} />
                                <ListItemText primary="Metraje" secondary={detalleLote.talla5} />
                                <ListItemText primary="Metraje" secondary={detalleLote.talla51} />
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
            </form>
            <Paper>

            </Paper>
        </div>

    )

}
export default DetailLotesPage;