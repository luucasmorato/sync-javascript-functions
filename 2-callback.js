function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: 'Lucas Morato'
    })
  }, 1000);
}

function getTelephone(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      number: '9 9191-0000',
      ddd: 31
    })
  }, 1000);
}

function getAddress(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      street: 'R. Antônio de Albuquerque',
      city: 'BH',
      state: 'MG'
    });
  }, 1000);
}

// solution using callback
getUser((err, user) => {
  if (err) { 
    console.error('error in user:', err);
    return;
  }

  getTelephone(user.id, (err2, telephone) =>{
    if (err2) { 
      console.error('error in telephone:', err2);
      return;
    }
    
    getAddress(user.id, (err3, address) =>{
      if (err3) { 
        console.error('error in address:', err3);
        return;
      }
  
      console.log(`
        User ID: ${user.id} 
        Username: ${user.name}
        Telephone: (${telephone.ddd}) ${telephone.number} 
        Address: ${address.street}, ${address.city} - ${address.state}
      `);
    });
  });
});