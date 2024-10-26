const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

//for of loop I made
for (let day of days){
    day = `${day[0].toUpperCase()}${day.slice(1,day.length)}`;
    console.log(day);
}