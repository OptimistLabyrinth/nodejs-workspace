export const createRateLimitOptions = (windowMs: number, max: number): {
  windowMs: number
  max: number
  message: string
  standardHeaders: boolean
  legacyHeaders: boolean
} => ({
  windowMs,
  max,
  message: 'Too many request. Try this later.',
  standardHeaders: true,
  legacyHeaders: true,
})
