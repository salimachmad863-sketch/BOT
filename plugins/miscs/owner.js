export const run = {
   usage: ['owner'],
   category: 'miscs',
   async: async (m, { client }) => {
      await client.sendText(
         m.chat,
         'Hubungi owner di sini: https://wa.me/6287824856453'
      )
   },
   error: false
}
