import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import {FormularioBancos} from './FormularioBancos'
export const Seccion3 = () => {

const [bancos,setBancos] = useState ([]);
const [banco,setBanco] = useState ();
const [show,setShow] = useState(false);
const [accion,setAccion] = useState (false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const modificar =(id,nombre,empresa,trabajador,cliente)=>{
  setAccion(false)
  setBanco({
    'id':id,
  'nombre':nombre,
  'empresa':empresa,
  'trabajador':trabajador,
  'cliente':cliente,

  })
  handleShow()
}

const handleUpdate = () =>{
let bn = bancos.filter(p=>p.id !== banco.id)
setBancos([...bn,banco])

}
 const handleDelete =() =>{
  
let bn = bancos.filter(p=>p.id !== banco.id)
setBancos([...bn])
 }

 const eliminar = ()=>{
  setAccion(true)
  handleShow()
}

  return (

    
    <div className='row m-1' >
    <br />
      <FormularioBancos setBancos={setBancos} bancos={bancos} visible={true} banco=""/>     
  <br />
  <br />
  <div>
  <Table>
      <thead>
    
          <tr>
            <th>ID</th>
              <th>Nombre</th>
              <th>Empresa</th>
              <th>Trabajador</th>
              <th>Cliente</th>
              
          </tr>
      </thead>
      <tbody>
          {bancos.map(({id,nombre,empresa,trabajador,cliente})=>
              (
                <tr>
                  <td>{id}</td>
                  <td>{nombre}</td>
                  <td>{empresa}</td>
                  <td>{trabajador}</td>
                  <td>{cliente}</td>
                  <td><Button variant="warning" onClick={()=>{modificar(id,nombre,empresa,trabajador,cliente)}}>Modificar</Button>
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
        <Modal.Title>Banco</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormularioBancos visible={false} banco={banco} setBanco={setBanco}/>
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
