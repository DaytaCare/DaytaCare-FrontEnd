import React, { useState } from 'react'
import { Button, Form, Col, Spinner } from 'react-bootstrap'
import useAuth from '../Hooks/useAuth'
import useFetch from '../Hooks/useFetch'


const daytaCareApi = 'https://daytacare.azurewebsites.net/api/daycares';

const daytaCareApiAmenities = 'https://daytacare.azurewebsites.net/api/amenity';


export default function DaycareAdd(props) {

  const { user } = useAuth();
  const [daycareType, setDaycareType] = useState('')
  const [name, setName] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('IA')
  const [country, setCountry] = useState('US')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [price, setPrice] = useState('')
  const [licenseNumber, setLicenseNumber] = useState('')
  const [availability, setAvailability] = useState(false)
  const [amenityId, setAmenityId] = useState([])
  const onSave = props.onSave

  const { data: amenities } = useFetch(daytaCareApiAmenities);

  async function handleDaycareAdd(event) {
    event.preventDefault()
    console.log('Submitting...',);

    if (!user) {
      console.warn('Anonymous should not be allowed to add!');
      return;
    }

    await fetch(`${daytaCareApi}`, {
      method: 'post',
      body: JSON.stringify({ daycareType, name, streetAddress, city, state, country, phone, email, price, licenseNumber, availability, amenityId }),
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json',
      },
    })

    console.log('Submitted successfully');
    onSave();

  }

  return (
    <Form onSubmit={handleDaycareAdd} title="Add My Daycare">
        <Form.Select aria-label="Select Daycare Type" onChange={e => setDaycareType(parseInt(e.target.value))}>
          <option>Select Your Daycare Type</option>
          <option value="1">In Home Unregistered</option>
          <option value="2">In Home A</option>
          <option value="3">In Home B</option>
          <option value="4">In Home C1</option>
          <option value="5">In Home C2</option>
          <option value="6">Licensed Center</option>
        </Form.Select>
        
      <Form.Group className="mb-3" controlId="form.daycareName">
        <Form.Label>Daycare Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Daycare Name" value={name} onChange={e => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form.streetAddress">
        <Form.Label>Daycare Street Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Daycare Street Address" value={streetAddress} onChange={e => setStreetAddress(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form.city">
        <Form.Label>Daycare City</Form.Label>
        <Form.Control type="text" placeholder="Enter Daycare City" value={city} onChange={e => setCity(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form.state">
        <Form.Label>Daycare State</Form.Label>
        <Form.Control type="text" placeholder="Enter Daycare State" value={state} onChange={e => setState(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form.country">
        <Form.Label>Daycare Country</Form.Label>
        <Form.Control type="text" placeholder="Enter Daycare Country" value={country} onChange={e => setCountry(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form.phone">
        <Form.Label>Daycare Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter Daycare Phone" value={phone} onChange={e => setPhone(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form.email">
        <Form.Label>Daycare Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Daycare Email Address" value={email} onChange={e => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form.price">
        <Form.Label>Rate</Form.Label>
        <Form.Control type="text" placeholder="Enter the Daycare Rate" value={price} onChange={e => setPrice(parseInt(e.target.value))} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form.licenseNumber">
        <Form.Label>State of Iowa License Number</Form.Label>
        <Form.Control type="text" placeholder="Enter the Daycare's License Number" value={licenseNumber} onChange={e => setLicenseNumber(e.target.value)} />
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

      <Form.Group className="mb-3">
        <Form.Label as="legend" column sm={2}>Amenities</Form.Label>
        <Col sm={10}>
          {amenities ? amenities.map(amenity => (
            <Form.Check key={amenity.id}
              type="checkbox"
              label={amenity.name}
              name="amenityId"
              value={amenity.id}
              checked={amenityId.includes(amenity.id)}
              onChange={e => setAmenityId(e.target.checked ? [...amenityId, amenity.id] : amenityId.filter(id => id !== amenity.id))} />
          )) : <Spinner animation="grow" variant="danger" />
          }
        </Col>
      </Form.Group>


      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  )

}


