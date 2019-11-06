import React , {useState} from 'react';

const list = [
    {id: 1, name: 'The beach'},
    {id: 2, name: 'The mountains'},
    {id: 3, name: 'Vibrant cities'},
    {id: 4, name: 'Roughing it'},
    {id: 5, name: 'Ultimate survival'}
]
 const UltimateHolidayList = () => (
     <section>
         <ul>{
                list.map(item => (
                    <li key={item.id.toString()}>{item.name}</li>
                    /* key always has to be STRING */
                ))
         }</ul>
     </section>
 )


/* React reconciler need to constantly check and compare for changes, to update the browser dom correctly and efficiently, with lists we need to provide extra informations. This is because always exhaustively comparing and re-rendering lists, would be extremely expensive in term of performance. What we need to do is to provide a key prop to the parent element, and this key prop should be populated with unique string value.
- The key prop is only important to react and it get stripped off hen rendering the DOM.
this is good as react does not pollute our browser dom with invalid or unnecessary decorator.
- By providing this unique key prop, we asssit the react reconciler as now it only has to check these unique values to see if something in the list has changed.
- The callback function of the map function is also passing an index argument, could we use this to populate into the key prop ? we can BUT WE REALLY SHOULDN'T,the reason is that this index value is the index in the current version of the array and it's not linked to the data in the array. if we render a static array that never changes we can do it, but it should usually be avoided. it also leads to more expensive checks by the reconciler and sometimes it will break own completely.
  */
 // example to undertand the key prop
 /* eventhough the list items are being displayed in the right order, the inputs are not moving with the list items !! the reason for this is beacause we've used the index instead of a value thats is attached to the item itself, the reconciler can not properly calculate which input should be displayed in which list item.
 this is a very specific example where it goes wrong and often it will appear to work very well, however you'll never know when this scenario will hit you and also the reconciler has to do more expensive calculations hen we use index, so it's always a better idea to use a unique value thats is already present on the item you are mapping. 
 --- If we diligently write unique key prop values onto our mapped collection, it will avoid very nasty and hard to find bugs from cropping up later in our react application
 - we can not write any props on the short-hand version of Fragment 
 < key='....'>WE CAN NOT DO THIS</>
 */

 const list1 = [
    'The beach',
    'The mountains',
    'Vibrant cities',
    'Roughing it',
    'Ultimate survival'
];

const list2 = [
    'The beach',
    'Roughing it',
    'Vibrant cities',
    'The mountains',
    'Ultimate survival'
];
const UltimateHolidayList2 = () => {
    const [list, setList] = useState(list1);
    const onClickHandler = () => {
        setList(list === list1 ? list2 : list1 )
    }
    
    const displayList = list.map((item, index) => (
        <li key={index.toString()}>    
            <label htmlFor={`item-${index}`}>{item}</label>
            <input id={`item-${index}`} type="text"/>
        </li>
    ));
    return ( 
        <section>
         <ul>{displayList}</ul>
         <button type='button' onClick={onClickHandler}>change</button>
     </section>
    )
}
/* if we comapre the 2 lists, we see that they contain the same values, however the order of the entries is somewhat diffrent. */

export default UltimateHolidayList2;
