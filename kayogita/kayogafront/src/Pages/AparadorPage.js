import {BottomNavigation, 
        Grid,
        Chip,
        Card, 
        Avatar,  
        BottomNavigationAction,Container, Typography, CardContent, CssBaseline } from "@mui/material";
import ListAltIcon from '@mui/icons-material/ListAlt';
import DoneIcon from '@mui/icons-material/ListAltSharp';
import { useState } from "react";
import '../App.css'
import aparadorImage from '../media/aparadorImage.jpg'

function App() {
  const [selected, setSelected] = useState(0);
  return (
    <>
    {/* Titulo Cabecera */}
    <Container sx={{marginLeft:'15%',marginTop:3,
                    width:'80vw',display:'flex',flexDirection: 'row',alignItems:'center'}}>
      <Avatar src={aparadorImage} sx={{width:90,height:90}}>

      </Avatar>
      <Grid container  sx={{width:'80vw',display:'flex',flexDirection: 'column',alignItems:'flex-start',ml:3}}>
        <Typography component="h1" variant="h4" sx={{fontWeight:'bold'}}>
            Bienvenido Alex
        </Typography>
        <Typography component="h1" variant="h6" >
            Toda la información, aquí abajo
        </Typography>
       
      </Grid>
      <Grid container>
      <Chip
          label="Rol -  Aparador"
          sx={{ml:'60%'}}
          color="primary"
          deleteIcon={<DoneIcon />}
        />
      </Grid>
    </Container>

    <Container  
               sx={{marginLeft:'15%',marginTop:'0.7%',
                    borderRadius:3,backgroundColor:'#f2f3f4',
                    width:'80vw',display:'flex',flexDirection: 'column'}}>
    
    <Grid container sx={{ }} elevation={3}>
        <BottomNavigation
            showLabels
            value={selected}
            onChange={(value, newValue) => {
                setSelected(newValue);
            }}
            style={{ width: "100%",backgroundColor:'#f2f3f4' }}
            >
            <BottomNavigationAction label="Lotes por Entregar" icon={<ListAltIcon/>}/>
            <BottomNavigationAction label="Lotes Entregados" icon={<ListAltIcon/>}/>
            <BottomNavigationAction label="Third"  icon={<ListAltIcon/>}/>
        </BottomNavigation>


    </Grid>

    </Container>
    </>
  );
}

export default App;