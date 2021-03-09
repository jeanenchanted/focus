# Editing the code

I like to format my code properly, thank you very much.

I have a couple of specific ways of editing my code and making it looks pretty and neat. Here are some guidlines to follow when editing code.

⠀

## **Using `Prettier` to format the code**

To make the code prettier, use **Prettier**!

1. Go to **COMMAND PALETTE** (`CTRL + SHIFT + P`).
2. Search for **FORMAT DOCUMENT** (`SHIFT + ALT + F`).
3. Your code looks great now!

Aside from prettier, I have a couple of guidelines that may need configuration:

-   Use **double quotes** (`"`) instead of **single quotes** (`'`).
-   Use tab **width 4** (equivalent to two tabs), to make it easier to read.
-   Use **new lines** when necessary to make it look good.
-   Use **`//`** rather than **`/* */`** unless the comment is really long.

This is the json you can insert in [`package.json`](../package.json) to config prettier.

```json
"prettier": {
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": false,
    "singleQuote": false
}
```

⠀

## **Codes in strings**

`DBD.js`, the coding language mostly used in the bot, is coded in **strings**. This could pose a slight problem for us. We couldn't use **syntax highlighting** nor normal commenting.

```js
// eval command, for debugging
module.exports = {
    name: "eval",
    code: `
        $eval[$message]
        ${/* Only if I use it. */ ""}
        $onlyIf[$userID[$username]==${myId}]
    `,
}
```

You might notice some things in the code. These are important when coding in `DBD.js`.

-   Always use **backquotes** (`` ` ``) for code.
-   **Nest** code wherever possible.
-   Use **`${/* */''}`** for commenting in strings.
-   If the code is long, make **new lines** and nest.
-   Use [**functions**](server.js) for repetitive or long code.

⠀

## **Formatting your `Markdown`**

I like Markdown. It's simple, it's neat, it's easy to use while typing like normal. And it's so easy to format!

### **Headers**

```md
# header 1

Used as the main title

## header 2

Usually starts a section

### header 3

A section inside a section

#### header 4

A section inside a section inside a section
```

You get the point. It's quite easy to make headers.

### **Common formats**

````md
-   List item variant 1
    -   Nested item
    -   Nested item
    -   **bold text**
        -   **also bold text**
        -   Nested item
    -   _italic text_
        -   _also italic text_
        -   Nested item
    -   Nested item
    -   Nested item

*   List item variant 2
    -   Nested item
    -   Codeblocks
        -   `Inline code`
        -   ```language
              codeblock with formatting
              it looks real good!
            ```
        -   Nested item
    -   Nested item
    -   Nested item

1. List item variant 3

    1. \! markdown symbol cancelling
    2. Nested item

2. List item variant 3
    1. [display text](link://source.com)
    2. ![alt text](link://image.com)
    3. Nested item
````

Nice, huh? Markdown is so easy to perfect!

### **Paragraph separation**

Sometimes, the markdown doesn't look neat because the headers seem to look like the normal text.

![sample](https://media.discordapp.net/attachments/715175557456724028/818421723246362674/unknown.png)

Really bad formatting. Which is why you have two choices.

-   Bold your text. It will stand out more.
-   Add a Braille Blank whitespace character in between (`⠀`).

⠀

## **Code snippets and functions**

Code snippets and functions are really useful if you keep having to repeat code or just want to shorten a really long bit of code, especially if you have a lot of repeating values.

```js
const func = {
    sampleString:
        "<@$authorID> I'm returning text and moreText from func.sampleString",
    sampleFunction: function (text, moreText) {
        return `<@\$authorID> I'm returning ${text} and ${moreText} from func.sampleFunction`
    },
}
```

Above is a sample of a function variable, in [server.js](server.js). It contains two different types of properties: a string and a function.

Both types are suitable for the job.

### **Strings**

```js
sampleString: "<@$authorID> I'm returning `text` and `moreText` from func.sampleString"
```

Strings don't have much of a functionality - they're just ordinary strings! Strings are just plain text. However, since `DBD.js` is mostly based on strings, we can add functions and markdown in these strings.

In the example above, we have used `$authorID` inside the string, as well as markdown `` ` ``'s. It goes to the code as plain text.

To use strings in your `DBD.js` code, you must insert the following in your code where you want the string to go:

```js
${constName.propertyName}
```

In our case, the `constName` is `func` and our `propertyName` is `sampleString`. Our code to insert should look like this:

```js
${func.sampleString}
```

### **Functions**

```js
sampleFunction: function (text, moreText) {
        return `<@\$authorID> I'm returning ${text} and ${moreText} from func.sampleFunction`
    },
```

Yes, we called the string a function, but that's because the string contains code. But this one is an _actual_ JavaScript function.

Functions are way more complicated than strings, but more functional. For example, you could input things on the strings, do some operations, and do anything in JavaScript.

The strings returned can contain user input.

We should probably break this down.

```js
function (text, moreText) {
```

Here we use the keyword `function` to declare that this is a function. Then inside the brackets are our arguments.

In our case, we have two arguments separated by a comma, `text` and `moreText`.

We could use this later.

```js
    {
        return `<@\$authorID> I'm returning ${text} and ${moreText} from func.sampleFunction`
    },
```

Inside the curly braces is the function itself. In order to actually return a string to our code, we use `return` followed by our string.

Notice how we use backquotes (`` ` ``) around the string instead of normal quotes (`"` or `'`). This is because we're calling our arguments.

```js
${argName}
```

Using that, we can call on the argument's value within our string. In our case, the `argName` is `text` and `moreText`, so we use `${text}` and `${moreText}` respectively.

Now to use the function in our code, use the following format:

```js
${constName.propertyName(args)}
```

It looks the same as earlier - but this time we have `(args)` after the `propertyName`.

Since this is a function, we need the brackets around the args. Arguments are optional, but the brackets aren't. Otherwise it will return something else.

Think back to our function earlier. The arguments are `text` and `moreText`. So we write down the argument values in order.

For example, we want `text` to be `some strings` and we want `functions` as `moreText`.

```js
${func.sampleFunction("some strings", "functions")}
```

Notice how we use quotes on our inputs. It means that our inputs are strings.

This will then return the following string, because of the arguments:

```js
;`<@\$authorID> I'm returning some strings and functions from func.sampleFunction`
```

Easy, right?

---

## \- written by **@jeanenchanted**
