// import { useEffect } from "react";

// const TechNews =  ({ setSelectedLink, link }) => {
//  useEffect(() => {
//    setSelectedLink(link);
//  }, []);


//  return(
//   <>

//    <div>Noticias Tech</div>

//   </>
//  )

//  }

//  export default TechNews;


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
import Title from '../Users/Title';
import { getAllPosts } from '../../../../redux/actions';
import Swal from 'sweetalert2';


const TechNews = ({ setSelectedLink, link }) => {
  
  useEffect(() => {
    setSelectedLink(link);
  }, []);
  
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.allPosts);

  console.log(posts);
  



  // if (Array.isArray(UsuariosDashAll)) {
  //   UsuariosDash = UsuariosDashAll.filter(user => user.user_datum !== null && user.user_datum.rol === "developer");
  // }
  // console.log(UsuariosDash);



  const postTech = posts.filter((post) => post.typePost === "tech")
  // .map((post) => (
  //   <Card key={post.id} post={post} />
  // ))

console.log(postTech);

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

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, rowsPerPage, openHab, open]);

  let postsTech = postTech.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);





  // const HandleHabilitar = (e, id, nombre, estado) => {
  //   e.preventDefault();
  //   setOpenHab(true);
  //   setUsuario(id);
  //   setNombre_usuario(nombre);
  //   setEstado(estado);
  // };

  //*ROL
  // const handleRol = (e, id, tipo, userName) => {
  //   e.preventDefault();
  //   setOpen(true);
  //   setUsuario(id);
  //   setTipo(tipo);
  //   setNombre_usuario(username);
  // };
  // const handleRol = (e, id,) => {
  //   e.preventDefault();

  //   Swal.fire({
  //     title: 'Confirmar cambio de rol',
  //     text: '¿Estás seguro/a de cambiar el rol a administrador?',
  //     icon: 'question',
  //     showCancelButton: true,
  //     confirmButtonText: 'Confirmar',
  //     cancelButtonText: 'Cancelar',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // Llamar a la acción modifyRol solo si se confirma el cambio de rol
  //       dispatch(modifyRol({ id: id, rol: 'admin' }));

  //       Swal.fire('Cambio de rol confirmado', '', 'success')
  //         .then(() => {
  //           window.location.reload();
  //         })
  //     }
  //   });
  // };

  // const handleDetalle = (e, id, nombre) => {
  //   e.preventDefault();
  //   setOpenDet(true);
  //   setUsuario(id);
  //   setNombre_usuario(nombre);
  // };

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
            <Grid item sx={{ ml: 3 }}><Title>Noticias Tech</Title></Grid>
            {/* <Grid item sx={{ mr: 3 }}>
                <SearchBar type="Usuario" setPage={setPage}></SearchBar>
            </Grid> */}
          </Grid>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Fecha</TableCell>
                {/* <TableCell>Type</TableCell>
                <TableCell>State</TableCell> */}
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {postsTech.map((u) => (
                <React.Fragment key={u.id_post}>
                  <TableRow>
                    <TableCell>{u.title}</TableCell>
                    <TableCell>{u.full_name}</TableCell>
                    <TableCell>{u.date_register.indexOf('T')}</TableCell>
                    {/* {posts.date_register?.substring(0, post.date_register.indexOf('T'))} */}


                    {/* //*ROL */}
                    {/* <TableCell onClick={(e) => handleRol(e, u.user_datum.id_user_data, u.user_datum.rol, u.userName)}>
                      <Button variant='text' color="inherit" >
                        <EditIcon fontSize="small" sx={{ color: "#ACA8A6", pb: 0.5 }} />
                        {u.user_datum.rol}
                      </Button> */}

                    {/* //*HABILITADO
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
                    </TableCell> */}
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
            count={postTech.length}
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

export default TechNews;