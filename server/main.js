//only executed on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import {image, helpers} from 'faker';

Meteor.startup(() => {
  //generate data when server starts up

  //check to see if data exists in collection
  const numRecords = Employees.find({}).count();  //returns cursor
  console.log(numRecords);

  if(!numRecords) {
    //generate some data
    //.times calls the function x number of times (5000)
    _.times(5000, () => {
      const {name, email, phone} = helpers.createCard();
      //same as const name = helpers.createCard().name etc.

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }


  Meteor.publish('employees', function(per_page) {
    return Employees.find({}, {limit: per_page});
    //a cursor is a bookmark, it does not actually get thigns from database
    //we are giving the ability to go get the records
    //adding a limit makes it so they can only access the first 20 records
  });

});
