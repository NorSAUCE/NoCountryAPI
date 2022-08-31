const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendMail = (email) => {
    const msg = {
        to: email,
        from: process.env.SENDGRID_EMAIL,
        subject: '¡Bienvenido a Garage Store!',
        text: '¡Bienvenido a Garage Store!, Gracias por Registrarte!',
        html: `
        ¡Bienvenido a Garage Store!, Gracias por Registrarte!
            `,
      }
      
    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })
      
}


module.exports = {
    sendMail
}