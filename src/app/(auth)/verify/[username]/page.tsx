'use client';

import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { verifySchema } from '@/schemas/verifySchema'
import { ApiResponse } from '@/types/ApiResponse'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from "sonner"
import * as z from 'zod'
import { useParams, useRouter } from 'next/navigation';

const VerifyAccount = () => {
  const router = useRouter()
  const params = useParams<{ username: string }>()
  
  const form = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
  });

  const onSubmit = async (data: z.infer<typeof verifySchema>) => {
    try {
      const response = await axios.post(`/api/verify-code`, {
        username: params.username,
        code: data.code
      })
      toast('Success', {
        description: <span className="text-green-500">{response.data.message}</span>,
      });
      router.replace('/dashboard') // ✅ redirect after verification
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast('Verification Failed', {
        description: (
          <span className="text-red-500">
            {axiosError.response?.data.message ?? 'An error occurred. Please try again.'}
          </span>
        ),
      });
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-background text-foreground">
      <div className="w-full max-w-md p-8 space-y-8 bg-card text-card-foreground rounded-xl shadow-md border border-border">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight mb-4">
            Verify Your Account
          </h1>
          <p className="text-muted-foreground">
            Enter the verification code sent to your email
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="code"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Code</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">Verify</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default VerifyAccount
