import jwt from "jsonwebtoken";
import { IUser, IPublicUser, User } from "../user/user.model";

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

    if (existingUser) {
      throw new Error("Email is already registered.");
    }

    const newUser = new User({
      username,
      email,
      password,
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
