class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const adress = this.hashMethod(key);
    if (!this.data[adress]) {
      this.data[adress] = [];
    }
    this.data[adress].push([key, value]);
    return this.data;
  }
  get(key) {
    const adress = this.hashMethod(key);
    const currentBucket = this.data[adress];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]; // con el primer [i] entra en la lista y con el segundo [1] elige key o value, key = [0], value = [1]
        }
      }
    }
    return undefined;
  }
  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          console.log(this.data[i])
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }
  delete(key) {
    //* obtengo el hash del address
    const address = this.hashMethod(key);
    //* Obtengo el bucket donde debo buscar el espacio a eliminar
    const currentBucket = this.data[address];

    if (currentBucket) {
      //* recorriendo el espacio
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          //* guardo el espacio para retornarlo luego
          let deletedSpace = currentBucket[i];
          //* elimino el espacio
          delete currentBucket[i];
          //* elimino el espacio vacio para que los demas espacios recorran
          currentBucket.splice(i, 1);
          return deletedSpace;
        }
      }
    }
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('Diego', 1990);
myHashTable.set('Joaquin', 1998);
myHashTable.set('Victoria', 1998);

console.log(myHashTable.getAllKeys());
// console.log(myHashTable.get('Diego'));
// console.log(myHashTable);
