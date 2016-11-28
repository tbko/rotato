export default 'test TS2';


class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

let greeter;
// let greeter = new Greeter(1);
greeter = new Greeter("I'm alive!!!");
    
const divEl = document.createElement('div');

divEl.innerHTML = greeter.greet();
document.body.appendChild(divEl);