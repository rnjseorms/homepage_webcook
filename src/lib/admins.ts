import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { createHash } from "crypto";

export interface Admin {
  id: string;
  username: string;
  passwordHash: string;
  createdAt: string;
}

const DATA_PATH = join(process.cwd(), "data", "admins.json");

function ensureFile() {
  const dir = dirname(DATA_PATH);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (!existsSync(DATA_PATH)) {
    writeFileSync(DATA_PATH, "[]", "utf-8");
  }
}

function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

export function getAdmins(): Admin[] {
  ensureFile();
  return JSON.parse(readFileSync(DATA_PATH, "utf-8"));
}

export function findAdmin(username: string): Admin | undefined {
  return getAdmins().find((a) => a.username === username);
}

export function registerAdmin(username: string, password: string): { success: boolean; error?: string } {
  const admins = getAdmins();

  if (admins.find((a) => a.username === username)) {
    return { success: false, error: "이미 존재하는 아이디입니다." };
  }

  const newAdmin: Admin = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    username,
    passwordHash: hashPassword(password),
    createdAt: new Date().toISOString(),
  };

  admins.push(newAdmin);
  writeFileSync(DATA_PATH, JSON.stringify(admins, null, 2), "utf-8");
  return { success: true };
}

export function verifyAdmin(username: string, password: string): boolean {
  const admin = findAdmin(username);
  if (!admin) return false;
  return admin.passwordHash === hashPassword(password);
}
