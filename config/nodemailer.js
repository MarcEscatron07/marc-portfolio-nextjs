import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'marc.escatron07@gmail.com',
        pass: 'qkmikbdkvypexrcs'
    }
})

export const mailOptions = {
    to: 'marc.escatron07@gmail.com',
};