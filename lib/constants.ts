import { BrainCircuit, BriefcaseBusiness, CircleCheckBig, CloudCog, Code2, Layers3, PanelsTopLeft, ShieldCheck } from "lucide-react";

export const navLinks = [{label:"Home",href:"/#home"},{label:"Services",href:"/#services"},{label:"Our Work",href:"/#work"},{label:"Process",href:"/#process"},{label:"About",href:"/#about"},{label:"Contact",href:"/#contact"}];
export const services = [
 {title:"AI Solutions",icon:BrainCircuit,description:"Custom AI assistants, intelligent automation, document processing, retrieval-augmented generation, and AI-powered workflows designed around real business operations.",tags:["AI Assistants","RAG","Automation"]},
 {title:"SaaS Development",icon:PanelsTopLeft,description:"Multi-tenant SaaS platforms with secure authentication, permissions, subscriptions, administration tools, analytics, and scalable backend architecture.",tags:["Multi-Tenant","Authentication","Billing"]},
 {title:"Web Applications",icon:Code2,description:"Responsive customer portals, internal platforms, dashboards, marketplaces, and workflow applications built with intuitive user experiences.",tags:["Portals","Dashboards","Integrations"]},
 {title:"Cloud & DevOps",icon:CloudCog,description:"Secure cloud architecture, automated deployments, infrastructure as code, monitoring, database design, and performance optimization.",tags:["AWS and Azure","CI/CD","Infrastructure"]}
];
export const values=[
 {title:"Scalable Architecture",icon:Layers3,description:"Systems designed to grow with your users, traffic, data, and evolving product requirements."},
 {title:"Secure by Design",icon:ShieldCheck,description:"Security, access control, data protection, and maintainability considered throughout the development lifecycle."},
 {title:"Reliable Delivery",icon:CircleCheckBig,description:"Structured milestones, transparent communication, testable deliverables, and production-focused engineering."},
 {title:"Business-Focused Engineering",icon:BriefcaseBusiness,description:"Technology decisions aligned with practical business objectives rather than unnecessary technical complexity."}
];
export const processSteps=[
 {n:"01",title:"Discover",description:"Understand the business, users, requirements, risks, priorities, and success criteria."},
 {n:"02",title:"Architect",description:"Define product structure, data, APIs, infrastructure, security, and the roadmap."},
 {n:"03",title:"Build",description:"Develop through focused milestones, clean code, testing, reviews, and regular demos."},
 {n:"04",title:"Launch",description:"Complete production testing, deployment, monitoring, documentation, and preparation."},
 {n:"05",title:"Scale",description:"Improve performance, add capabilities, strengthen infrastructure, and support growth."}
];
export const capabilities=[
 {type:"AI & Automation",title:"AI Operations Platform",description:"A secure architecture for intelligent document processing, workflow automation, structured AI outputs, and operational oversight.",variant:"ai"},
 {type:"SaaS Development",title:"Multi-Tenant SaaS Platform",description:"A scalable foundation with authentication, role-based permissions, tenant isolation, billing, administration, and analytics.",variant:"saas"},
 {type:"Cloud Infrastructure",title:"Cloud Modernization",description:"A production architecture with containerized services, managed databases, secure storage, monitoring, automated deployment, and recovery planning.",variant:"cloud"}
];
export const techGroups=[{title:"Frontend",items:["React","Next.js","TypeScript","Tailwind CSS"]},{title:"Backend",items:["Node.js","Python","FastAPI",".NET"]},{title:"Data & AI",items:["PostgreSQL","Vector Search","OpenAI","Anthropic"]},{title:"Cloud & Delivery",items:["AWS","Azure","Docker","Terraform"]}];
