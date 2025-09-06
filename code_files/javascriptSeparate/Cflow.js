if (5 < 2) console.log(true);

const fire = "feb"

switch (fire) {
    case "feb":
        console.log("feb");
        break;
    case "mar":
        console.log("mar");
        break;
    case "apr":
        console.log("apr");
        break;
    default:
        console.log("13");
        break;
}

for (let i = 1; i <= 10; i++) {

    if (i == 5) {
        console.log(`${i} is Detected`);
        break
    }
    console.log(i);
    

}