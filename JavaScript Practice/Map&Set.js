//MAP DS

let map = new Map();
console.log(typeof(map))

map.set(1,'hari')
map.set(2,'hari')
.set(3,'winner')
.set(4,'parotta')
console.log(map)

//get

console.log(map.get(4))

//has to check
console.log(map.has(2))

//delete

map.delete(2)
console.log(map.get(2))



console.log(map.size)

console.log(map)

//printing map both keys and values

//keys
for(key of map.keys()){  //keys() is a method that is used yto return the keys by default.
    console.log(key)
}
//values

for(key of map.values()){  //values() is a method that is used yto return the values by default.
    console.log(key)
}

// full map

for(key of map){  //map just reuturn the erach element of the map by the each iteration
    console.log(key)
}

console.log("=====================================")

//SET DS

let set = new Set();
console.log(set);
console.log(typeof(set));

// to add elements in set

set.add('hello')
    .add('how are you')

    console.log(set)

    //trivia

    let phone = new Set();
    phone.add(1)
    phone.add(2)
    phone.add(3)
    phone.add(4)
    phone.add(5)
    phone.add(6)
    phone.add(7)
    phone.add(8)
    phone.add(9)
    phone.add(0)

    console.log(phone)
    console.log(phone.size)

