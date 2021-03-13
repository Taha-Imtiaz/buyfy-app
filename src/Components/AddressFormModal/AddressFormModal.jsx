import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Button from '../Button/Button'
import ModalContainer from '../ModalContainer/ModalContainer'
import "./AddressFormModal.css"

const AddressFormModal = () => {
    var [address, setAddress] = useState('')
    var [name, setName] = useState('')
    var [contact, setContact] = useState('')
    var [email, setEmail] = useState('')


    return (
        <ModalContainer>
            <form className="address-form-modal center">
                <div className="address-form-fields">
               
            <TextField id="standard-basic" style={{width:"100%"}}
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            label="Name" />

            <TextField id="standard-basic" style={{width:"100%"}}
            value = {address}
            onChange = {(e) => setAddress(e.target.value)}
            label="Address" />

                </div>

                <div className="address-form-fields">
                <TextField id="standard-basic" style={{width:"100%"}}
            value = {contact}
            onChange = {(e) => setContact(e.target.value)}
            label="Contact" />

            <TextField id="standard-basic" style={{width:"100%"}}
            value = {email}
            onChange = {(e) => setEmail(e.target.value)}
            label="Email" />
                </div>
                <Button style={{marginTop:"2em"}}>
                    Proceed & Pay
                </Button>
            </form>
        </ModalContainer>
    )
}

export default AddressFormModal
