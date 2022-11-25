import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';

export const FormularioBancos = (props) => {

    const [nombre, setNombre] = useState(props.banco.nombre)
    const [empresa, setEmpresa] = useState(props.banco.empresa)
    const [trabajador, setTrabajador] = useState(props.banco.trabajador)
    const [cliente, setCliente] = useState(props.banco.cliente)

    const handleRegistro = ()=>{
        props.setBancos([...props.bancos,{
            'id': uuid(),
            'nombre':nombre,
            'empresa':empresa,
            'trabajador':trabajador,
            'cliente':cliente,
        }])        
    }
    const handleUpdate = (campo,valor)=>{
        props.setBanco({...props.banco,[campo]:valor})
    }


    return (
        <Form>
        <Form.Group>
            <Form.Label>Nombre: </Form.Label>
            <Form.Control type="text" name="nombre" placeholder="Ingrese Nombre del Ejecutivo" onChange={(e)=>{setNombre(e.target.value); handleUpdate(e.target.name,e.target.value)}} value={nombre}/>
        </Form.Group>
  
        <Form.Group>
            <Form.Label>Empresa: </Form.Label>
            <Form.Control type="text" name="empresa" placeholder="Ingrese la empresa que pertenece" onChange={(e)=>{setEmpresa(e.target.value); handleUpdate(e.target.name,e.target.value)}} value={empresa}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Trabajador: </Form.Label>
            <Form.Control type="text" name="trabajador" placeholder="Ingrese el nombre del trabajador a darle el prestamo" onChange={(e)=>{setTrabajador(e.target.value); handleUpdate(e.target.name,e.target.value)}} value={trabajador}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Cliente: </Form.Label>
            <Form.Control type="text" name="cliente" placeholder="Ingrese el Nombre del cliente" onChange={(e)=>{setCliente(e.target.value); handleUpdate(e.target.name,e.target.value)}} value={cliente}/>
        </Form.Group>
        <Row>
                                
                { props.visible &&
                    <Button className='col-md-2 offset-md-5 ' onClick={handleRegistro}>Registrar</Button>
                }
        </Row>
    </Form>
  )
}