import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import useAuth from '../Hooks/useAuth'
//import useFetch from '../Hooks/useFetch'

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/daycares';

export default function DaycareAdd(props) {
    //const { reload } = useFetch(daytaCareApi);
    const { user } = useAuth();
    //const { hasPermission } = useAuth();
    const [daycareType, setDaycareType ] = useState('')
    const [name, setName ] = useState('')
    const [streetAddress, setStreetAddress ] = useState('')
    const [city, setCity ] = useState('')
    const [state, setState ] = useState('IA')
    const [country, setCountry ] = useState('US')
    const [phone, setPhone ] = useState('')
    const [email, setEmail ] = useState('')
    const [price, setPrice ] = useState('')
    const [licenseNumber, setLicenseNumber ] = useState('')
    const [availability, setAvailability ] = useState(false)
    const onSave = props.onSave


async function handleDaycareAdd(event) {
  event.preventDefault()
    console.log('Submitting...', );

    //const form = event.target;
   // const { daycareType,name,streetAddress,city,state,country,phone,email,price,licenseNumber,availability } = form.elements;

    //const formData = {
    //  daycareType:  daycareType.value,
    //  name:  name.value,
    //  streetAddress:  streetAddress.value,
    //  city:  city.value,
    //  state:  state.value,
    //  country:  country.value,
   //   phone:  phone.value,
    //  email:  email.value,
    //  price:  price.value,
    //  licenseNumber:  licenseNumber.value,
    //  availability:  availability,
    //};
    //console.log(formData);

    if (!user) {
        console.warn('Anonymous should not be allowed to add!');
        return;
    }

    await fetch(`${daytaCareApi}`, {
        method:  'post',
        body: JSON.stringify({ daycareType,name,streetAddress,city,state,country,phone,email,price,licenseNumber,availability }),
        headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type' : 'application/json',
        },
        //body: JSON.stringify({ daycareType,name,streetAddress,city,state,country,phone,email,price,licenseNumber,availability }),

    })
    //reload();
    //console.log('Submitted successfully', formData);
    console.log('Submitted successfully');
    onSave();
    //form.reset();
}

//let canCreate = hasPermission('create');

return (
      <Form onSubmit={ handleDaycareAdd } title="Add My Daycare">
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


