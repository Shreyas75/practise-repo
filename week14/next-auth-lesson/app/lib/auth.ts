import CredentialsProvider from 'next-auth/providers/credentials';


export const NEXT_AUTH = {
    providers:[
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
              username: {label: 'email', type: 'text', placeholder: "bruh@mail.com"},
              password: {label: 'password', type: 'password', placeholder: "Password"},
          },
          async authorize(credentials: any){
              console.log(credentials)
              return {
                  id: "user1",
                  name: "Shreyas",
                  email: "shreyas@mail.com"
  
  
              }
          }
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      session: ({session, token, user}: any) => {
          console.log(session)
          if(session && session.user){
              session.user.id = token.userId;
          }
          return session
      }
    }
  }