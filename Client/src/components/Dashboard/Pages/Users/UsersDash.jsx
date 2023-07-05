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
import Title from './Title';
import { getAllUsers, modifyRol, desactiveUser, activeUser } from '../../../../redux/actions';
import Swal from 'sweetalert2';

const UsersDash = ({ setSelectedLink, link }) => {
  useEffect(() => {
    setSelectedLink(link);
  }, []);

  const dispatch = useDispatch();
  const UsuariosDashAll = useSelector((state) => state.allUsers);
  let UsuariosDash = [];

  if (Array.isArray(UsuariosDashAll)) {
    UsuariosDash = UsuariosDashAll.filter(user => user.user_datum !== null && user.user_datum.rol === "developer");
  }

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

  const HandleHabilitar = (e, full_name, userName, isActive) => {
    e.preventDefault();

    Swal.fire({
      title: isActive ? 'Confirm Disable' : 'Confirm Enable',
      text: `Are you sure you want to ${isActive ? 'disable' : 'enable'} user ${userName}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        if (isActive) {
          dispatch(desactiveUser(full_name));
        } else {
          dispatch(activeUser(full_name));
        }

        Swal.fire(`${isActive ? 'Disable' : 'Enable'} confirmed`, '', 'success')
          .then(() => {
            window.location.reload();
          });
      }
    });
  };

  const handleRol = (e, id) => {
    e.preventDefault();

    Swal.fire({
      title: 'Confirm Role Change',
      text: 'Are you sure you want to change the role to administrator?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(modifyRol({ id: id, rol: 'admin' }));

        Swal.fire('Role Change Confirmed', '', 'success')
          .then(() => {
            window.location.reload();
          });
      }
    });
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
            <Grid item sx={{ ml: 3 }}><Title>Developers</Title></Grid>
          </Grid>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>State</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuariosSliced.map((u) => (
                <React.Fragment key={u.user_datum.id_user_data}>
                  <TableRow>
                    <TableCell>
                      {u.userName}
                    </TableCell>
                    <TableCell>{u.email}</TableCell>
                    
                    <TableCell onClick={(e) => handleRol(e, u.user_datum.id_user_data, u.user_datum.rol, u.userName)}>
                      <Button variant='text' color="inherit" >
                        <EditIcon fontSize="small" sx={{ color: "#ACA8A6", pb: 0.5 }} />
                        {u.user_datum.rol}
                      </Button>
                    </TableCell>

                    <TableCell>{u.user_datum.isActive === true ? "Habilitado" : "Deshabilitado"}</TableCell>
                    <TableCell align="right">
                      {u.user_datum.isActive === true ?
                        <Button onClick={(e) => HandleHabilitar(e, u.user_datum.full_name, u.userName, u.user_datum.isActive)} variant="contained" sx={{ color: '#d50000' }}>
                          Deshabilitar
                        </Button> :
                        <Button onClick={(e) => HandleHabilitar(e, u.user_datum.full_name, u.userName, u.user_datum.isActive)} variant="contained" sx={{ color: '#00c853' }}>
                          Habilitar
                        </Button>
                      }
                    </TableCell>
                  </TableRow>
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
