"use server";
import crypto from "crypto";

export async function run({ email }: { email: string }) {
  try {
    const listId = "b02625587e";

    await fetch(
      `https://us19.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      }
    );

    const subHash = crypto.createHash("md5").update(email).digest("hex");

    await fetch(
      `https://us19.api.mailchimp.com/3.0/lists/${listId}/members/${subHash}/tags`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        },
        body: JSON.stringify({
          tags: [{ name: "Beat the Game", status: "active" }],
        }),
      }
    );
  } catch (e) {
    console.error(e);
  }
}
console.log("test");
