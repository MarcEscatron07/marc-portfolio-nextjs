import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        // user: 'marc.escatron07@gmail.com',
        // pass: 'qkmikbdkvypexrcs',
        user: '8fe9241b801557',
        pass: '2c63074963522a'
    }
})

export const mailOptions = {
    to: 'marc.escatron07@gmail.com',
};