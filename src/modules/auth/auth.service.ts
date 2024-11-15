import jwt from "jsonwebtoken";
import { IUser, IPublicUser, User } from "../user/user.model";
import bcrypt from "bcryptjs";

export class AuthService {
  async login(username: string, password: string): Promise<string> {
    if (username === "admin" && password === "password") {
      const token = jwt.sign({ username }, process.env.JWT_SECRET || "secret", {
        expiresIn: "1h",
      });
      return token;
    } else {
      throw new Error("Invalid credentials");
    }
  }

  async register(
    username: string,
    email: string,
    password: string
  ): Promise<IPublicUser> {
    const existingUser = await User.findOne({ email });
    const existingUserWithUsername = await User.findOne({ username });

    if (existingUser?.email === email) {
      throw new Error("Email is already registered.");
    }

    if (existingUserWithUsername?.username === username) {
      throw new Error("Username is already taken.");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync("B4c0//", salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const userWithoutPassword: IPublicUser = {
      _id: newUser._id.toString(),
      username: newUser.username,
      email: newUser.email,
      createdAt: newUser.createdAt,
    };
    return userWithoutPassword;
  }

  async getAuth() {
    return "Auth route";
  }
}
