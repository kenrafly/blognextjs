import User from "../models/user.model";
import { connect } from "../mongodb/mongoose";

interface EmailAddress {
  email_address: string;
}
interface user {
  id: string;
  firstName: string;
  lastName: string;
  img_url: string;
  email_addresses: EmailAddress[];
  username: string;
}

export const createOrUpdateUser = async ({
  id,
  firstName,
  lastName,
  img_url,
  email_addresses,
  username,
}: user) => {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      {
        clerkId: id,
      },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
          profilePicture: img_url,
          email: email_addresses[0].email_address,
          username,
        },
      },
      { new: true, upsert: true }
    );
    return user;
  } catch (error: any) {
    console.log("Error connecting to MongoDB", error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await connect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};
