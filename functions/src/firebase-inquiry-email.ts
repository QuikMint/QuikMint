import { firestore } from 'firebase-functions'
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


async function sendEmail(html: string) {
  const msg = {
    to: ['theo.wallace@quikmint.io', 'ian@quikmint.io'],
    from: 'inquiries@quikmint.io',
    subject: 'QuikMint inquiry',
    html: html,
  }
  try {
    sgMail.send(msg)
    console.log('Email sent')
  } catch (error) {
    console.error(error)
  }
}

export const firebaseInquiryEmail = firestore.document('inquiries/{docId}').onCreate(snap => {
	sendEmail(`
	<p>
	${JSON.stringify(snap.data())}
	</p>
	`)
})
