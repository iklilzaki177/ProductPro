import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertNewsletterSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const contactMessage = await storage.createContactMessage(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Contact message submitted successfully",
        data: contactMessage
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: validationError.message || "Invalid input data" 
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  app.post('/api/newsletter', async (req: Request, res: Response) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getNewsletterByEmail(validatedData.email);
      
      if (existingSubscriber) {
        return res.status(200).json({
          success: true,
          message: "Email is already subscribed",
          data: existingSubscriber
        });
      }
      
      const newsletter = await storage.createNewsletter(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Newsletter subscription successful",
        data: newsletter
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: validationError.message || "Invalid input data" 
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
