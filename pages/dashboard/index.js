import { withAuth } from "../../auth/hooks"
import { Card, Button } from 'react-bootstrap'
import Head from "next/head"
import { useAuth } from '../../auth/AuthProvider'

function Dashboard() {

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
      <div className='h-screen m-3'>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant='primary' className='bg-blue-500'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default withAuth(Dashboard)