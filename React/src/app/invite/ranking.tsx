import Image from "next/image";

import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'
import cooper from '../../assets/medal-cooper.svg'

export function Ranking(){
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="txt-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1°</span> | Wesley
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image 
            src={gold} 
            alt="Medalha de ouro" 
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span> | Wesley
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image 
            src={silver} 
            alt="Medalha de prata" 
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span> | Wesley
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image 
            src={cooper} 
            alt="Medalha de bronze" 
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}