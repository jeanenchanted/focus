# Re-write code
## [Focus repo](https://github.com/jeanenchanted/focus) | [Issue](https://github.com/jeanenchanted/focus/issues/16)

- [x] ~~if statements~~

    <details>
    <summary>How to fix this:</summary>

     ```js
    `$replaceText[$replaceText[$checkCondition[something==something];true;trueCode;-1];false;falseCode;-1]` 
    // old code uses $replaceText

    `$if[something==something] trueCode
    $else falseCode $endif`
    // new code uses $if and $else
    ```
    </details>
    <details>
    <summary>File List</summary>

    - [x] [help.js](../commands/_utility/_help.js)
    - [x] [say.js](../commands/_utility/say.js)

    </details>

- [ ] add comments
      
    <details>
    <summary>How to fix this:</summary>

     ```js
    `some random code in here
    ${/* add comment here */''}
    $addSomeComplicatedLongCode
    $andSomeMoreCode` 
    ```
    </details>

    <details>
    <summary>File List</summary>

    <!-- utility -->
    - [ ] [help.js](../commands/_utility/_help.js)
    - [ ] [eval.js](../commands/_utility/eval.js)
    - [ ] [ping.js](../commands/_utility/ping.js)
    - [ ] [say.js](../commands/_utility/say.js)
    <!-- config -->
    - [ ] [resetranks.js](../commands/config/resetranks.js)
    - [ ] [setcard.js](../commands/config/setcard.js)
    - [ ] [setcolour.js](../commands/config/setcolour.js)
    <!-- levelling -->
    - [ ] [rank.js](../commands/levelling/rank.js)
    - [ ] [topranks.js](../commands/levelling/topranks.js)
    - [ ] [xp.js](../commands/levelling/xp.js)

    </details>

- [ ] basic formatting
- [ ] arg checks
- [x] ~~help command~~
- [x] ~~privacy for users~~