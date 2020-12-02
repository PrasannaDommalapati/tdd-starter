module.exports = day2Controller();

function day2Controller() {
    function passwordsAreValid(passwords) {

        let validCount = 0;
        passwords.map(t => {

            let lowerLimit = parseInt(t.range.split('-')[0]);
            let higherLimit = parseInt(t.range.split('-')[1])

            let charLength = t.password.count(`${t.char}`);
            if (charLength >= lowerLimit && charLength <= higherLimit) {
                validCount++;
            }

            return null;
        });
        return validCount;
    }


    function passwordPosition(passwords) {

        let validCount = 0;
        passwords.map(t => {
            let lowerIndex = parseInt(t.range.split('-')[0]);
            let higherIndex = parseInt(t.range.split('-')[1])

            let positions = locations(t.char, t.password);
            if (positions.includes(lowerIndex)) {
                if (!positions.includes(higherIndex)) {
                    validCount++;
                }
            }

            if (!positions.includes(lowerIndex)) {
                if (positions.includes(higherIndex)) {
                    validCount++;
                }
            }
        });

        return validCount;
    }

    function locations(substring, string) {
        var a = [], i = -1;
        //update push(i) if you are having index of 0
        while ((i = string.indexOf(substring, i + 1)) >= 0) a.push(i + 1);
        return a;
    }

    String.prototype.count = function (c) {
        var result = 0, i = 0;
        for (i; i < this.length; i++)if (this[i] == c) result++;
        return result;
    };


    return {
        passwordsAreValid,
        passwordPosition
    }
}