import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { getToken } from "next-auth/jwt";

// let userAccount = null;
// let token = null;

export const authOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req){
        
        const res = await fetch("http://localhost:4444/seller/login", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
        })

        const user = await res.json();

        // token = await getToken({ req })

        if(res.ok && user) {
          // userAccount = user;
            return user
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;  // Setting token in session
      return session;
    },
   
  }
  
 
}

export default NextAuth(authOptions)