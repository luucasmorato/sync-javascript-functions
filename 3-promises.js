function getUser() { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      return resolve({ 
        id: 1,
        name: 'Lucas'
      })
    }, 1000);
  })
}

function getTelephone(userId) { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        number: '9 9191-0000',
        ddd: 31
      })
    }, 1000);
  })
}

function getAddress(userId) {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      return resolve({
        street: "R. Antônio de Albuquerque",
        city: "BH",
        state: 'MG'
      });
    }, 1000);
  })
}

// solution using promises
getUser()
  .then(resultUser => {

    getTelephone(resultUser.id)
      .then(resultTel => {

        getAddress(resultUser.id)
          .then(resultAddress => {
            
            console.log(`
              User ID: ${resultUser.id} 
              Username: ${resultUser.name}
              Telephone: (${resultTel.ddd}) ${resultTel.number} 
              Address: ${resultAddress.street}, ${resultAddress.city} - ${resultAddress.state}
            `);
        })
      })
  })
  .catch(err => {
    console.error('error', err)
  })