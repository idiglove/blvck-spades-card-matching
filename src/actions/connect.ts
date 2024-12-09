"use server";
// import { MongoClient } from "mongodb";
// import crypto from "crypto";

// const uri = "mongodb+srv://admin:ume!CFH7uhn3xua.jpk@m0.qpmt6.mongodb.net";
// const client = new MongoClient(uri);

// export async function run() {
//   // time: number, name: string, email: string
//   try {
//     const database = client.db("blvck_spades");
//     const highScorers = database.collection("high_scorers");
//     const email = "test-faith@inboxkitten.com";
//     // const res = await fetch("https://us10.api.mailchimp.com/3.0/lists", {
//     //   headers: {
//     //     Authorization: `Bearer 69530487538836c83995e21af889d6ea-us10`,
//     //   },
//     // });

//     const addMember = await fetch(
//       "https://us10.api.mailchimp.com/3.0/lists/b301b6ae45/members",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer 69530487538836c83995e21af889d6ea-us10`,
//         },
//         body: JSON.stringify({
//           email_address: email,
//           status: "subscribed",
//         }),
//       }
//     );

//     const listId = "b301b6ae45";
//     const memberEmail = email;
//     // const memberId = "e1a98e687d05912de966c96400074cac";
//     const lowercasedEmail = memberEmail.toLowerCase();
//     const subHash = crypto
//       .createHash("md5")
//       .update(lowercasedEmail)
//       .digest("hex");
//     const addTag = await fetch(
//       `https://us10.api.mailchimp.com/3.0/lists/${listId}/members/${subHash}/tags`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer 69530487538836c83995e21af889d6ea-us10`,
//         },
//         body: JSON.stringify({
//           tags: [{ name: "High Scorer", status: "active" }],
//         }),
//       }
//     );

//     // console.log({ res: JSON.stringify(await addTag.json()) });

//     // highScorers.insertOne({
//     //   name,
//     //   email,
//     //   time,
//     // });
//   } finally {
//     await client.close();
//   }
// }
console.log("test");
