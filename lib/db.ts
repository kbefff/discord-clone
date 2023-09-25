import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

//globalThis is not affected by hot reload
export const db = globalThis.prisma || new PrismaClient() // this stops hot reload from initializing PrismaClient every time the code changes

if (process.env.NODE_ENV !== "production") globalThis.prisma = db