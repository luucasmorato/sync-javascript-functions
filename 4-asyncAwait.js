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
        street: 'R. Antônio de Albuquerque',
        city: 'BH',
        state: 'MG'
      });
    }, 1000);
  })
}

// solution using async/await
async function main(){

  try { 
    const user = await getUser();
  
    const info = await Promise.all([
      getTelephone(user.id),
      getAddress(user.id)
    ])
    
    const telephone = info[0];
    const address = info[1];

    console.log(`
      User ID: ${user.id} 
      Username: ${user.name}
      Telephone: (${telephone.ddd}) ${telephone.number} 
      Address: ${address.street}, ${address.city} - ${address.state}
    `);
  
  } catch (error) {
    console.log(error);
  }
}

main();