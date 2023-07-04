import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import TablePagination from '@mui/material/TablePagination';
import EditIcon from '@mui/icons-material/Edit';
import ListAltIcon from '@mui/icons-material/ListAlt';

// import TypeUsersDash from './TypeUsersDash';
// import HabilitarAlert from "./Habilitar";
// import Detalle_usuario from './DetalleUsuario';
// import SearchBar from './SearchBar';
// import * as actions from "../../../actions";
// import { AppDispatch, RootState } from '../../../store/index';

import Title from './Title';
import { getAllUsers } from '../../../../redux/actions';

const UsersDash = ({ setSelectedLink, link }) => {
  useEffect(() => {
    setSelectedLink(link);
  }, []);

  const dispatch = useDispatch();
  const UsuariosDashAll = useSelector((state) => state.allUsers);
  const UsuariosDash = UsuariosDashAll.filter(user => user.user_datum !== null);
  console.log(UsuariosDash);


//   const user = useSelector((state) => state.userLogin);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [usuario, setUsuario] = useState(0);
  const [openHab, setOpenHab] = useState(false);
  const [nombre_usuario, setNombre_usuario] = useState("");
  const [estado, setEstado] = useState(0);
  const [tipo, setTipo] = useState("");
  const [openDet, setOpenDet] = useState(false);

  let usuariosSliced = UsuariosDash.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, rowsPerPage, openHab, open]);

  const HandleHabilitar = (e, id, nombre, estado) => {
    e.preventDefault();
    setOpenHab(true);
    setUsuario(id);
    setNombre_usuario(nombre);
    setEstado(estado);
  };

  const handleClick = (e, id, tipo, username) => {
    e.preventDefault();
    setOpen(true);
    setUsuario(id);
    setTipo(tipo);
    setNombre_usuario(username);
  };

  const handleDetalle = (e, id, nombre) => {
    e.preventDefault();
    setOpenDet(true);
    setUsuario(id);
    setNombre_usuario(nombre);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", mb: 5, alignItems: "center" }}>
            <Grid item sx={{ ml: 3 }}><Title>Usuarios</Title></Grid>
            {/* <Grid item sx={{ mr: 3 }}>
                <SearchBar type="Usuario" setPage={setPage}></SearchBar>
            </Grid> */}
          </Grid>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Nombre Completo</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuariosSliced.map((u) => (
                <React.Fragment key={u.user_datum.id_user_data}>
                  <TableRow>
                    <TableCell onClick={(e) => handleDetalle(e, u.user_datum.id_user_data, u.userName)}>
                      <Button variant='text' color="inherit">
                        <ListAltIcon fontSize="small" sx={{ color: "#ACA8A6", pb: 0.5 }} />
                        {u.userName}
                      </Button>
                    </TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell onClick={(e) => handleClick(e, u.user_datum.id_user_data, u.user_datum.rol, u.userName)}>
                      <Button variant='text' color="inherit" >
                        <EditIcon fontSize="small" sx={{ color: "#ACA8A6", pb: 0.5 }} />
                        {u.user_datum.rol}
                      </Button>
                    </TableCell>
                    <TableCell>{u.user_datum.isActive === true ? "Habilitado" : "Deshabilitado"}</TableCell>
                    <TableCell align="right">
                      {u.user_datum.isActive === true ?
                        <Button onClick={(e) => HandleHabilitar(e, u.user_datum.id_user_data, u.userName, u.user_datum.isActive)} variant="contained" sx={{ color: '#d50000' }}>
                          Deshabilitar
                        </Button> :
                        <Button onClick={(e) => HandleHabilitar(e, u.user_datum.id_user_data, u.userName, u.user_datum.isActive)} variant="contained" sx={{ color: '#00c853' }}>
                          Habilitar
                        </Button>
                      }
                    </TableCell>
                  </TableRow>
                  {/* <TypeUsersDash open={open} setopen={setOpen} id={usuario} username={nombre_usuario} tipo={tipo} /> */}
                  {/* <Detalle_usuario open={openDet} setopen={setOpenDet} id={usuario} nombre={nombre_usuario} />
                  <HabilitarAlert open={openHab} setopen={setOpenHab} nombre={nombre_usuario} id={usuario} estado={estado} tipo="usuario" /> */}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={UsuariosDash.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

export default UsersDash;