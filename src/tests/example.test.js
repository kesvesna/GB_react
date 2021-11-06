function formatTimeString(strings = []){

    if(strings?.length > 1){
        return `${strings[0]} - ${strings[strings.length-1]}`;
    }

    if(strings?.length){
        return `${strings[0]} - Till tomorrow`;
    }

    return 'None';
}

describe("Check formatTimeString function", ()=>{
    it("Call with numbers", ()=>{
        const result = formatTimeString([1,2,3,4]);
        expect(result).toBe("1 - 4");
    });

    it("Call with one number", ()=>{
        const result = formatTimeString([1]);
        expect(result).toBe("1 - Till tomorrow");
    });

    it("Call without number", ()=>{
        const result = formatTimeString(null);
        expect(result).toBe("None");
    });
})
