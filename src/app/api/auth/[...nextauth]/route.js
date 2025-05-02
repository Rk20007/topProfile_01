import clientPromise from "@/libs/mongoClient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const allowedEmails = ["robinkhan1122111@gmail.com", "anotheremail@example.com"];
  
      if (allowedEmails.includes(user.email)) {
        return true; // Proceed to callbackUrl (like /account)
      } else {
        return '/payment'; // Redirect disallowed users to payment page
      }
    },
  }
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
