export const createRateLimitOptions = (windowMs: number, max: number) => ({
  windowMs,
  max,
  message: 'Too many request. Try this later.',
  standardHeaders: true,
  legacyHeaders: true,
})
