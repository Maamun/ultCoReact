import React from 'react';

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
export default UltimateHolidayList;