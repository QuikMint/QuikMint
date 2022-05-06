import { app } from '../utils/fire'
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithCredential, signOut } from 'firebase/auth'

class AuthService {
  constructor(firebaseApp) {
    this.auth = getAuth(firebaseApp)
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider()

    try {
      const userCred = await signInWithRedirect(this.auth, new GoogleAuthProvider())
			sign
      return { user: userCred.user }
    } catch (e) {
      return {
        error: e.message,
      }
    }
  }
  async logout() {
    await signOut(this.auth)
  }
}

export default new AuthService(app)