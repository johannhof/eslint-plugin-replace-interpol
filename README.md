# eslint-plugin-replace

Replace parts of your code before linting

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-replace`:

```
$ npm install eslint-plugin-replace --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-replace` globally.

## Usage

Add `replace` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "replace"
    ]
}
```





