export class Person {
    private fullName: string;
    private age: number;

    constructor(fullName: string, age: number) {
        this.fullName = fullName;
        this.age = age;
    }

    getFullName(): string {
        return this.fullName;
    }
    setFullName(fullName: string): void {
        this.fullName = fullName;
    }
    getAge(): number {
        return this.age;
    }
    setAge(age: number): void {
        this.age = age;
    }
}
