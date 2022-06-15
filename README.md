# Password-Generator

## Description

- The motivation of this Password-Generator is to modify the code in js file to create an application to generate random password. The key factor of this project is randomly generating password that meets certain criteria in order to create a stonger password for a better security. The goal of Password-Generator project is to prompt the user with the password criteria that contains password length, numbers, special characters, uppercases, and lowercases.

## Work Done

- Series of prompts are generated when "generate password" button is clicked.
- Alerts when other than numbers between 8 to 128 are typed and propmps back to beginning.
- When each prompts are answered, it validates and matches with the selected criteria the user chose.
- Password generates when all the prompts are answered.
- Password is written to the page when its generated.
- description of what the code does is commented on top of the code in the js file.

## Links

- [Link to the Website] (https://namgiwoong.github.io/Password-Generator/)
- [Link to the Repository] (https://github.com/namgiwoong/Password-Generator)

## Usage

When the number between 8 through 128 are inputted, it will guide through if the user wants to include numbers, special characters, lowercase, or uppercase for the password. Once the user selects 'ok' for yes or 'cancel' for no, it will automatically generate the password corresponding to the length and character of the password the user decided. When failed to put anything other than the number between 8 to 128, it will alert and return to beginning. It will also alert different message if the user selects 'cancel' for all the options.

![]

## Credits

References

- https://www.w3schools.blog/string-length-validation-javascript-js
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
