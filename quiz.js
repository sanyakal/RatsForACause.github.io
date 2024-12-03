const categoryScoresTotalPoss = 6;
const questions = [
    {
        "question": "After a long day of classes, you’re eager to go home. But too many people are on this bus! The next one is going to run way later, what's our alternative?",
        "answers": [
            { "text": "Time to get those steps in, let’s walk!", "category": "transport", "points": 0.33},
            { "text": "I do NOT have time for this. Where's the nearest Uber?", "category": "transport", "points": 1},
            { "text": "Waiting for the next bus isn't so bad... let's eat while we wait.", "category": "transport", "points": 0.66},
            { "text": "Good thing there's an E-scooter station near me, this is way better.", "category": "transport", "points": 0.66},
        ],
        "image": "images/q1.gif"
    },
    {
        "question": "You’ve just arrived home, hungry after a busy day of classes, and you’re scrambling to get dinner ready. You don’t feel like making something elaborate, so you’re weighing your options. What are you considering?",
        "answers": [
            { "text": "Throw a quick meal together! You’ve been craving carne asada tacos all week.", "category": "food", "points": 1},
            { "text": "Ordering pizza, sushi, or a burrito from a restaurant that’s getting here asap!", "category": "transport", "points": 1},
            { "text": "See what’s available at your local food co-op!", "category": "commorg", "points": 1},
            { "text": "Cooking a quick, plant-based meal with fresh ingredients while listening to a climate change docuseries. You’re a David Attenborough stan!", "category": "scientist", "points": 1}
        ],
        "image": "images/q2.gif"
    },
    {
        "question": "As you’re eating your dinner, your roommate joins you, and the two of you start discussing your plans for the 3-day weekend coming up. You’re thinking of a trip together to recharge. Which of the following will you do?",
        "answers": [
            { "text": "Take the train and go to a city that is 1-2 hours away. There’s been a hotpot place you’ve been dying to try!", "category": "transport", "points": 0.33},
            { "text": "Take an airplane and visit another state. You’ve been wanting to hike in Sedona!", "category": "transport", "points": 0.66},
            { "text": "Stay local and visit a part of your town you have never been to. There’s a cute farmer’s market you’ve been wanting to check out!", "category": "transport", "points": 1}
        ],
        "image": "images/q3.gif"
    },
    {
        "question": "After finishing dinner, you’re ready to unwind for the night and do your skincare routine. You’ve been taking better care of your skin lately and you’ve been using a basic routine: a good but boring cleanser and sunscreen. You’re scrolling through your TikTok feed and see that there’s a new cleanser that people are saying has the best skincare benefits ever! What do you do?",
        "answers": [
            { "text": "Drive to the store right now. You need to see what everyone’s talking about.", "category": "fashion", "points": 0.66},
            { "text": "Keep scrolling. You already know what works for you and your cleanser does what it needs to do.", "category": "fashion", "points": 0.33},
            { "text": "Finish your cleanser, then go buy the new cleanser. You don’t want to waste your cleanser, but you do want to see what the hype is.", "category": "fashion", "points": 0.33},
            { "text": "Throw out your old cleanser and get the new one. It’s kind of a boring product, and you don’t have enough counter space for both.", "category": "fashion", "points": 1}
        ],
        "image":"images/q4.gif"
    },
    {
        "question": "You’ve finished your skincare routine. This all-nighter is becoming unavoidable, what’s your study spot?",
        "answers": [
            { "text": "Denny’s - a constant supply of coffee and food", "category": "food", "points": 1},
            { "text": "Library - the sense of communal struggle will hold you accountable", "category": "commorg", "points": 1},
            { "text": "My room - the solitude will be great", "category": "scientist", "points": 1},
            { "text": "You mean my first one of the week? Nothing’s more effective for me than hoping in my car to drive a short distance to the cafe next to my home", "category": "transport", "points": 1},
            { "text": "Anywhere will do - I’ll just get myself an extra great treat tomorrow", "category": "fashion", "points": 1}
        ],
        "image": "images/q5.gif"
    },
    {
        "question": "Now it’s time to lock in! You’re doing some last minute cramming for your midterm tomorrow and you’re deciding which resources your professor recommended. Which one are you going to try first?",
        "answers": [
            { "text": "A trusty digital friend, I’ll bounce ideas off of ChatGPT or CoPilot!", "category": "tech", "points": 1},
            { "text": "Organizing a late night study session with your friends, we’re struggling but at least not alone", "category": "commorg", "points": 1},
            { "text": "Textbook + past lecture material", "category": "scientist", "points": 1 }
        ],
        "image": "images/q6.gif"
    },
    {
        "question": "You have had a busy evening with finishing homework and studying for a midterm. Now you are ready to take a break. What are you considering?",
        "answers": [
            { "text": "A well-deserved break! You take out your phone, scroll through TikTok, and wind down", "category": "food", "points": 1},
            { "text": "It’s tea time. You choose a calming herbal tea and snuggle up on the couch to unwind", "category": "transport", "points": 1},
            { "text": "A brief walk around the block to clear your mind. You need that fresh air.", "category": "fashion", "points": 1},
            { "text": "A quick power nap before getting back to work. You have this in the bag!", "category": "commorg", "points": 1}
        ],
        "image": "images/q7.gif"
    },
    {
        "question": "You’re finally done with your midterm and as you walk past the college bookstore, something catches your eye– they're running their annual holiday sale! What are you buying to treat yourself after the midterm?",
        "answers": [
            { "text": "Holiday merch! You have to get it before the season’s up", "category": "fashion", "points": 1},
            { "text": "The newest iPhone - you’ve heard the camera is incredible.", "category": "tech", "points": 1},
            { "text": "The newest Hydro Flask, the color is so cute!", "category": "food", "points": 1},
            { "text": "A book you’ve been eyeing for a while. BookTok has you convinced it’s the best one yet!", "category": "scientist", "points": 1},
            { "text": "Game day merch! You can’t wait to cheer on the basketball team next week.", "category": "commorg", "points": 1}
        ],
        "image": "images/q8.gif"
    },
    {
        "question": "You arrive home and are ready to relax after a tiring day. You decide to try to read a book. It’s a cloudy morning and you cannot see well. What will you do?",
        "answers": [
            { "text": "Turn on the lights", "category": "tech", "points": 1},
            { "text": "Turn on only the desk lamp", "category": "tech", "points": 0.66},
            { "text": "Use a Kindle", "category": "tech", "points": 0.66},
            { "text": "Open all curtains/blinds", "category": "tech", "points": 0.33}
        ],
        "image": "images/q9.gif"
    },
    {
        "question": "Amidst reading, you just remembered you need to create a social event to welcome new members of the club on campus you're in charge of. What are you considering?",
        "answers": [
            { "text": "Having a movie night and ordering a large amount of fast food for the event, like pizza, burgers, and fries, to easily feed a big group", "category": "food", "points": 1},
            { "text": "Code along or quick design project - something for resume building!", "category": "tech", "points": 1},
            { "text": "Organizing a volunteer event at a local food bank where everyone can give back to the community and meet new people", "category": "commorg", "points": 1},
            { "text": "Invite a guest speaker from the local zoo", "category": "scientist", "points": 1}
        ],
        "image": "images/q10.gif"
    },
    {
        "question": "Now you and your friends are planning and getting ready for a weekend road trip. What is your first priority?",
        "answers": [
            { "text": "Stopping by at a fast food drive-thru for burgers, fries, and sodas, then grabbing a bunch of snacks at the gas station to enjoy on the road.", "category": "food", "points": 1},
            { "text": "Packing your electronics (computer, phones, iPads).", "category": "tech", "points": 1},
            { "text": "Going to the mall to get the latest quarter-zip you've seen all over social media. It’ll be so cozy for the car.", "category": "fashion", "points": 1},
            { "text": "Researching the city you’re going to and its nearby hiking trails.", "category": "scientist", "points": 1}
        ],
        "image": "images/q11.gif"
    },
    {
        "question": "You're in charge of ensuring the road trip goes smoothly. What's the first thing you would check?",
        "answers": [
            { "text": "Make sure all your friends bring their chargers and portable batteries. It’s going to be a long trip!", "category": "tech", "points": 1},
            { "text": "Ask if everyone packed their best outfits. We’re going to be taking pictures!", "category": "fashion", "points": 1},
            { "text": "Ensure that we get from place to place as fast as possible. We have so little time but so much to see!", "category": "transport", "points": 1}
        ],
        "image": "images/q12.gif"
    }
];

let selectedAnswerPoints = null;
let selectedAnswerCategory = null;
let currentQuestionIndex = 0;
let categoryScores = {
    fashion: 0,
    tech: 0,
    transport: 0,
    food: 0,
    commorg: 0,
    scientist: 0
};
let categoryScoresPercentages = {
    fashion: 0,
    tech: 0,
    transport: 0,
    food: 0,
    commorg: 0,
    scientist: 0
};

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;

    // Change the question image
    const questionImage = document.getElementById("question-image");
    questionImage.src = question.image;

    // Clear previous answers
    const answerList = document.getElementById("answer-list");
    answerList.innerHTML = '';

    // Get the Next button and disable it initially
    let nextButton = document.querySelector(".next-button");
    nextButton.disabled = true; // Disable the Next button initially

    // Create radio buttons dynamically based on the number of answers
    question.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.id = `answer_${index}`;
        input.className = "answer";

        const label = document.createElement("label");
        label.setAttribute("for", input.id);
        label.textContent = answer.text;

        // Enable the Next button when an answer is selected
        input.addEventListener("change", function() {
            selectedAnswerPoints = answer.points;
            selectedAnswerCategory = answer.category;

            // Enable the Next button once an answer is selected
            nextButton.disabled = false; // Enable the Next button
        });

        input.addEventListener("change", function() {
            selectedAnswerPoints = answer.points;
            selectedAnswerCategory = answer.category;
        })

        li.appendChild(input);
        li.appendChild(label);
        answerList.appendChild(li);
    });

    // Update the progress bar
    const progressBar = document.getElementById("progress-bar");
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.value = progress;
}

// Show the quiz container and hide the header and accreditation when "Begin Quiz" is clicked
document.querySelector(".begin-quiz").addEventListener("click", function() {
    document.querySelector(".quiz-container").style.display = "block";  // Show the quiz container
    document.querySelector(".thumbnail").style.display = "none";  // Hide subway GIF
    document.querySelector(".quiz-title").style.display = "none";       // Hide the quiz title
    document.querySelector(".accredition").style.display = "none";     // Hide the accreditation text
    this.style.display = "none";  // Hide the "Begin Quiz" button
    loadQuestion();  // Load the first question
});

function loadNextQuestion() {
    if (selectedAnswerPoints !== null) {
        categoryScores[selectedAnswerCategory] += selectedAnswerPoints;
    }
   // Proceed to the next question
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(); // Load the next question
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    // Get the character match result
    const { maxPercentage, categoriesWithMaxPercentage } = calculateCharacterMatch();

    // Hide the quiz container
    document.querySelector(".quiz-container").style.display = "none";

    // Show the final result container
    const finalResult = document.getElementById("final-result");
    finalResult.style.display = "block";

    // Randomly select a category if multiple categories have the same max percentage
    const randomCategory = categoriesWithMaxPercentage[Math.floor(Math.random() * categoriesWithMaxPercentage.length)];

    // Set the final image (you can customize images for each category)
    const finalImage = document.getElementById("final-image");

    // Set different images based on the category
    const categoryImages = {
        fashion: "images/fashionRatResult.png",
        tech: "images/techRatResult.png",
        transport: "images/transportRatResult.png",
        food: "images/foodRatResult.png",
        commorg: "images/commorgRatResult.png",
        scientist: "images/scientistRatResult.png"
    };
    finalImage.src = categoryImages[randomCategory] || "default_image.jpg";  // Use a default if no match found

    // Set the final text (use the randomCategory to customize the text)
    const finalText = document.getElementById("final-text");

}

function calculateCharacterMatch() {
    let maxPercentage = 0;
    let categoriesWithMaxPercentage = [];

    // Calculate percentage for each category
    for (let index in categoryScores) {
        categoryScoresPercentages[index] = (categoryScores[index] / categoryScoresTotalPoss) * 100;

        // If we find a new max, update the max and reset the categories array
        if (categoryScoresPercentages[index] > maxPercentage) {
            maxPercentage = categoryScoresPercentages[index];
            categoriesWithMaxPercentage = [index];  // Start a new list with the current category
        } else if (categoryScoresPercentages[index] === maxPercentage) {
            // If the percentage is equal to the current max, add the category to the list
            categoriesWithMaxPercentage.push(index);
        }
    }
    // Return both the max percentage and the list of categories with that max
    return { maxPercentage, categoriesWithMaxPercentage };
}
