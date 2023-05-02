// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { transporter, mailOptions } from '../../config/nodemailer.js'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log('Contact API > req', req)  
  // console.log('Contact API > res', res)

  if(req.method === 'POST') {
    const data = req.body;
    console.log('Contact API > data', data)
    let errCnt: number = 0;
    for(const key in data) {
      if(data[key] && typeof data[key] === 'string' && data[key].trim() === '') {
        errCnt++;
      }
    }

    // console.log('Contact API > errCnt', errCnt)
    if(errCnt === 0) {
      try {
        const payload = {
          ...mailOptions,
          from: `"${data.name}" <${data.email}>`,
          subject: `${data.subject ?? ''}`,
          text: `${data.message}`,
          html: `<p>${data.message}</p>`
        };

        await transporter.sendMail(payload);

        // return res.status(200).json({ message: 'Mail sent successfully!' });
        return res.status(200).json({ message: JSON.stringify(payload) });
      } catch(error: any) {
        const errMessage = error && error.message ? error.message : 'Bad Request';
        return res.status(400).json({ message: errMessage });
      }
    }
  }

  return res.status(400).json({ message: 'Bad Request' });
}
