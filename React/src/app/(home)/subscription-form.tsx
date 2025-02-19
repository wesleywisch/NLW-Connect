'use client'
import { ArrowRight, Mail, User } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';

import { subscribeToEvent } from '../../http/api';
import { InputField, InputIcon, InputRoot } from '../../components/Input';
import { Button } from '../../components/Button';

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { register, handleSubmit, formState: { errors } } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema)
  })

  async function onSubscribe({ email, name }: SubscriptionSchema) {
    const referrer = searchParams.get('referrer')

    const { subscriberId } = await subscribeToEvent({ name, email, referrer })

    router.push(`/invite/${subscriberId}`)
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>

            <InputField 
              type="text" 
              placeholder="Nome completo" 
              {...register('name')}
            />
          </InputRoot>

          {errors?.name && (
            <p className="text-danger text-xs font-semibold">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>

            <InputField 
              type="email" 
              placeholder="E-mail" 
              {...register('email')}
            />
          </InputRoot>

          {errors?.email && (
            <p className="text-danger text-xs font-semibold">{errors.email.message}</p>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}