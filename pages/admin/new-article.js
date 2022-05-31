import { addDoc, collection, Timestamp } from 'firebase/firestore'
import Head from 'next/head'
import { useRef, useState } from 'react'
import { Form, Card, Row, InputGroup, Button, Col, Alert } from 'react-bootstrap'
import { withAdmin } from '../../auth/hooks'
import { db } from '../../utils/fire'

function NewForm() {
  const titleRef = useRef()
  const authorRef = useRef()
  const bodyRef = useRef()
  const tagnameRef = useRef()

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  async function handleArticleSubmit(e) {
    e.preventDefault()



    const aData = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      tagname: tagnameRef.current.value,
      body: bodyRef.current.value,
      timestamp: Timestamp.now(),
    }

    const articlesCollection = collection(db, 'articles')
    addDoc(articlesCollection, aData)
      .then(() => setSuccess(true))
      .catch(() => setError(true))
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
        <title>Admin Article Setup | Quikmint</title>
      </Head>
      <main className='flex items-center justify-center'>
        <Card className='p-3 md:m-10 flex flex-col'>
          {error && <Alert variant='danger'>Error submitting article! Please tell Theo</Alert>}
          {success && (
            <Alert variant='success'>
              Article uploaded. Please wait 30 minutes or so for it to show up
            </Alert>
          )}
          <Form className='space-y-3' onSubmit={handleArticleSubmit}>
            <Row id='top'>
              <Form.Group id='left' className='space-y-2' as={Col} xs='auto'>
                <Form.Label>Title</Form.Label>
                <Form.Control required placeholder='Article Title' ref={titleRef} />
              </Form.Group>
              <Form.Group id='right' className='space-y-2' as={Col} xs='auto'>
                <Form.Label>Author</Form.Label>
                <Form.Control required placeholder='Your Name' ref={authorRef} />
              </Form.Group>
              <Form.Group id='right' className='space-y-2' as={Col} xs='auto'>
                <Form.Label>URL Title</Form.Label>
                <InputGroup className='mb-3'>
                  <InputGroup.Text id='basic-addon3'>https://quikmint.io/blog/</InputGroup.Text>
                  <Form.Control required id='basic-url' aria-describedby='basic-addon3' ref={tagnameRef} />
                </InputGroup>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group>
                <Form.Label>Article Body</Form.Label>
                <Form.Control required as='textarea' rows={20} ref={bodyRef} />
              </Form.Group>
            </Row>
            <Form.Group>
              <Button type='submit' className='bg-blue-500'>
                Post
              </Button>
            </Form.Group>
          </Form>
        </Card>
      </main>
    </>
  )
}

export default withAdmin(NewForm)
