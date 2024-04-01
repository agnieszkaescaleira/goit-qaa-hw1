//zadanko1
const fruits = ["Jablko", "Banan", "Pomarancza", "Winogrona", "Arbuz"];




//zadanko2
const numbers = [1,3,4,7,9,10,14,25];
const number = 5
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] < number)
        { continue; }

    console.log(`liczby wieksze od 5 to: ${numbers[i]}`);
    }