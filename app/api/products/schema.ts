import { z } from "zod"

const schema = z.object({
    name: z.string().min(5).max(30),
    category: z.string()
})

export default schema;