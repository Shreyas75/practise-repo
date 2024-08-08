import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'Email', type: 'text', placeholder: 'Email' },
          password: { label: 'Password', type: 'password', placeholder: 'Password' },
        },
        async authorize(credentials: any) {
            console.log(credentials)
            return {
                id: "user1",
                name: "Shreyas",
                email: "Shrey@mail.com"
            };
        },
      })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({session, token, user}: any) => {
      if(session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    }
  }
})

export { handler as GET, handler as POST }