class Command extends Object {
  constructor() {
    super();
  }
  setUser(user) {
    this.user = user;
    return this;
  }
  setNbt(nbt) {
    this.nbt = nbt;
    return this;
  }
}

class Give extends Command {

  constructor() {
    super();
    this.stack = 1;
  }
  setItem(item) {
    this.item = item;
    return this;
  }
  setStack(nb) {
    if(typeof nb != 'undefined') {
      this.stack = nb;
    }
    return this;
  }
}

let test = new Give();
let res = test.setUser('@p').setItem('minecraft:carrot').setNbt({ count:1 });
console.log(JSON.stringify(res, null, 2));

class Summon extends Command {
  constructor() {
    super(); 
  }
  setEntity(entity) {
    this.entity = `minecraft:${entity}`;
    return this;
  }
}

let zombie = new Summon().setEntity('zombie').setNbt({ customName:{ text:'zombey', color:'red' }});
console.log(zombie);


module.exports = {
  Give,
  Summon
}