function getUser() {
  setTimeout(() => {
    return {
      id: 1,
      name: 'Lucas'
    }
  }, 1000);
}

function getTelephone(userId) {
  setTimeout(() => {
    return {
      number: 991910000,
      ddd: 31
    }
  }, 1000);
}

function getAddress(userId) {
  setTimeout(() => {
      return {
        street: 'R. Antônio de Albuquerque',
        city: 'BH',
        state: 'MG'
      };
  }, 1000);
}

// the following calls show an error because they are not synchronized
const user = getUser();
const telephone = getTelephone(user.id);
const address = getAddress(user.id);

console.log(`
  User ID: ${user.id} 
  Username: ${user.name}
  Telephone: (${telephone.ddd}) ${telephone.number} 
  Address: ${address.street}, ${address.city} - ${address.state}
`);