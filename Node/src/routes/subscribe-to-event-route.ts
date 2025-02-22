import type { FastifyInstance } from 'fastify'
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export async function subscribeToEventRoute<FastifyPluginAsyncZod>(app: FastifyInstance) {
  app.post('/subscriptions', {
    schema: {
      summary: 'Subscribes someone to the event',
      tags: ['subscription'],
      body: z.object({
        name: z.string(),
        email: z.string().email(),
      }),
      response: {
        201: z.object({
          name: z.string(),
          email: z.string().email(),
        })
      },
    }
  }, async (req, res) => {
    const { name, email } = req.body
  
    return res.status(201).send({
      name,
      email
    })
  })
}