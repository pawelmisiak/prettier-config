module.exports = {
   singleQuote: true,
   tabWidth: 1,
   bracketSpacing: true,
   semi: true,
   printWidth: 150,

   overrides: [
      {
         files: 'haha.js',
         options: {
            printWidth: 250,
            tabWidth: 10,
         },
      },
      {
        files: ["testing/*.js"],
        options: {
          tabWidth: 4,
          printWidth: 20,
        }
      }
   ],
};
