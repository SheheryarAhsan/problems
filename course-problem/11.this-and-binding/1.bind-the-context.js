const person = {
    name: `Sheheryar Ahsan`,
    introduce() {
        return `My name is ${this.name}`;
    }
}

console.log(person.introduce());

const intro = person.introduce.bind({name:"Muneeb"});
console.log(intro());
