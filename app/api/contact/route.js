import { NextResponse } from "next/server";

import { sendEmail } from "@/actions/sendEmail";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phoneNumber = formData.get("phone_number");
    const request_nature = formData.get("request");
    const subject = formData.get("subject");
    const service = formData.get("service");
    const comment = formData.get("comment");

    const response = await sendEmail({
      email,
      name,
      phoneNumber,
      request_nature,
      subject,
      service,
      comment,
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Failed" }, { status: 500 });
    }
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
}
