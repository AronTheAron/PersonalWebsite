const courseList = [
    {code:'ORGB 1100', name:'Organizational Behaviour'},
    {code:'COMM 1116', name:'Business Communications 1'},
    {code:'MATH 1310', name:'Technical Math for IT'}
];


loop1:
    while (true) {
        let coursenumber = prompt('Please enter a 4-digit Course Number to search', '');
        let coursenumberexists = Boolean; 
        if (coursenumber == '') {
            alert('Empty? Try again');
            continue;
        }
        else if (isNaN(coursenumber) || coursenumber < 1000 || coursenumber > 9999) {
            alert('Invalid entry; try again');
            continue;
        }
        else {
            for (let i = 0; i < courseList.length; i++) {
                if (courseList[i].code.includes(coursenumber)) {
                    console.log('Yes, this student is taking the course: ' + courseList[i].code + ' - ' + courseList[i].name) 
                    break loop1;
                }
            }
            let newcourse = {code: coursenumber, name:null}
            courseList.push(newcourse);
            console.log('It looks like this course is not on the list; now it is!')
            break loop1;
        }
    }