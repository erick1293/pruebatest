import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import {FormularioClientes} from './FormularioClientes'
import {FormularioTrabajador} from './FormularioTrabajador'
import {FormularioBancos} from './FormularioBancos'
import "../assets/comp.css";


export const Seccion4 = () => {
    const [cliente,setCliente] = useState ();
    const [clientes,setClientes] = useState ([]);
    const [trabajadores,setTrabajadores] = useState([])
    const [bancos,setBancos] = useState ([]);
    const [banco,setBanco] = useState ();
    const [trabajador,setTrabajador] = useState();
    const [show,setShow] = useState(false);
    const [accion,setAccion] = useState (false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const modificarCLientes = (id,rut,nombre,apellido,edad,email,telefono,direccion)=>{
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

   


    const modificarTrabajador = (id,rut,nombre,apellido,sexo,edad,email,telefono,direccion)=>{
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
      const modificarBancos =(id,nombre,empresa,trabajador,cliente)=>{
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
      const handleUpdate = ()=>{
        let ps = trabajadores.filter(p=>p.id!==trabajador.id)
        setTrabajadores([...ps,trabajador])
        console.log(trabajadores)
      }
      const handleDelete = ()=>{
        let ps = trabajadores.filter(p=>p.id!==trabajador.id)
        setTrabajadores([...ps])
        
      }


      const handleUpdateCliente=()=>{
        let ps = clientes.filter(p=>p.id!==cliente.id)  // si se hace con el rut , se mantiene y se agrega otro , almenos que haya mantenido el rut , se elimina el resto 
        setClientes([...ps,cliente])
        console.log(clientes)
     } 
     
     const handleDeleteCliente = ()=>{
       let ps = clientes.filter(p=>p. id!==cliente.id)
       setClientes([...ps])
       
     }

   
      
      const handleUpdateBanco = () =>{
      let bn = bancos.filter(p=>p.id !== banco.id)
      setBancos([...bn,banco])
      
      }
       const handleDeleteBanco =() =>{
        
      let bn = bancos.filter(p=>p.id !== banco.id)
      setBancos([...bn])
       }
      
       const eliminar = ()=>{
        setAccion(true)
        handleShow()
      }
      
        return (

<div className='General'>
<div id='Clientes' >
<h1>CLientes</h1>
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
                  <td><Button variant="warning" onClick={()=>{modificarCLientes(id,rut,nombre,apellido,edad,email,telefono,direccion)}}>Modificar</Button>
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
          <Button variant="warning" onClick={handleUpdateCliente}>
          Modificar
        </Button>:
        <Button variant="danger" onClick={handleDeleteCliente}>
          Eliminar 
        </Button>
        }
        
      </Modal.Footer>
    </Modal>

  </div>

<div id='Trabajador' >
<h1>Trabajador</h1>
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
                        <td><Button variant="warning" onClick={()=>{modificarTrabajador(id,rut,nombre,apellido,sexo,edad,email,telefono,direccion)}}>Modificar</Button>
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



            <div id='Bancos'>  
            <h1>Bancos</h1>
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
                        <td><Button variant="warning" onClick={()=>{modificarBancos(id,nombre,empresa,trabajador,cliente)}}>Modificar</Button>
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
              <Modal.Title>Banco en general
              </Modal.Title>
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
                  <Button variant="warning" onClick={handleUpdateBanco}>
                Modificar
              </Button>:
              <Button variant="danger" onClick={handleDeleteBanco}>
                Eliminar 
              </Button>
              }
              
            </Modal.Footer>
          </Modal>
      
        </div>
              </div>
             
  )



}
