import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connecToDB } from "@utils/database/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user?.email,
            });
            session.user = sessionUser._id.toString();
            return session;
        },
        async signIn({ user }) {
            try {
                await connecToDB();

                const userExist = await User.findOne({
                    email: user.email,
                });

                if (!userExist) {
                    await User.create({
                        user_name: user.name?.replace(" ", "").toLowerCase(),
                        image: user.image,
                        email: user.email,
                    });
                }
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
            return false;
        },
    },
});

export { handler as GET, handler as POST };
