"use server";
import Contact from "@/models/Contact";
import dbConnect from "@/lib/dbConnect";

export const submitAction = async (formData) => {
  await dbConnect();

  const data = {
    Name: formData.get("Name"),
    Email: formData.get("Email"),
    Number: formData.get("Number"),
    Subject: formData.get("Subject"),
    Message: formData.get("Message"),
  };

  try {
    const contact = new Contact(data);
    await contact.save();
    console.log("Data saved:", contact);
  } catch (error) {
    console.error("Error saving data:", error);
  }
};
