const vehicles = [
  {
    id: 1,
    registrationNo: 'ABC123',
    make: 'Chevrolet',
    model: 'Corvette',
    modelYear: '2015',
    imageName: 'car1',
    mileage: 25000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 2,
    registrationNo: 'AAA123',
    make: 'Ford',
    model: 'Mustang',
    modelYear: '2017',
    imageName: 'car2',
    mileage: 48500,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 3,
    registrationNo: 'BBB123',
    make: 'Porsche',
    model: 'Alpine',
    modelYear: '1967',
    imageName: 'car3',
    mileage: 89000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 4,
    registrationNo: 'CCC123',
    make: 'Mercedes',
    model: 'S500',
    modelYear: '2019',
    imageName: 'car4',
    mileage: 25000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 5,
    registrationNo: 'XYZ123',
    make: 'Mercedes',
    model: 'AMG',
    modelYear: '2014',
    imageName: 'car5',
    mileage: 25000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 6,
    registrationNo: 'ZCS123',
    make: 'Audi',
    model: 'A6',
    modelYear: '2013',
    imageName: 'car6',
    mileage: 25000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 7,
    registrationNo: 'ZCS123',
    make: 'Volvo',
    model: 'V60',
    modelYear: '2013',
    imageName: 'car7',
    mileage: 25000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 8,
    registrationNo: 'ZCS123',
    make: 'Volvo',
    model: 'XC40',
    modelYear: '2013',
    imageName: 'car8',
    mileage: 25000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 9,
    registrationNo: 'ZCS123',
    make: 'Volvo',
    model: 'V40',
    modelYear: '2013',
    imageName: 'car9',
    mileage: 25000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 10,
    registrationNo: 'ZCS123',
    make: 'Audi',
    model: 'A6',
    modelYear: '2018',
    imageName: 'car10',
    mileage: 25000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 11,
    registrationNo: 'ZCS123',
    make: 'Ferrari',
    model: '458',
    modelYear: '2013',
    imageName: 'car11',
    mileage: 25000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 12,
    registrationNo: 'ZCS123',
    make: 'Lambourghini',
    model: 'Aventador',
    modelYear: '2013',
    imageName: 'car12',
    mileage: 25000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 13,
    registrationNo: 'ZCS123',
    make: 'Chevrolet',
    model: 'Impala',
    modelYear: '1958',
    imageName: 'car13',
    mileage: 25000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 14,
    registrationNo: 'ZCS123',
    make: 'Volkswagen',
    model: 'Tiguan',
    modelYear: '2016',
    imageName: 'car14',
    mileage: 112500,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
  {
    id: 15,
    registrationNo: 'ZCS123',
    make: 'Volvo',
    model: 'V60',
    modelYear: '2020',
    imageName: 'car15',
    mileage: 25000,
    value: 175000,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.',
  },
];

console.log(vehicles);

//Gamla s??ttet...
const bilar = [];

for (let car of vehicles) {
  let info = `${car.make} ${car.model}`;
  bilar.push(info);
}

console.log(bilar);

//Det nya s??ttet...
const cars = vehicles.map(function (vehicle) {
  return `${vehicle.id} ${vehicle.make} ${vehicle.model}`;
});
console.log('map with function', cars);

const cars1 = vehicles.map((vehicle) => {
  return `${vehicle.id} ${vehicle.make} ${vehicle.model}`;
});
console.log('map with arrow function', cars1);

//One-liner...????
const cars2 = vehicles.map(
  (vehicle) => `${vehicle.id} ${vehicle.make} ${vehicle.model}`
);
console.log('map with arrow function', cars2);
