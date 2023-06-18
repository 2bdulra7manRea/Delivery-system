
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from "react";

const info = {
    NAME: "name",
    PHONE: "phone",
    LOCATION: "location",
    SALARY: "salary",
    ID_CARD:'identityNumber'
}


export const DynamicDialog = ({title , metaData}) =>{
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitData = () => {
  
    console.log(inputValue)
  
  }

  const [inputValue, setInputValues] = useState({ name: "", phone: "" ,location:"" ,identityNumber:"" })
    
  const handleOnChange = (e, type) => {
          setInputValues({...inputValue,[type]:e.target.value})
  }
  

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
              Create an agent
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a new Agent</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            margin="dense"
            id={info.NAME}
            label={info.NAME}
                type="text"
                value={inputValue.name}
            fullWidth
                variant="standard"
                
                onChange={(e)=>handleOnChange(e,info.NAME)}
          />
        
        
        <TextField
            autoFocus
                margin="dense"
                value={inputValue.phone}
            id={info.PHONE}
            label={info.PHONE}
            type="text"
            fullWidth
                variant="standard"
                onChange={(e)=>handleOnChange(e,info.PHONE)}
          />

<TextField
            autoFocus
                margin="dense"
                value={inputValue.location}
            id={info.LOCATION}
            label={info.LOCATION}
            type="text"
            fullWidth
                variant="standard"
                onChange={(e)=>handleOnChange(e,info.LOCATION)}
          />


<TextField
            autoFocus
                margin="dense"
                value={inputValue.identityNumber}
            id={info.ID_CARD}
            label={info.ID_CARD}
            type="text"
            fullWidth
                variant="standard"
                onChange={(e)=>handleOnChange(e,info.ID_CARD)}
          />
                          
                 
          

                  
                  
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitData}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
