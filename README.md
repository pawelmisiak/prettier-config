# Insider Intelligence shared PrettierConfig

## Installation

To install this package run the following command in the terminal in the root directory of your application.

```
npm install --save-dev **FILL IN THIS PART**
```

**OR**

```
yarn add --dev **FILL IN THIS PART**
```

## Usage

Add a key in your **package.json** file.

```
"prettier": "**FILL IN THIS PART**"
```

**OR**

Create a **.prettierrc** file and export a string.

```
"**FILL IN THIS PART**"
```

**OR if you want to extend or overwrite the property consider this example**

Create a **.prettierrc.js** file and export an object.

```
module.exports = {
  ...require("**FILL IN THIS PART**"),
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
