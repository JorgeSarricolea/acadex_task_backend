import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function hashPassword(password) {
  const saltRounds = parseInt(process.env.SALT_ROUNDS, 10) || 10;
  return await bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

export function generateToken(payload, secret, options = {}) {
  return jwt.sign(payload, secret, options);
}
