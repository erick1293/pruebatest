    import React from 'react'
    import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import {FormularioClientes} from './FormularioClientes'

export const Seccion1 = () => {
const [clientes,setClientes] = useState ([]);
const [show,setShow] = useState(false);
const [cliente,setCliente] = useState ();
const [accion,setAccion] = useState (false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const handleUpdate=()=>{
   let ps = clientes.filter(p=>p.id!==cliente.id)  // si se hace con el rut , se mantiene y se agrega otro , almenos que haya mantenido el rut , se elimina el resto 
   setClientes([...ps,cliente])
   console.log(clientes)
} 

const handleDelete = ()=>{
  let ps = clientes.filter(p=>p. id!==cliente.id)
  setClientes([...ps])
  
}

const modificar = (id,rut,nombre,apellido,edad,email,telefono,direccion)=>{
  setAccion(false)
   setCliente({
     'id':id,
     'rut':rut,
      'nombre':nombre,
      'apellido':apellido,
      'edad':edad,
      'email':email,
      'telefono':telefono,
      'direccion':direccion
    })
    handleShow()
    
}

const eliminar = ()=>{
  setAccion(true)
  handleShow()
}



return (
  <div className='row m-1' >
    <br />
      <FormularioClientes setClientes={setClientes} clientes={clientes} visible={true} cliente=""/>     
  <br />
  <br />
  <div>
  <Table>
      <thead>
    
          <tr>
              <th>ID</th>
              <th>Rut</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Direccion</th>  
              <th>Accion</th>
          </tr>
      </thead>
      <tbody>
          {clientes.map(({id,rut,nombre,apellido,edad,email,telefono,direccion})=>
              (
                <tr>
                  <td>{id}</td>
                  <td>{rut}</td>
                  <td>{nombre}</td>
                  <td>{apellido}</td>
                  <td>{edad}</td>
                  <td>{email}</td>
                  <td>{telefono}</td>
                  <td>{direccion}</td>
                  <td><Button variant="warning" onClick={()=>{modificar(id,rut,nombre,apellido,edad,email,telefono,direccion)}}>Modificar</Button>
                      <Button variant="danger" onClick={eliminar}>Eliminar</Button>
                  </td>
                  
              </tr>
              )
          )}
      </tbody>
  </Table>
              </div>

  <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registrar Clientes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormularioClientes visible={false} cliente={cliente} setCliente={setCliente}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {
          !accion?
          <Button variant="warning" onClick={handleUpdate}>
          Modificar
        </Button>:
        <Button variant="danger" onClick={handleDelete}>
          Eliminar 
        </Button>
        }
        
      </Modal.Footer>
    </Modal>

  </div>
)
}