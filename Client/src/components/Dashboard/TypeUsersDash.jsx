import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from "react";
import { getUsuarios_dash, tipo_usuario } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { userTypes } from '../../../auxiliar';
import { getAllUsers } from '../../redux/actions';

export default function TypeUsersDash(props) {
  const [tipo, setTipo] = useState(props.tipo);
  const dispatch = useDispatch();
  const userAll = useSelector(state => state.allUsers);
  const user = userAll.filter(user => user.user_datum !== null);
  console.log(user);

  const handleClose = () => {
    props.setopen(false);
  };

  const cambiarTipo = (e) => {
    setTipo(e.target.value);
  };

  const handleChange = (e, id, tipo) => {
    e.preventDefault();
    let data = { token: user.token, userType: tipo };

    dispatch(tipo_usuario(
      id,
      data,
      () => { dispatch(getAllUsers()) }
    ));
    props.setopen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="md"
        open={props.open}
        onClose={handleClose}
      >
        <DialogTitle>Cambiar tipo de usuario para {props.username}</DialogTitle>
        <DialogContent>
          <FormControl sx={{ mt: 2, minWidth: 120 }}>
            <InputLabel id="demo-select-small" htmlFor="max-width" color="secondary">Tipo</InputLabel>
            <Select
              color="secondary"
              labelId="demo-select-small"
              id="demo-select-small"
              label="Tipo"
              onChange={cambiarTipo}
              value={tipo}
            >
              <MenuItem value={userTypes.PROPIETARIO}>Propietario</MenuItem>
              <MenuItem value={userTypes.USER}>Usuario</MenuItem>
              <MenuItem value={userTypes.ADMIN}>Administrador</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => handleChange(e, props.id, tipo)} variant="contained" color="secondary">Confirmar cambio</Button>
          <Button onClick={handleClose} variant="contained" color="secondary">Cerrar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
