import React, { useState, PhoneInput } from 'react'
import { Container } from 'react-bootstrap'
import useAuth from '../../Hooks/useAuth'
import useFetch from '../../Hooks/useFetch'

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/daycares';

export default function DaycareAdd(daycare) {
    const { reload } = useFetch(daytaCareApi);
    const { user } = useAuth();
    const { hasPermission } = useAuth();
    const [daycareType, setDaycareType ] = useState('')
    const [name, setName ] = useState('')
    const [streetAddress, setStreetAddress ] = useState('')
    const [city, setCity ] = useState('')
    const [state, setState ] = useState('')
    const [country, setCountry ] = useState('')
    const [phone, setPhone ] = useState('')
    const [email, setEmail ] = useState('')
    const [price, setPrice ] = useState('')
    const [licenseNumber, setLicenseNumber ] = useState('')
    const [availability, setAvailability ] = useState('true')

async function handleDaycareAdd() {
    console.log('Submitting...', daycare);
    if (!user) {
        console.warn('Anonymous should not be allowed to add!');
        return;
    }

    await fetch(`${daytaCareApi}`, {
        method:  'post',
        headers: {
            'Authorization': `Bearer ${user.token}` 
        }
    })
    reload();
}

let canCreate = hasPermission('create');

return (
    <div className="row">
      <div className="col-md-6">
        <div className="card border-dark mb-3">
          <Container>
            <form onSubmit={ handleDaycareAdd }>
              <legend>Add My Daycare</legend>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="daycareType">Daycare Type</label>
                  <input type="text" className="form-control" id="daycareType" placeholder="Select Daycare Type" name="daycareType" value={daycareType} onChange={e => setDaycareType(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Daycare Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter Daycare Name" name="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="streetAddress">Daycare Address</label>
                  <input type="text" className="form-control" id="streetAddress" placeholder="Enter Street Address" name="streetAddress" value={streetAddress} onChange={e => setStreetAddress(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Daycare City</label>
                  <input type="text" className="form-control" id="city" placeholder="Enter Daycare City" name="city" value={city} onChange={e => setCity(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="state">Daycare State</label>
                  <input type="text" className="form-control" id="state" placeholder="Enter Daycare State" name="state" value={state} onChange={e => setState(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="country">Daycare Country</label>
                  <input type="text" className="form-control" id="country" placeholder="Enter Daycare Country" name="country" value={country} onChange={e => setCountry(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Daycare Phone Number</label>
                  <PhoneInput className="form-control" id="phone" placeholder="Enter the Daycare Phone Number" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Daycare Email</label>
                  <input type="text" className="form-control" id="email" placeholder="Enter Email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="price">Daycare Price</label>
                  <input type="text" className="form-control" id="price" placeholder="Enter Price" name="price" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="licenseNumber">State of Iowa Daycare License Number</label>
                  <input type="text" className="form-control" id="licenseNumber" placeholder="Enter License Number" name="licenseNumber" value={licenseNumber} onChange={e => setLicenseNumber(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="availability">Daycare Has Availability?</label>
                  <input type="text" className="form-control" id="availability" placeholder="Enter True or False" name="availability" value={availability} onChange={e => setAvailability(e.target.value)} />
                </div>
              </div>
              <button type="submit" disabled={!canCreate} className="btn btn-primary">Submit</button>
            </form>
          </Container>
        </div>
      </div>
    </div>
)

}


