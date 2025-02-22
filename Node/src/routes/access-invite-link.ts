import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { env } from '../env'
import { accessInviteLink } from '../functions/access-invite-link'
import { redis } from '../redis/client'

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async (app) => {
  app.get('/invites/:subscriberId', {
    schema: {
      summary: 'Access invite link and redirects user',
      tags: ['referral'],
      params: z.object({
        subscriberId: z.string(),
      }),
      response: {
        201: z.object({
          subscriberId: z.string(),
        })
      },
    }
  }, async (req, res) => {
    const { subscriberId } = req.params

    await accessInviteLink({ subscriberId })

    const redirectUrl = new URL(env.WEB_URL)

    redirectUrl.searchParams.set('referrer', subscriberId)

    return res.redirect(redirectUrl.toString(), 302)
  })
}