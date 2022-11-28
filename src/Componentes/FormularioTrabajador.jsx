import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';



{/* const optiona = [
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Femenino', label: 'Femenino' },
    { value: 'no_Binario', label: 'No Binario' },
]
*/}



export const FormularioTrabajador = (props) => {
    const [rut, setRut] = useState(props.trabajador.rut)
    const [nombre, setNombre] = useState(props.trabajador.nombre)
    const [apellido, setApellido] = useState(props.trabajador.apellido)
    const [telefono, setTelefono] = useState(props.trabajador.telefono)
    const [sexo, setSexo] = useState(props.trabajador.sexo)
    const [edad, setEdad] = useState(props.trabajador.edad)
    const [email, setEmail] = useState(props.trabajador.email)
    const [direccion, setDireccion] = useState(props.trabajador.direccion)



    const handleRegistro = () => {
        props.setTrabajadores([...props.trabajadores, {
            'id': uuid(),
            'rut': rut,
            'nombre': nombre,
            'apellido': apellido,
            'sexo': sexo,
            'edad': edad,
            'email': email,
            'telefono': telefono,
            'direccion': direccion,
        }
        ])
    }

    const handleUpdate = (campo, valor) => {
        props.setTrabajador({ ...props.trabajador, [campo]: valor })

    }

    return (
        <Form>
            <Form.Group>
                <Form.Label>Rut: </Form.Label>
                <Form.Control type="text" name="rut" placeholder="Ingrese su rut" onChange={(e) => { setRut(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={rut} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type="text" name="nombre" placeholder="Ingrese su nombre" onChange={(e) => { setNombre(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={nombre} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control type="text" name="apellido" placeholder="Ingrese su apellido" onChange={(e) => { setApellido(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={apellido} />
            </Form.Group>

            <Form.Group>
                <Form.Label >Sexo: </Form.Label>
                <Form.Control   name="sexo" placeholder="Ingrese su sexo" onChange={(e) => { setSexo(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={sexo} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Sexo: </Form.Label>
                <Form.Control as='select'  onChange={(e) => { setSexo(e.target.value); handleUpdate(e.target.name, e.target.value)  }} value={sexo} >
                <option   value={sexo}>Seleccione un Sexo</option>
                <option   value={sexo}>Masculino</option>
                <option   value={sexo}> Femenino</option>
                <option   value={sexo}> No Binario</option>
                </Form.Control>
                
            </Form.Group>

            

            <Form.Group>
                <Form.Label>Edad: </Form.Label>
                <Form.Control type="number" name="edad" placeholder="Ingrese su edad" onChange={(e) => { setEdad(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={edad} />
            </Form.Group>
        
            <Form.Group>
                <Form.Label>Correo: </Form.Label>
                <Form.Control type="email" name="email" placeholder="Ingrese su correo" onChange={(e) => { setEmail(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={email} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Telefono: </Form.Label>
                <Form.Control type="number" name="telefono" placeholder="Ingrese su telefono" onChange={(e) => { setTelefono(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={telefono} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Direccion: </Form.Label>
                <Form.Control type="text" name="direccion" placeholder="Ingrese su direccion" onChange={(e) => { setDireccion(e.target.value); handleUpdate(e.target.name, e.target.value) }} value={direccion} />
            </Form.Group>
            <Row>

                {props.visible &&
                    <Button className='col-md-2 offset-md-5 ' onClick={handleRegistro}>Registrar</Button>
                }
            </Row>
        </Form>



    )
}


