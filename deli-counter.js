// 1. Write your functions here
function line(deliLine) {
    const emptyLineMessage = "The line is currently empty.";
    const lineStatus = deliLine.length > 0? activeLineStatus(deliLine) : emptyLineMessage;
    console.log(`${lineStatus}`);
    
    return lineStatus;
}

function activeLineStatus(deliLine) {
    let formattedLineStatus = "The line is currently: ";
    let count = 0;

    for (const client of deliLine) {
        count++;
        formattedLineStatus = `${formattedLineStatus} ${count}. ${client}`;
    }

    return formattedLineStatus;
}

function takeANumber(deliLine, clientName) {
    deliLine.push(clientName);
    const numberConfirmation = `Welcome, ${clientName}. You are number ${deliLine.length} in line.`;
    console.log(`${numberConfirmation}`);
    return numberConfirmation;
}

function nowServing(deliLine) {
    const emptyLineMessage = "There is nobody waiting to be served!";
    let lineStatus = ``;

    if (deliLine.length > 0) {
        lineStatus = servedClientMessage(deliLine);
        deliLine.shift();
    }
    else {
        lineStatus = emptyLineMessage;
    }
    console.log(`${lineStatus}`);
}

function servedClientMessage(deliLine) {
    const servedClient = deliLine[0];
    return `Currently serving ${servedClient}.`
}

// 2. Example Usage

const katzDeli = []

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"