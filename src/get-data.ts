import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const y=await prisma.post.update({
        where:{
            id:1
        },
        data:{
        title:"react"
        }
    })
    console.log(y)
const user=await prisma.user.findUnique({
    where:{
        id:1
    },
    include:{
        posts:true
    }
  
})
const x=await prisma.post.findUnique({
    where:{
      id:1
    }
 })
 if(x!=null)
user?.posts.push(x)

console.log(user?.posts)
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