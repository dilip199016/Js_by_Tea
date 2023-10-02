document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    const calorieResult = document.getElementById('calorieResult');
    const mealPlan = document.querySelector('.meal-plan'); // Define mealPlan

    userForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Get user input values
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const age = parseFloat(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const activity = document.getElementById('activity').value;

        // Calculate BMR and daily calorie requirement
        let bmr;
        if (gender === 'male') {
            bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
        } else if (gender === 'female') {
            bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
        }

        let dailyCalorieRequirement;
        if (activity === 'light') {
            dailyCalorieRequirement = bmr * 1.375;
        } else if (activity === 'moderate') {
            dailyCalorieRequirement = bmr * 1.55;
        } else if (activity === 'active') {
            dailyCalorieRequirement = bmr * 1.725;
        }

        // Display the result
        const resultText = `Your daily calorie requirement is: ${dailyCalorieRequirement.toFixed(2)} calories`;
        calorieResult.textContent = resultText;
        mealPlan.style.display = 'block';

        // Fetch meal data for breakfast, lunch, and dinner
        const breakfastResponse = await fetch('https://static.independent.co.uk/2023/01/06/14/iStock-1256255135.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp');
        const lunchResponse = await fetch('https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/5/Desk/2021_5$largeimg_997137988.jpeg');
        const dinnerResponse = await fetch('https://thumbs.dreamstime.com/z/vegetable-gujarati-kathiyawadi-thali-table-indian-meal-216317666.jpg?w=576');

        if (breakfastResponse.ok && lunchResponse.ok && dinnerResponse.ok) {
            // Convert response to blob and create object URLs for images
            const breakfastImageURL = URL.createObjectURL(await breakfastResponse.blob());
            const lunchImageURL = URL.createObjectURL(await lunchResponse.blob());
            const dinnerImageURL = URL.createObjectURL(await dinnerResponse.blob());

            // Update meal cards with data
            document.getElementById('breakfastImage').src = breakfastImageURL;
            document.getElementById('breakfastCalories').textContent = '400 Calories'; // Update with actual data
            document.getElementById('lunchImage').src = lunchImageURL;
            document.getElementById('lunchCalories').textContent = '600 Calories'; // Update with actual data
            document.getElementById('dinnerImage').src = dinnerImageURL;
            document.getElementById('dinnerCalories').textContent = '800 Calories'; // Update with actual data
        } else {
            // Handle error if meal data fetching fails
            console.error('Failed to fetch meal data');
        }




        // Simulated meal data (you should fetch this data from an API)
const breakfastData = {
    name: 'Breakfast Meal',
    calories: 400,
    image: 'https://static.independent.co.uk/2023/01/06/14/iStock-1256255135.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp'
};

const lunchData = {
    name: 'Lunch Meal',
    calories: 600,
    image: 'Launch.png'
};

const dinnerData = {
    name: 'Dinner Meal',
    calories: 800,
    image: 'https://thumbs.dreamstime.com/z/vegetable-gujarati-kathiyawadi-thali-table-indian-meal-216317666.jpg?w=576'
};

// Update meal cards with data
document.getElementById('breakfastImage').src = breakfastData.image;
document.getElementById('breakfastCalories').textContent = breakfastData.calories;
document.getElementById('lunchImage').src = lunchData.image;
document.getElementById('lunchCalories').textContent = lunchData.calories;
document.getElementById('dinnerImage').src = dinnerData.image;
document.getElementById('dinnerCalories').textContent = dinnerData.calories;

    });
});
