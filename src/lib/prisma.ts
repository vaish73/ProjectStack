import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<PrismaClient['$extends']> | undefined;
};

let prisma: ReturnType<PrismaClient['$extends']>;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient().$extends(withAccelerate());
} else {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient().$extends(withAccelerate());
  }
  prisma = globalForPrisma.prisma;
}

export default prisma;
