export const run = {
   usage: ['owner'],
   category: 'miscs',
   async: async (m, { client }) => {
      await client.sendText(
         m.chat,
         'https://wa.me/6287824856453',
         m
      )
   },
   error: false
}
