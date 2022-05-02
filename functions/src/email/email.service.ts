import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

/**
 * @param to recipient of email
 * @param id customer id for use in claim link
 */
async function sendWithSendGrid(to: string, id: string) {

  const mailTemplate = `
  <style>
    li {
      font-size: 20px
    }
  </style>
  <div>
    <h1>Thank you for purchasing with QuikMint</h1>
    <h2>You may now claim your NFT through the link below</h2>
    <p>${process.env.FRONTEND_URL}/claim/${id}</p>
    <h3>Things to remember</h3>
    <ul>
      <li>Do not share this link with anybody until you've claimed your NFT</li>
      <li>Keep your private key somewhere safe and off the internet</li>
      <li>Transactions may take up to a few minutes once initiated.</li>
      <li>check transaction status at https://etherscan.io/</li>
    </ul>
  </div>
  `

  const msg = {
    to: to,
    from: 'bonan@selfimonke.com',
    subject: 'Monke Delivery',
    html: mailTemplate,
  }
  try {
    sgMail.send(msg)
    console.log('Email sent')
  } catch (error) {
    console.error(error)
  }
}


export const emailService = { sendWithSendGrid }