import { MY_API_KEY } from './config.js';

document.getElementById('muscle-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const muscle = document.getElementById('muscle-select').value;
    console.log(`Selected muscle group: ${muscle}`);
    fetchWorkoutData(muscle);
});

function fetchWorkoutData(muscle) {
    const url = `https://work-out-api1.p.rapidapi.com/search?Muscles=${muscle}`;
    console.log(`Fetching data from: ${url}`);

    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "work-out-api1.p.rapidapi.com",
            "x-rapidapi-key": MY_API_KEY
        }
    })
    .then(response => {
        console.log("Response received");
        return response.json();
    })
    .then(response => {
        console.log("Response JSON parsed");
        console.log(response);

        // Clear previous workouts
        const workoutsContainer = document.getElementById('workouts');
        workoutsContainer.innerHTML = '';

        response.forEach(workout => {
            console.log(workout);  // Log each workout object

            const workoutContainer = document.createElement('div');
            workoutContainer.classList.add('workout-container');

            const musclesElement = document.createElement('p');
            musclesElement.innerHTML = `<strong>Muscles:</strong> ${workout.Muscles}`;
            workoutContainer.appendChild(musclesElement);

            const workoutElement = document.createElement('p');
            workoutElement.innerHTML = `<strong>Workout:</strong> ${workout.WorkOut}`;
            workoutContainer.appendChild(workoutElement);

            const equipmentElement = document.createElement('p');
            equipmentElement.innerHTML = `<strong>Equipment:</strong> ${workout.Equipment}`;
            workoutContainer.appendChild(equipmentElement);

            const intensityElement = document.createElement('p');
            intensityElement.innerHTML = `<strong>Intensity Level:</strong> ${workout.Intensity_Level}`;
            workoutContainer.appendChild(intensityElement);

            workoutsContainer.appendChild(workoutContainer);
            console.log('Workout container appended');  // Log after appending
        });
    })
    .catch(err => {
        console.log("Error occurred:");
        console.log(err);
    });
}