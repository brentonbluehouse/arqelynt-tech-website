"use client";
import { motion, useReducedMotion } from "framer-motion";import { ReactNode } from "react";
export function Reveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}){const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:16}} whileInView={reduce?{}:{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.45,delay}}>{children}</motion.div>}
