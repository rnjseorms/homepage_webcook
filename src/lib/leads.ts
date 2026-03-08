import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

export interface Lead {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  phone: string;
  source: string;
}

const DATA_PATH = join(process.cwd(), "data", "leads.json");

function ensureFile() {
  if (!existsSync(DATA_PATH)) {
    writeFileSync(DATA_PATH, "[]", "utf-8");
  }
}

export function getLeads(): Lead[] {
  ensureFile();
  const raw = readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw);
}

export function addLead(lead: Omit<Lead, "id">): Lead {
  const leads = getLeads();
  const newLead: Lead = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    ...lead,
  };
  leads.unshift(newLead);
  writeFileSync(DATA_PATH, JSON.stringify(leads, null, 2), "utf-8");
  return newLead;
}
