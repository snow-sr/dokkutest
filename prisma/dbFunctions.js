// prisma
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// get all musics
export const getAllMusics = async () => {
    const musics = await prisma.music.findMany()
    return musics
}

// get music by id
export const getMusicById = async (id) => {
    const music = await prisma.music.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return music
}

export const createMusic = async (music) => {
    const newMusic = await prisma.music.create({
        data: music
    })
    return newMusic
}


export const createAlotOfMusics = async (musics) => {
    const newMusics = await prisma.music.createMany({
        data: musics
    })
    return newMusics
}

// model Music {
//   id        Int @id @default (autoincrement())
//   title     String
//   artist    String
//   album     String
//   year      Int
//   createdAt DateTime @default (now())
//   updatedAt DateTime @updatedAt
// }



