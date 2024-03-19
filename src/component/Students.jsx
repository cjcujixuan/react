const Students = () => {
    const students = [
        { 'name': 'John', 'score': 90 },
        { 'name': 'Jane', 'score': 95 },
        { 'name': 'Peter', 'score': 85 },
        { 'name': 'Tina', 'score': 75 },
        { 'name': 'Mike', 'score': 80 },
        { 'name': 'Sue', 'score': 60 }
    ];
    const Change = students.map(student =>
        student.score < 80 ? 100 : student
    )

    return (
        <div>
            <h1>
                Student Score Board
            </h1>

            <h2>
                Origin Scores
            </h2>

            <hr />
            
            {students.map((student, index) => (
                <div key={index}>
                    <h4>{student.name}---{student.score}</h4>
                </div>
            ))}

            <hr />

            {students.map((student, index) => (
                <div key={index}>
                    <h4>{student.name}---{index % 2 === 0 ? student.score + 10 : student.score - 10}</h4>
                </div>
            ))}

            <hr />

            {students.map((student, index) => (
                <div key={index}>
                    <h4>{student.name}---{student.score < 80 ? student.score=100 : student.score}</h4>
                </div>
            ))}

            <hr />


        </div>
    );
};

export default Students;