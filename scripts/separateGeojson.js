const fs = require('fs');
const users = require('../data/users.json');
const sedimentDisaster = require('../data/sedimentDisaster.json');

const fn1 = () => {
  const NewYorker = users.filter(user => {
    if (user.address.city === 'New York') {
      return true
    }
  })
  console.log(NewYorker);
  fs.writeFile('../public/json/NewYork.json', JSON.stringify(NewYorker), err => {
    if (err) console.log(err)
    else console.log('success')
  })
}

const fn2 = () => {
  const DebrisFlow = sedimentDisaster.features.filter(feature => {
    if (feature.properties.A33_002 === '2') {
      return true
    }
  })
  fs.writeFile('../public/json/DebrisFlow.json', JSON.stringify(DebrisFlow), err => {
    if (err) console.log(err)
    else console.log('success')
  })
}

fn1()
fn2()





