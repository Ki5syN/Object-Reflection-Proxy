// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export function orderByProps (obj,sort) {
    let tableSort = [];
    let tableOters = []
    let sortList  = sort;
    for(const property in obj) {
         const valueProperty  = obj[property];
         const option = {key: property, value: valueProperty}
         if(sort.includes(property)) {
            tableSort[sortList.indexOf(property)] = option 
            continue           
         }
        tableOters.push(option);
    }
    tableOters.sort((a,b) =>a.key.localeCompare(b.key))

    return [...tableSort, ...tableOters]
}



export function destructuring (arr) {
    return arr.special.map(({id, name, icon, description = 'Описание недоступно'}) => 
        [
            id,
            name,
            icon,
            description
        ]    
    ); 
}