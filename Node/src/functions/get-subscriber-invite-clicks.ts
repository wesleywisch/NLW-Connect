import { redis } from "../redis/client";

type GetSubscriberInviteClicksProps = {
  subscriberId: string;
}

export async function getSubscriberInviteClicks({ subscriberId }: GetSubscriberInviteClicksProps) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}