module.exports = {
   'prettier/prettier': [
      'error',
      {
         // printWidth: 50,
         singleQuote: true,
         tabWidth: 1,
         bracketSpacing: true,
         semi: true,
         printWidth: 150,
         // singleQuote: false,
         // tabWidth: 5,
         // bracketSpacing: false,
         // semi: false,
         overrides: [
            {
               files: 'haha.js',
               options: {
                  printWidth: 250,
                  tabWidth: 10,
               },
            },
            {
               files: ['testing/*.js'],
               options: {
                  tabWidth: 4,
                  printWidth: 20,
               },
            },
         ],
      },
   ],
};
