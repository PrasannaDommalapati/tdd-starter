module.exports = day1Controller();

function day1Controller() {
    const expensesReportTwoNumber = expenses => {
        if (expenses.lenght == 0)
            return;

        let result = 0;

        expenses.map(a => {
            expenses.map(b => {
                if (a + b == 2020) {
                    console.log(a * b)
                    result = a * b;
                }
            });
        });

        return result;
    }

    const expensesReportThreeNumber = expenses => {
        if (expenses.lenght == 0)
            return;

        let result= 0;
        expenses.forEach(a => {
            expenses.forEach(b => {
                expenses.forEach(c => {
                    if (a + b + c == 2020) {
                        result= a * b * c;
                    }
                });
            });
        });

        return result;
    }


    return {
        expensesReportTwoNumber,
        expensesReportThreeNumber
    }
}