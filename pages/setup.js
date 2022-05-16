import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../auth/AuthProvider'
import { Form, Alert, Col, Row, InputGroup, Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Head from 'next/head'
import { withNotSetupUser } from '../auth/hooks'

function Setup() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

	const firstRef = useRef()
	const lastRef = useRef()
	const emailRef = useRef()
	const phoneRef = useRef()
	const monthRef = useRef()
	const dayRef = useRef()
	const yearRef = useRef()
	const projectRef = useRef()
	const websiteRef = useRef()
	const descriptionRef = useRef()

  const router = useRouter()
  const { currentUser, setupUser } = useAuth()

  async function handleSetup(e) {
    e.preventDefault()
		setLoading(true)
		const setupData = {
      name: firstRef.current.value + ' ' + lastRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      birthday: monthRef.current.value + ' ' + dayRef.current.value + ', ' + yearRef.current.value,
      project: projectRef.current.value,
      website: websiteRef.current.value,
      description: descriptionRef.current.value,
    }
		try {
			await setupUser(setupData)
      router.push('/dashboard')
		} catch (err) {
			console.log(err)
		}
		setLoading(false)
  }

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
          crossOrigin='anonymous'
        />
      </Head>
      <div className='my-3 mx-1'>
        { error && <Alert dismissible variant='danger'>
          <Alert.Heading>{error}</Alert.Heading>
          <p>Try filling out missing fields.</p>
        </Alert>}
        <Card className='p-3'>
          <Form className='space-y-3' onSubmit={handleSetup}>
            <Row className='space-y-3'>
              <Form.Group id='left' className='border-r-2 space-y-3 lg:w-1/2' as={Col} xs='auto'>
                <Form.Text>Personal Details</Form.Text>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <InputGroup>
                    <Form.Control placeholder='First' ref={firstRef} />
                    <Form.Control placeholder='Last' ref={lastRef} />
                  </InputGroup>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    ref={emailRef}
                    readOnly
                    defaultValue={currentUser?.email || 'test@gmail.com'}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control ref={phoneRef} type='phone' placeholder='7039696969' />
                </Form.Group>
                <Form.Group className='pb-3 mb-2 border-b-2'>
                  <Form.Label>Date of Birth</Form.Label>
                  <InputGroup>
                    <Form.Select ref={monthRef} placeholder='Month'>
                      <option default value=''>
                        Month
                      </option>
                      <option value='January'>January</option>
                      <option value='February'>February</option>
                      <option value='March'>March</option>
                      <option value='April'>April</option>
                      <option value='May'>May</option>
                      <option value='June'>June</option>
                      <option value='July'>July</option>
                      <option value='August'>August</option>
                      <option value='September'>September</option>
                      <option value='October'>October</option>
                      <option value='November'>November</option>
                      <option value='December'>December</option>
                    </Form.Select>
                    <Form.Select ref={dayRef} placeholder='Day'>
                      <option default value=''>
                        Day
                      </option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                      <option value='11'>11</option>
                      <option value='12'>12</option>
                      <option value='13'>13</option>
                      <option value='14'>14</option>
                      <option value='15'>15</option>
                      <option value='16'>16</option>
                      <option value='17'>17</option>
                      <option value='18'>18</option>
                      <option value='19'>19</option>
                      <option value='20'>20</option>
                      <option value='21'>21</option>
                      <option value='22'>22</option>
                      <option value='23'>23</option>
                      <option value='24'>24</option>
                      <option value='25'>25</option>
                      <option value='26'>26</option>
                      <option value='27'>27</option>
                      <option value='28'>28</option>
                      <option value='29'>29</option>
                      <option value='30'>30</option>
                      <option value='31'>31</option>
                    </Form.Select>
                    <Form.Control ref={yearRef} type='year' placeholder='Year' />
                  </InputGroup>
                </Form.Group>
                <Form.Text>About Your Project</Form.Text>
                <Form.Group as={Col} className='space-y-3'>
                  <Form.Group>
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control ref={projectRef} placeholder='ExamplePunks' />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Project Website</Form.Label>
                    <Form.Control ref={websiteRef} placeholder='https://example.com' />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Select a Profile Picture</Form.Label>
                    <Form.Control type='file' />
                  </Form.Group>
                </Form.Group>
              </Form.Group>

              <Form.Group as={Col} xs='auto' id='right' className='lg:w-1/2'>
                <Form.Label className='text-gray-500'>
                  Tell us a bit about what you{"'"}re doing. (What sort of NFTs, when did you start,
                  how many sales have you made, etc.)
                </Form.Label>
                <Form.Control ref={descriptionRef} as='textarea' className='lg:h-96' />
              </Form.Group>
              <Form.Group>
                <Button variant='primary' className='bg-blue-500' type='submit' disabled={loading}>
                  Submit
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </Card>
      </div>
    </>
  )
}

export default withNotSetupUser(Setup)