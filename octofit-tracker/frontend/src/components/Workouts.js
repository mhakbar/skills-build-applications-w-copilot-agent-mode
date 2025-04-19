import React, { useEffect, useState } from 'react';

const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('https://refactored-funicular-p799wj5759p27vg9-8000.app.github.dev/api/workouts/')
            .then(response => response.json())
            .then(data => setWorkouts(data));
    }, []);

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">Workouts</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workouts.map(workout => (
                            <tr key={workout.id}>
                                <td>{workout.id}</td>
                                <td>{workout.name}</td>
                                <td>{workout.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Workouts;