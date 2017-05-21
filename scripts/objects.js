var friends = {};
friends.bill = {};
friends.steve = {};

friends = {
    Bill: {
        firstName: 'Bill',
        lastName: 'Gates',
        number: '555-287-1212',
        address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
    },
    Steve: {
        firstName: 'Steve',
        lastName: 'Balmer',
        number: '999-787-2233',
        address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
    }
};

var list = function(friendsNames){
    for (var firstName in friends){
        console.log(firstName);
    }
};

var search = function(name){
    for (var mickey in friends){
        if (friends[mickey].firstName === name){
            console.log(friends[mickey].firstName);
            return (friends[mickey]);
        } else {
            console.log("No matches found!");
        }
    }
};

list(friends);
search('Bill');
search('Steve');
