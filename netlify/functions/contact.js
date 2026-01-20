const RESEND_API_URL = "https://api.resend.com/emails";

const buildEmail = ({ name, email, company, message }) => {
  const companyLine = company ? `Company: ${company}` : "Company: (not provided)";
  return [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    companyLine,
    "",
    "Message:",
    message,
  ].join("\n");
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  if (!process.env.RESEND_API_KEY) {
    return { statusCode: 500, body: "Missing RESEND_API_KEY" };
  }

  const resendFrom = process.env.RESEND_FROM || "onboarding@resend.dev";
  const resendTo = process.env.RESEND_TO || "arnoldnkosi97@gmail.com";

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return { statusCode: 400, body: "Invalid JSON payload" };
  }

  const { name, email, company = "", message } = payload || {};
  if (!name || !email || !message) {
    return { statusCode: 400, body: "Missing required fields" };
  }

  const emailBody = {
    from: resendFrom,
    to: resendTo,
    reply_to: email,
    subject: `New message from ${name}`,
    text: buildEmail({ name, email, company, message }),
  };

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return { statusCode: response.status, body: errorText };
    }

    return { statusCode: 200, body: "OK" };
  } catch (error) {
    return { statusCode: 500, body: "Email send failed" };
  }
};
