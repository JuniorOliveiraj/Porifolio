
import { ContainerHomeCenter } from '../../containr/container1';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
//import { authGoogleContex } from "../contexts/authGoogle";
import { authGoogleContex } from '../../contexts/authGoogle';



export default function TitlebarBelowMasonryImageList() {

   const { signed, logout, login, user, photos, loand } = useContext(authGoogleContex);
   
   return (
      <ContainerHomeCenter>
         {photos.map((item) => (
            <Card className={{Card:"teste00000"}} sx={{ maxWidth: 345, margin: 1,display:"flex" }}>
               <CardActionArea>
                  <CardMedia
                     component="img"
                     height="140"
                     image={`${item.url}`}
                     alt="green iguana"
                  />
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                       {item.name}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        {item.url}
                     </Typography>
                  </CardContent>
               </CardActionArea>
            </Card>
         ))}
      </ContainerHomeCenter>



   );
}

