let setpassword = "Smit@1234";
let total = 0;
let items = 0;
let high = 0;
let low = 0;
let sub = 0;
let gst = 0;
let grand = 0;
let disc = 0;
let finalAmt = 0;
let ch;

do {
    console.log("Smit Cafe Menu");
    console.log("1. Order");
    console.log("2. Bill");
    console.log("3. Discount");
    console.log("4. Password");
    console.log("5. Report");
    console.log("0. Exit");

    ch = prompt("Choice:");

    if (ch == "1") {
        let opt;
        do {
            console.log("Menu Items:");
            console.log("1. Coffee - 50");
            console.log("2. Tea - 30");
            console.log("3. Sandwich - 80");
            console.log("4. Pastry - 100");
            console.log("0. Back");
            opt = prompt("Item:");

            if (opt == "1") {
                total += 50; items++;
                if (high < 50) high = 50;
                if (low == 0 || low > 50) low = 50;
                console.log("Coffee - 50 added");
                console.log("Total: " + total);
            }
            else if (opt == "2") {
                total += 30; items++;
                if (high < 30) high = 30;
                if (low == 0 || low > 30) low = 30;
                console.log("Tea - 30 added");
                console.log("Total: " + total);
            }
            else if (opt == "3") {
                total += 80; items++;
                if (high < 80) high = 80;
                if (low == 0 || low > 80) low = 80;
                console.log("Sandwich - 80 added");
                console.log("Total: " + total);
            }
            else if (opt == "4") {
                total += 100; items++;
                if (high < 100) high = 100;
                if (low == 0 || low > 100) low = 100;
                console.log("Pastry - 100 added");
                console.log("Total: " + total);
            }
        } while (opt != "0");
    }

    else if (ch == "2") {
        sub = total;
        gst = sub * 0.05;
        grand = sub + gst;
        console.log("Bill:");
        console.log("Sub: " + sub);
        console.log("GST: " + gst);
        console.log("Grand: " + grand);
    }

    else if (ch == "3") {
        if (total > 1000) disc = total * 0.20;
        else if (total > 500) disc = total * 0.10;
        else disc = 0;
        finalAmt = total - disc;
        console.log("Discount Applied");
        console.log("Bill: " + total);
        console.log("Disc: " + disc);
        console.log("Final: " + finalAmt);
    }

    else if (ch == "4") {
        let oldp = prompt("Old Pass:");
        if (oldp === setpassword) {
            let newp = prompt("New Pass:");
            let conf = prompt("Confirm:");
            if (newp === conf) {
                setpassword = newp;
                console.log("Password set: " + newp);
            } else {
                console.log("Not matched");
            }
        } else {
            console.log("Wrong pass");
        }
    }

    else if (ch == "5") {
        let avg = 0;
        if (items > 0) avg = total / items;
        console.log("Report:");
        console.log("Items: " + items);
        console.log("High: " + high);
        console.log("Low: " + low);
        console.log("Avg: " + avg);
    }

} while (ch != "0");

console.log("Exit");
console.log("Visit Again!");

