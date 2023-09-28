import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
await prisma.post.create({
    data:{
       title:"fun",
       authorId:1
    }
 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })