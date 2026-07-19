import {z} from "zod";
export const contactSchema=z.object({name:z.string().trim().min(2,"Please enter your name").max(100),email:z.email("Please enter a valid email"),company:z.string().trim().max(120).optional(),projectType:z.string().min(1,"Select a project type"),stage:z.string().min(1,"Select a project stage"),budget:z.string().min(1,"Select an estimated budget"),description:z.string().trim().min(20,"Please share at least 20 characters").max(3000),website:z.string().max(0,"Invalid submission").optional()});
export type ContactInput=z.infer<typeof contactSchema>;
