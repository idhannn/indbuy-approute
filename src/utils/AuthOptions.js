import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Masukkan Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Masukkan Password",
        },
      },
      async authorize(credentials) {
        const user = {
          id: 1,
          username: "John Den",
          email: "johnDoe@gmail.com",
          password: "321",
        };
      },
    }),
  ],
};
