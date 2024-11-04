const personDetails = id => name => email => {
    return{id,name,email};
};

const data = personDetails(1)('Vicky')('vicky@gmail.com');
console.log("Data: ", data);
