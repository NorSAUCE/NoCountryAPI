const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')


const sendMail = (email) => {
    const msg = {
        to: email,
        from:'c6g29ftmern@gmail.com' ,
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