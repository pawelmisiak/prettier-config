module.exports = {
   printWidth: 120,
   tabWidth: 2,
   useTabs: false,
   semi: true,
   singleQuote: true,
   quoteProps: 'as-needed',
   jsxSingleQuote: false,
   trailingComma: 'es5',
   bracketSpacing: true,
   bracketSameLine: false,
   arrowParens: 'always',
   htmlWhitespaceSensitivity: 'css',
   endOfLine: 'lf',

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
};
