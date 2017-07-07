#!/usr/bin/env node

'use strict';

const customers = require("./data/customers.json");


/**
 * 1. Import your lodown module using the require() method, 
 *    using the string 'lodown-<my-username>', or whatever 
 *    name with which you published your npm lodown project.
 * 
 * 2. Solve all problems as outlined in the README.
 */
 const _ = require("lodown-brandtarceneaux");
 
 var genders = _.pluck(customers, 'gender');
 
 var males = function(array) {
     var counter = 0;
     for(var i = 0; i < array.length; i++) {
         if(array[i] === 'male') counter +=1;
     }
     return counter;
 };
 
 var females = function(array) {
     var counter = 0;
     for(var i = 0; i < array.length; i++) {
         if(array[i] === 'female') counter +=1;
     }
     return counter;
 };
 
 var transgender = function(array) {
     var counter = 0;
     for(var i = 0; i < array.length; i++) {
         if(array[i] === 'transgender') counter +=1;
     }
     return counter;
 };
 
 console.log(genders);
 console.log(males(genders));
 console.log(females(genders));
 console.log(transgender(genders));

var ages = _.pluck(customers, 'age');

var oldestAge = ages.reduce(function(a, b) {
    return Math.max(a, b);
});

var youngestAge = ages.reduce(function(a, b) {
    return Math.min(a, b);
});

console.log(oldestAge);
console.log(youngestAge);

var oldestPerson;
var youngestPerson;

_.each(customers, function(e, i, a) {
    if(customers[i].age === oldestAge) {
        oldestPerson = (customers[i].name + ', age ' + customers[i].age);
    }
});

_.each(customers, function(e, i, a) {
    if(customers[i].age === youngestAge) {
        youngestPerson = (customers[i].name + ', age ' + customers[i].age);
    }
});

console.log(oldestPerson);
console.log(youngestPerson);

function add(a, b) {
    return a + b;
};

var balances = _.pluck(customers, 'balance');
console.log(balances);

function strToNum(arr) {
   for(var i = 0; i < arr.length; i++) {
       arr[i] = arr[i].substring(1);
       arr[i] = arr[i].replace(/\,/g,'');
       arr[i] = Number(arr[i]);
   }
};

var newBalances = [];
newBalances = strToNum(balances);

console.log(newBalances);

var totBalance = _.reduce(balances, add, 0);

console.log(totBalance);

var divisor = balances.length;

var avgBalance = totBalance / divisor;

console.log(avgBalance);

function firstLetter(arr, letter) {
    var count = 0;
    _.each(arr, function(e, i, a) {
        if(arr[i].name.charAt(0) === letter) {
            count++;
        }
    });
    return count;
};

console.log(firstLetter(customers, 'S'));

// function friendsFirst(arr, letter) {
//     var count = 0;
//     _.each(arr, function(e, i, a) {
//         _.each(e, function(e, k, a) {
//             if(customers[i].friends[k].name.charAt(0) === letter) {
//                 count++;
//             }
//         });
        
//     });
//     return count;
// };

// console.log(friendsFirst(customers, 'S'));

function friendsWith(arr, name) {
  let friendsList = [];
  _.each(arr, function(e, i, a) {
      _.contains(arr, name);
          friendsList.push(arr[i].name);
      });
  return friendsList;
};

console.log(friendsWith(customers, 'Adele Mullen'));

function topThreeTags(arr) {
    var mostCommonTags = [];
    var allTags = _.pluck(arr, 'tags')
    console.log(allTags);
    var allTags2 = allTags.reduce(function(res, tags) {
        return res.concat(tags)
    }, []);
    // console.log(allTags2);
    
    let cont = allTags2.reduce(function(container, tag) {
       if(container[tag]) {
           container[tag]++;
       } else{
           container[tag] = 1;
       }
        return container;
    }, {});
    console.log(cont);
    
    var occurrences = 0;
   
    // cont.reduce(mostCommonTags, )
    
    
    _.each(cont, function(v, k, a) {
        if(v >= occurrences) {
            mostCommonTags.unshift(k);
            occurrences = v;
        }
        
    });
    return mostCommonTags.slice(0, 3);
};

console.log(topThreeTags(customers));

var summary = {
    males: males(genders),
    females: females(genders),
    transgender: transgender(genders)
};

// summary.males = ;
// summary.females = ;
// summary.transgender = transgender(genders);

console.log(summary);
