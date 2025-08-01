import {FastifyInstance} from "fastify";
import { prisma } from '../lib/prisma';

export async function memoriesRoutes(app: FastifyInstance) {

app.get('/memories', async () => { 
    const memories = await prisma.memory.findMany({
        orderBy:{
            createdAt: 'asc',
        },
    })
    return memories
  
})

 app.get('/memories', async () => { 
  
})
app.post('/memories', async () => { 
  
})

app.put('/memories', async () => { 
  
})

app.delete('/memories', async () => { 
  
})
}