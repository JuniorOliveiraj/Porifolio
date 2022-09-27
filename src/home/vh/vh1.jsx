import { ContainerHomeCenter } from "../../containr/container1"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function Vhone() {
   return ( 
      <ContainerHomeCenter>
         <React.Fragment>
            <Container maxWidth="sm">
               <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            </Container>
         </React.Fragment>
      </ContainerHomeCenter>
   )
} export default Vhone