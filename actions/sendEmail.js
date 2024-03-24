import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

import { emailTemplate } from "@/utils/emailTemplate";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

export const sendEmail = async ({
  email,
  name,
  phoneNumber,
  request_nature,
  subject,
  service,
  comment,
}) => {
  try {
    await transporter.sendMail({
      from: `"Ameex Website" ${process.env.NEXT_PUBLIC_EMAIL_USERNAME}`,
      to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
      subject: "Email From Ameex Website",
      html: emailTemplate({
        email,
        name,
        phoneNumber,
        request_nature,
        subject,
        service,
        comment,
      }),
    });
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
};
