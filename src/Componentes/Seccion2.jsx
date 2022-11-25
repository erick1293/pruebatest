import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import {FormularioTrabajador} from './FormularioTrabajador'

export const Seccion2 = () => {
    const [trabajadores,setTrabajadores] = useState([])
    const [show, setShow] = useState(false);
    const [trabajador,setTrabajador] = useState();
    const [accion,setAccion] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = ()=>{
      let ps = trabajadores.filter(p=>p.id!==trabajador.id)
      setTrabajadores([...ps,trabajador])
      console.log(trabajadores)
    }
    const handleDelete = ()=>{
      let ps = trabajadores.filter(p=>p.id!==trabajador.id)
      setTrabajadores([...ps])
      
    }

    const modificar = (id,rut,nombre,apellido,sexo,edad,email,telefono,direccion)=>{
      setAccion(false)
        setTrabajador({
          'id':id,
          'rut':rut,
          'nombre':nombre,
          'apellido':apellido,
          'sexo':sexo,
          'edad':edad,
          'email':email,
           'telefono':telefono,
            'direccion':direccion,
        })
        handleShow()
        
    }
    
    const eliminar = ()=>{
      setAccion(true)
      handleShow()
    }
    return (
        <div className='row m-1' >
            <FormularioTrabajador setTrabajadores={setTrabajadores} trabajadores={trabajadores} visible={true} trabajador=""/>
            
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Rut</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Sexo</th>
                    <th>Edad</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Direccion</th>  
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {trabajadores.map(({id,rut,nombre,apellido,sexo,edad,email,telefono,direccion})=>
                    (
                    <tr>
                        <td>{id}</td>
                        <td>{rut}</td>
                        <td>{nombre}</td>
                        <td>{apellido}</td>
                        <td>{sexo}</td>
                        <td>{edad}</td>
                        <td>{email}</td>
                        <td>{telefono}</td>
                        <td>{direccion}</td>
                        <td><Button variant="warning" onClick={()=>{modificar(id,rut,nombre,apellido,sexo,edad,email,telefono,direccion)}}>Modificar</Button>
                            <Button variant="danger" onClick={eliminar}>Eliminar</Button>
                        </td>
                    </tr>
                    )
                )}
            </tbody>
        </Table>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Trabajador</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormularioTrabajador visible={false} trabajador={trabajador} setTrabajador={setTrabajador}/>
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
    