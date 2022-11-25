import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';

export const FormularioClientes = (props) => {
    const [rut, setRut] = useState(props.cliente.rut)
    const [nombre, setNombre] = useState(props.cliente.nombre)
    const [apellido, setApellido] = useState(props.cliente.apellido)
    const [telefono, setTelefono] = useState(props.cliente.telefono)
    const [edad, setEdad] = useState(props.cliente.edad)
    const [email, setEmail] = useState(props.cliente.email)
    const [direccion, setDireccion] = useState(props.cliente.direccion)

    const handleRegistro = ()=>{
        props.setClientes([...props.clientes,{
            'id': uuid(),
            'rut':rut,
            'nombre':nombre,
            'apellido':apellido,
            'telefono':telefono,
            'direccion':direccion,
            'edad':edad,
            'email':email
        }])        
    }

    const handleUpdate = (campo,valor)=>{
        props.setCliente({...props.cliente,[campo]:valor})
    }

    return (
        <Form>
            <Form.Group>
            <Form.Label>Rut: </Form.Label>
            <Form.Control type="text" name="rut" placeholder="Ingrese su rut" onChange={(e)=>{setRut(e.target.value); handleUpdate(e.target.name,e.target.value)}} value={rut}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Nombre: </Form.Label>
            <Form.Control type="text" name="nombre" placeholder="Ingrese su nombre" onChange={(e)=>{setNombre(e.target.value); handleUpdate(e.target.name,e.target.value)}} value={nombre}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Apellido: </Form.Label>
            <Form.Control type="text" name="apellido" placeholder="Ingrese su apellido" onChange={(e)=>{setApellido(e.target.value); handleUpdate(e.target.name,e.target.value)}}  value={apellido}/>
        </Form.Group>
       
        <Form.Group>
            <Form.Label>Edad: </Form.Label>
            <Form.Control type="number" name="edad" placeholder="Ingrese su edad" onChange={(e)=>{setEdad(e.target.value); handleUpdate(e.target.name,e.target.value)}} value={edad}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Correo: </Form.Label>
            <Form.Control type="email" name="email" placeholder="Ingrese su correo" onChange={(e)=>{setEmail(e.target.value); handleUpdate(e.target.name,e.target.value)}} value={email}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Telefono: </Form.Label>
            <Form.Control type="number" name="telefono" placeholder="Ingrese su telefono" onChange={(e)=>{setTelefono(e.target.value); handleUpdate(e.target.name,e.target.value)}}  value={telefono}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Direccion: </Form.Label>
            <Form.Control type="text" name="direccion" placeholder="Ingrese su direccion" onChange={(e)=>{setDireccion(e.target.value); handleUpdate(e.target.name,e.target.value)}}  value={direccion}/>
        </Form.Group>
        <Row>
                                
                { props.visible &&
                    <Button className='col-md-2 offset-md-5 ' onClick={handleRegistro}>Registrar</Button>
                }
        </Row>
    </Form>
  )
}
