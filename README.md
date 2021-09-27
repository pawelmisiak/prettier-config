# Insider Intelligence shared prettier-config

## Installation

To install this package run the following command in the terminal in the root directory of your application.

```
npm install --save-dev @pawelmisiak/prettier-config
```

**OR**

```
yarn add --dev @pawelmisiak/prettier-config
```

## Usage

Add a key in your **package.json** file.

```
"prettier": "@pawelmisiak/prettier-config"
```

**OR**

Create a **.prettierrc** file and export a string.

```
"@pawelmisiak/prettier-config"
```

**OR if you want to extend or overwrite the property consider this example**

Create a **.prettierrc.js** file and export an object.

```
module.exports = {
  ...require("@pawelmisiak/prettier-config"),
  // endOfLine: 'lf', // to overwrite the property
};
```

##Overrides

If you wish to override properties in specific files or a directories use this example

```
overrides: [
      {
         files: 'a.js',
         options: {
             tabWidth: 4,
         },
      },
      {
        files: ["testing/*.js"],
        options: {
          printWidth: 20,
        }
      }
   ],

```
