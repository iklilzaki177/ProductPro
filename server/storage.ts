import { 
  users, type User, type InsertUser,
  contactMessages, type ContactMessage, type InsertContactMessage,
  newsletters, type Newsletter, type InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  
  // Newsletter methods
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  getNewsletter(id: number): Promise<Newsletter | undefined>;
  getNewsletterByEmail(email: string): Promise<Newsletter | undefined>;
  getAllNewsletters(): Promise<Newsletter[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private newsletters: Map<number, Newsletter>;
  
  private userCurrentId: number;
  private contactMessageCurrentId: number;
  private newsletterCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.newsletters = new Map();
    
    this.userCurrentId = 1;
    this.contactMessageCurrentId = 1;
    this.newsletterCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact message methods
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    const createdAt = new Date().toISOString();
    const message: ContactMessage = { ...insertMessage, id, createdAt };
    this.contactMessages.set(id, message);
    return message;
  }
  
  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }
  
  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
  
  // Newsletter methods
  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.newsletterCurrentId++;
    const createdAt = new Date().toISOString();
    const newsletter: Newsletter = { ...insertNewsletter, id, createdAt };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
  
  async getNewsletter(id: number): Promise<Newsletter | undefined> {
    return this.newsletters.get(id);
  }
  
  async getNewsletterByEmail(email: string): Promise<Newsletter | undefined> {
    return Array.from(this.newsletters.values()).find(
      (newsletter) => newsletter.email === email
    );
  }
  
  async getAllNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }
}

export const storage = new MemStorage();
