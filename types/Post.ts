import { z } from 'zod'

export const Post = z.object({
  id: z.number(),
  date: z.string(),
  status: z.string(),
  title: z.object({
    rendered: z.string()
  }),
  content: z.object({
    rendered: z.string()
  })
})


export type PostType = z.infer<typeof Post>
