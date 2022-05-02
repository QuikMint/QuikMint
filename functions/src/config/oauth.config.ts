import { expressjwt, GetVerificationKey } from 'express-jwt'
import jwks from 'jwks-rsa'

let jwtCheck = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKS_URI,
  }) as GetVerificationKey,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ['RS256'],
})

export default jwtCheck