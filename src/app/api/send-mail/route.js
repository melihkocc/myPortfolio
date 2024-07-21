import nodemailer from 'nodemailer'

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Next.js Portfolio İletişim",
    text: `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`,
  }

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ "message": "E-posta başarıyla gönderildi!" }, {
      status: 200
    })
  } catch (error) {
    console.log(error)
    return Response.json({ "message": "E-posta gönderme sırasında bir hata oluştu." }, {
      status: 500
    })
  }
}