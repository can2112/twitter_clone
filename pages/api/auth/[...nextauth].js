import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';

export default NextAuth({
    providers:[
        TwitterProvider({
            clientId:process.env.TWITTER_CLIENT_ID,
            clientSecret:process.env.TWITTER_CLIENT_SECRET,
            Versionn:'2.0'
        }),
    ],
})