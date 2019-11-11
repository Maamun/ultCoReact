/* React will do a check inside the dependency array to see ift had changed. only then will the effect code inside the useEffect hook fire. However it's extremely important to know that REACT DOES A SHALLOW CHECK ON THE DEPENDENCIES. This means that it only compare values for simple types such as integers and strings, while it compares references for things such as objects, arrays and functions. so a SHALLOW CHECK WILL NOT COMPARE THE CONTENT OF A COMPLEX DATA TYPE. and the reason for this is performance. 
\if react had to unpack all of our data structures to compare them, our applications performance will deteriorate quite quickly.
-  */
const x = {
  val1: 10
};
console.log(x);
const y = x;
console.log(y);
console.log(x === y); //true
/* --> with JavaScript objects, the variable simply carries a reference to the actual object in memory. so what we did with assignement, is we basically told y that it carries the same reference as x, and both of them are pointing to the exact same object in memory.
 - console.log(x === y), what we are doing when we compare the two variables, is we compare the reference and not the actual object.*/

/* now let's create a copy: */

const z = [...x];
console.log(x === z); // false
/* The reason for this is we created a new object in memory.that means that z carries a reference to the newly created object while x and y still carry a reference to the old object.
- When we do the comparaison, the comparaison operator does not check the contents of the objects, it only checks the references that is stored in the varaibles.
- the checks happening in the dependencies array of the useEffect is exactly the same .
- this is only for complex types: objects, arrays, functions., base types as string and integers are compared by value.
- When we handle our state we've shown that we need to use operators that return a new versions of state and we should not modify state directly. this is one of the reasons, if i have and object in state and i always mutated it with the setter by creating a new object, i'm sure that the object refrence is always different.
- so if we add that object to the dependency array and checks the references it will indeed fire, if we were to modify the old object or set a refrence to the old object in a new variable and check those the dependecy array will not fire.  */
