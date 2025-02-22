import { redis } from "../redis/client";

type GetSubscriberInvitesCountProps = {
  subscriberId: string;
}

export async function getSubscriberInvitesCount({ subscriberId }: GetSubscriberInvitesCountProps) {
  const count = await redis.zscore('referral:ranking', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}