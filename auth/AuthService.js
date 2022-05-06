import firebase from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

class AuthService {
  constructor(firebaseApp) {
    this.auth = getAuth(firebaseApp)
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider()

    try {
      const userCred = await signInWithPopup(this.auth, new GoogleAuthProvider())
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

export default new AuthService()