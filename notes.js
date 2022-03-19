const notes = [
    { 
        id: 1,
        subject: "Git workflow",
        date: "January 10, 2022",
        feeling: "Overly Confident",
        timeSpent: "6 hours"
    },
    { 
    id: 2,
    subject: "Leonids Toys",
    date: "January 11, 2022",
    feeling: "I thought I was further along, but I was wrong",
    timeSpent: "3 hours"
    }
]

const newDay = {
        id: 3,
        subject: "Book 2, Chapter 6",
        date: "January 11, 2022",
        feeling: "Confident",
        timeSpent: "1.5 hours"
}

notes.push(newDay);

for (const note of notes) {
    console.log(`Note ${note.id}
    ${note.date}
    I learned ${note.subject}.
    I spent ${note.timeSpent} working on it
    I felt ${note.feeling}.`)
}