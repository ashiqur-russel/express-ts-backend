import jwt from "jsonwebtoken";

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

  async register(username: string, password: string): Promise<string> {
    return `User ${username} registered successfully`;
  }

  async getAuth() {
    return "Auth route";
  }
}
