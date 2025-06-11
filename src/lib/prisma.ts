import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<PrismaClient['$extends']> | undefined;
};

function createPrismaClient() {
  const client = new PrismaClient();
  return client.$extends(withAccelerate());
}

const prisma =
  process.env.NODE_ENV === 'production'
    ? createPrismaClient()
    : globalForPrisma.prisma ?? (globalForPrisma.prisma = createPrismaClient());

export default prisma;
