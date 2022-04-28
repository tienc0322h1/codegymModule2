class Application{
    private name: string;
    static count: number = 0;
    constructor(name: string) {
        this.name = name;
        Application.count++;
    }
}
console.log(Application.count);
let app1 = new Application('App one');
console.log(app1);
let app2 = new Application('App Two');
console.log(app2);


