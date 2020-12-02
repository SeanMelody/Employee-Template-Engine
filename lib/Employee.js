// TODO: Write code to define and export the Employee class

// class Employee {
//     name = name
// }

const Employee = function (e) {

}

describe("Employee", () => {
    describe("Employee initiation", () => {
        it("Employee Should be an object", () => {
            const e = new Employee();

            expect(typeof (e)).toBe("object");
        });
        //     it("should throw an error if you don't pass a number data type in constructor", () => {
        //         const cb = () => new Math("not a number");

        //         const err = new Error("Argument must be a number");
        //         expect(cb).toThrowError(err);
        //     });
        // });
        // describe("add", () => {
        //     it("should add the argument to the number property in object", () => {

        //         const obj = new Math(2).add(2);

        //         expect(obj.num).toEqual(4);
        //     })
    });


});

exports.default = Employee


