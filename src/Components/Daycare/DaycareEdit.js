import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import useAuth from '../Hooks/useAuth'
//import useFetch from '../Hooks/useFetch'

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/daycares';

export default function DaycareEdit(props) {
    //const { reload } = useFetch(daytaCareApi);
    const { user } = useAuth();
    const daycare = props.daycare
    //const { hasPermission } = useAuth();
    const [daycareType, setDaycareType ] = useState(daycare.daycareType)
    const [name, setName ] = useState(daycare.name)
    const [streetAddress, setStreetAddress ] = useState(daycare.streetAddress)
    const [city, setCity ] = useState(daycare.city)
    const [state, setState ] = useState('IA')
    const [country, setCountry ] = useState('US')
    const [phone, setPhone ] = useState(daycare.phone)
    const [email, setEmail ] = useState(daycare.email)
    const [price, setPrice ] = useState(daycare.price)
    const [licenseNumber, setLicenseNumber ] = useState(daycare.licenseNumber)
    const [availability, setAvailability ] = useState(false)
    const onSave = props.onSave

async function handleDaycareEdit(event) {
  event.preventDefault()
    console.log('Submitting...', );

    if (!user) {
        console.warn('Anonymous should not be allowed to add!');
        return;
    }

    await fetch(`${daytaCareApi}/${daycare.daycareId}`, {
        method:  'put',
        body: JSON.stringify({ id: daycare.daycareId, daycareType,name,streetAddress,city,state,country,phone,email,price,licenseNumber,availability }),
        headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type' : 'application/json',
        },

    })

    console.log('Submitted successfully');
    onSave();

}

return (
      <Form onSubmit={ handleDaycareEdit } title="Edit My Daycare">
        <Form.Group className="mb-3" controlId="form.daycareType">
          <Form.Label>Daycare Type</Form.Label>
          <Form.Control type="text" placeholder="Select Daycare Type" value={daycareType} onChange={e => setDaycareType(parseInt(e.target.value))}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.daycareName">
          <Form.Label>Daycare Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Daycare Name" value={name} onChange={e => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.streetAddress">
          <Form.Label>Daycare Street Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Daycare Street Address" value={streetAddress} onChange={e => setStreetAddress(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.city">
          <Form.Label>Daycare City</Form.Label>
          <Form.Control type="text" placeholder="Enter Daycare City" value={city} onChange={e => setCity(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.state">
          <Form.Label>Daycare State</Form.Label>
          <Form.Control type="text" placeholder="Enter Daycare State" value={state} onChange={e => setState(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.country">
          <Form.Label>Daycare Country</Form.Label>
          <Form.Control type="text" placeholder="Enter Daycare Country" value={country} onChange={e => setCountry(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.phone">
          <Form.Label>Daycare Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Daycare Phone" value={phone} onChange={e => setPhone(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.email">
          <Form.Label>Daycare Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter Daycare Email Address" value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.price">
          <Form.Label>Rate</Form.Label>
          <Form.Control type="text" placeholder="Enter the Daycare Rate" value={price} onChange={e => setPrice(parseInt(e.target.value))}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.licenseNumber">
          <Form.Label>State of Iowa License Number</Form.Label>
          <Form.Control type="text" placeholder="Enter the Daycare's License Number" value={licenseNumber} onChange={e => setLicenseNumber(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form.availability">
          <Form.Label>Has Availability?</Form.Label>
          <Form.Check
            type="checkbox"
            name="availability"
            value="true" 
            onChange={e => setAvailability(e.target.checked)}
            />
        </Form.Group>
        
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
)

}


