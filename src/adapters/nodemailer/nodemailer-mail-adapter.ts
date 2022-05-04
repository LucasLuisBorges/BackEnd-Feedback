import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "b5ff4fe10cfe7b",
        pass: "a8afed7c988443"
      }
    });

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Lucas Borges <lucasluisborges1205@gmail.com>',
      subject,
      html: body,
    })
  }
}