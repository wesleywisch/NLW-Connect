import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";
import { getSubscriberInviteClicks, getSubscriberInviteCount, getSubscriberRankingPosition } from "../../../http/api";

type StatsProps = {
  subscriberId: string;
}

export async function Stats({ subscriberId }: StatsProps){
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberId)
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId)
  const { position: rankingPosition } = await getSubscriberRankingPosition(subscriberId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
        <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            {accessCount}
          </span>

          <span className="text-sm text-gray-300 leading-none text-center">
            Acessos ao link
          </span>

          <MousePointerClick className="size-5 text-puple absolute top-3 left-3" />
        </div>

        <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            {inviteCount}
          </span>

          <span className="text-sm text-gray-300 leading-none text-center">
            Incrições feitas
          </span>

          <BadgeCheck className="size-5 text-puple absolute top-3 left-3" />
        </div>

        <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            {rankingPosition ? `${rankingPosition}°` : '-'}
          </span>

          <span className="text-sm text-gray-300 leading-none text-center">
            Posição no ranking
          </span>

          <Medal className="size-5 text-puple absolute top-3 left-3" />
        </div>
      </div>
  )
}