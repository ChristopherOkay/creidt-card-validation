



# creidt-card-validation
Validates details in a credit card

The following sites are where I researched the information used in the development of this project
+ [Google](https://www.google.com)
+ [YouTube](https://www.youtube.com)
+ [Learning Material for the codes](https://www.genesystechhub.com/learnable)

# Short information on the conditions used
The valid Master Card number must satisfy the following conditions. 
+ It should be 16 digits long.
+ It should start with either two digits numbers may range from 51 to 55 or four digits numbers may range from 2221 to 2720.
+ In the case of 51 to 55, the next fourteen digits should be any number between 0-9.
+ In the case of 2221 to 2720, the next twelve digits should be any number between 0-9.
+ It should not contain any alphabet or special characters.


The valid Visa Card number must satisfy the following conditions: 
+ It should be 13 or 16 digits long, new cards have 16 digits and old cards have 13 digits.
+ It should start with 4.
+ If the cards have 13 digits the next twelve digits should be any number between 0-9.
+ If the cards have 16 digits the next fifteen digits should be any number between 0-9.
+ It should not contain any alphabet or special characters.


# Usage
clone the repo and cd into the directory such that you are on creidt-card-validation
To run the solution, make sure you have [nodejs](https://nodejs.org/en/) installed
use the following command terminal
```
# run regexp.js
node regexp.js
```

# Sample Output

+ If the animal.js is run successfully, the results would look like:

```

===========Displaying if card numbers entered is valid==============
This is a valid card 

===========Displaying if CVV entered is valid==============     
This is a valid cvv card 

===========Displaying the entered credit card type==============
This is a visa card 


```
