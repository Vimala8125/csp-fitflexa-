// Check if user is logged in
if (!localStorage.getItem("loggedIn")) {
  window.location.href = "index.html"
}

// Workout data
const workoutData = {
  strength: {
    title: "💪 Strength Training Exercises",
    description: "Build muscle and increase strength with these compound movements",
    exercises: [
      {
        name: "Renegade Rows",
        duration: "3 sets",
        reps: "10-12 per side",
        description: "Plank position dumbbell row engaging core, arms, and back.",
        difficulty: "intermediate",
        image: "./exercise/1.1.jpg",
      },
      {
        name: "Seated Dumbbell Shoulder Press",
        duration: "3 sets",
        reps: "10-12 reps",
        description: "Seated overhead dumbbell press for shoulder strength.",
        difficulty: "beginner",
        image: "./exercise/1.2.jpg",
      },
      {
        name: "Bodyweight Squats",
        duration: "3 sets",
        reps: "15-20 reps",
        description: "Leg and glute strengthening lower body squat exercise.",
        difficulty: "beginner",
        image: "./exercise/1.3.jpg",
      },
      {
        name: "Overhead Barbell Squat",
        duration: "3 sets",
        reps: "8-10 reps",
        description: "Full-body barbell squat with overhead hold for stability and mobility.",
        difficulty: "advanced",
        image: "./exercise/1.4.jpg",
      },
      {
        name: "Lat Pulldowns",
        duration: "3 sets",
        reps: "10-12 reps",
        description: "Cable exercise targeting lats and upper back strength.",
        difficulty: "beginner",
        image: "./exercise/1.5.jpg",
      },
      {
        name: "Dumbbell Lunges",
        duration: "3 sets",
        reps: "10 per leg",
        description: "Single-leg dumbbell lunge for balance and lower body strength.",
        difficulty: "beginner",
        image: "./exercise/1.6.jpg",
      },
      {
        name: "Lying Hamstring Stretch",
        duration: "2-3 sets",
        reps: "20-30 seconds per leg",
        description: "Stretch to improve hamstring flexibility while lying down.",
        difficulty: "beginner",
        image: "./exercise/1.7.jpg",
      },
      {
        name: "Dumbbell Lateral Raises",
        duration: "3 sets",
        reps: "12-15 reps",
        description: "Raises dumbbells to the side to isolate and strengthen shoulders.",
        difficulty: "beginner",
        image: "./exercise/1.8.jpg",
      },
      {
        name: "Pull-Ups",
        duration: "3 sets",
        reps: "6-10 reps",
        description: "Bodyweight exercise focusing on back and bicep strength.",
        difficulty: "intermediate",
        image: "./exercise/1.9.jpg",
      },
    ],
  },

  yoga: {
    title: "🧘 Yoga Exercises",
    description: "Improve flexibility, balance, and mindfulness with these poses",
    exercises: [
      {
        name: "Utthita Trikonasana (Extended Triangle Pose)",
        duration: "30 seconds",
        reps: "Each Side",
        description:
          "Stand with feet wide apart, extend arms out, and reach one hand toward the front foot while the other arm points up. Gaze upward. Stretches legs, hips, spine, and opens the chest. Improves balance and digestion.",
        difficulty: "beginner",
        image: "./exercise/2.1.jpg",
      },
      {
        name: "Virabhadrasana II (Warrior II Pose)",
        duration: "30 seconds",
        reps: "Each Side",
        description:
          "Stand with feet wide apart, bend the front knee while keeping the back leg straight. Extend arms outward and gaze over the front hand. Strengthens legs and shoulders, improves stamina and stability.",
        difficulty: "intermediate",
        image: "./exercise/2.2.jpg",
      },
      {
        name: "Utkatasana (Chair Pose)",
        duration: "30 seconds",
        reps: "Each Side",
        description:
          "Stand with feet together, bend your knees and lower your hips as if sitting on an invisible chair, arms extended overhead. Strengthens thighs and ankles, tones the core, and builds endurance.",
        difficulty: "intermediate",
        image: "./exercise/2.3.jpg",
      },
      {
        name: "Bhujangasana (Cobra Pose)",
        duration: "Hold 15–30 seconds",
        reps: "3–5 times",
        description:
          "Lie on your stomach, place hands under shoulders, and gently lift your chest off the ground using back strength. Opens the chest and strengthens the spine while relieving back tension.",
        difficulty: "beginner",
        image: "./exercise/2.4.jpg",
      },
      {
        name: "Adho Mukha Svanasana (Downward Dog)",
        duration: "Hold 30–60 seconds",
        reps: "3–5 times",
        description:
          "From hands and knees, lift hips upward into an inverted V shape, pressing heels toward the ground. Stretches the spine, hamstrings, calves, and shoulders while energizing the body.",
        difficulty: "beginner",
        image: "./exercise/2.5.jpg",
      },
      {
        name: "Pincha Mayurasana (Feathered Peacock Pose)",
        duration: "30–60 seconds",
        reps: "2–3 times",
        description:
          "A forearm balance where the body is inverted with legs extended upward. Strengthens shoulders, arms, and core while improving balance and focus.",
        difficulty: "advanced",
        image: "./exercise/2.6.jpg",
      },
      {
        name: "Anjaneyasana (Low Lunge Pose)",
        duration: "30–60 seconds",
        reps: "Each Side",
        description:
          "A deep lunge with back knee on the mat and arms reaching upward. Opens the hips and chest, strengthens legs, and improves balance.",
        difficulty: "intermediate",
        image: "./exercise/2.7.jpg",
      },
      {
        name: "Vrikshasana (Tree Pose)",
        duration: "Hold 30–60 seconds",
        reps: "Each Side",
        description:
          "Balance on one leg, place the other foot on the inner thigh or calf, and bring palms together overhead. Enhances balance, concentration, and strengthens legs.",
        difficulty: "beginner",
        image: "./exercise/2.8.jpg",
      },
    ],
  },

  cardio: {
    title: "🏃 Cardio Exercises",
    description: "Boost cardiovascular health and burn calories",
    exercises: [
      {
        name: "Jumping Jacks",
        duration: "3 sets",
        reps: "30-60 seconds",
        description: "Full body cardio exercise to get heart rate up",
        difficulty: "beginner",
        image: "/placeholder.svg?height=200&width=300&text=Jumping+Jacks",
      },
      {
        name: "High Knees",
        duration: "3 sets",
        reps: "30-45 seconds",
        description: "Running in place with high knee lifts",
        difficulty: "beginner",
        image: "/placeholder.svg?height=200&width=300&text=High+Knees",
      },
      {
        name: "Burpees",
        duration: "3 sets",
        reps: "5-10 reps",
        description: "Full body explosive movement combining squat, plank, and jump",
        difficulty: "advanced",
        image: "/placeholder.svg?height=200&width=300&text=Burpees",
      },
      {
        name: "Mountain Climbers",
        duration: "3 sets",
        reps: "30-45 seconds",
        description: "Core and cardio exercise in plank position",
        difficulty: "intermediate",
        image: "/placeholder.svg?height=200&width=300&text=Mountain+Climbers",
      },
      {
        name: "Jump Rope",
        duration: "3 sets",
        reps: "60-120 seconds",
        description: "Classic cardio exercise for coordination and endurance",
        difficulty: "beginner",
        image: "/placeholder.svg?height=200&width=300&text=Jump+Rope",
      },
      {
        name: "Sprint Intervals",
        duration: "5-8 rounds",
        reps: "30 sec sprint, 30 sec rest",
        description: "High intensity interval training for maximum cardio benefit",
        difficulty: "advanced",
        image: "/placeholder.svg?height=200&width=300&text=Sprint+Intervals",
      },
    ],
  },
}

// Cardio workout overview data
const cardioOverview = {
  title: "🏃 Cardio Workout Overview",
  description: "Get your heart pumping with these effective cardio exercises",
  images: [
    {
      src: "./exercise/3.1.jpg",
      title: "Cardio Workouts for Weight Loss",
      description:
        "This infographic displays 7 effective cardio exercises designed to support weight loss. The illustrated workouts include Push Ups, Squats, Plank, Rope Skipping, Running, Single Leg Raise, and Cross Leg Lunges. Each is shown with a recommended duration or rep count, targeting full-body fat burning, endurance building, and core strengthening.",
    },
    {
      src: "./exercise/3.2.jpg",
      title: "At Home Cardio Workout",
      description:
        "This visual guide features 4 cardio exercises that can be done at home without any equipment. The routines include Squats, Butt Kicks, Jogging, and Jumping Jacks. These moves help improve heart health, burn calories, and enhance lower body strength and endurance.",
    },
  ],
}

// Nutrition data
const nutritionData = {
  protein: {
    title: "🥗 High Protein Meal",
    image: "https://i.pinimg.com/736x/5c/10/92/5c109268e207f5379f1c2524e73a2721.jpg",
    description:
    "This high-protein meal features a wholesome combination of grilled chicken, quinoa, black beans, and avocado, offering a nutrient-dense option ideal for fitness and recovery. Rich in lean protein and healthy fats, it supports muscle growth, post-workout repair, and long-lasting satiety. The inclusion of fresh vegetables and complex carbohydrates balances the meal for energy and digestive health. With approximately 30 grams of protein per serving, it's perfect for active individuals focused on weight management, muscle maintenance, and overall wellness."
  },
  breakfast: {
    title: "🍌 Balanced Breakfast",
    image: "./exercise/4.2.jpg",
    description:
     "This image features a variety of nutritious breakfast combinations to start your day right. Options include a boiled egg with brown bread and papaya, mixed fruits with yogurt and muesli, and a vegetable omelette with a banana. These meals provide a balance of protein, fiber, and essential vitamins, promoting sustained energy, improved digestion, and better overall health. Ideal for weight management and maintaining a healthy metabolism."
  },
  detox: {
    title: "🍲 Detox Plan",
    image: "./exercise/4.1.jpg",
    description:
    "This full-day detox diet plan supports weight loss through balanced, clean meals. The schedule includes a protein-rich breakfast with green tea and boiled eggs or oats, a mid-morning snack of seasonal fruits and carrots, and a light lunch of peanut butter toast with vegetable soup. Afternoon snacks consist of mixed nuts and green tea, while dinner offers a simple, nourishing combination of roti, dal, and buttermilk. This plan focuses on hydration, fiber, and nutrient-dense foods to boost metabolism, detox the body, and promote fat loss naturally."

  },
}

// Logout function
function logout() {
  localStorage.removeItem("loggedIn")
  window.location.href = "index.html"
}

// Section switching
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((s) => {
    s.classList.remove("active")
  })

  // Remove active class from all nav buttons
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  // Show selected section
  document.getElementById(sectionId).classList.add("active")

  // Add active class to clicked nav button
  document.querySelector(`[data-section="${sectionId}"]`).classList.add("active")
}

// Save user profile
function saveProfile() {
  const name = document.getElementById("name").value.trim()
  const age = document.getElementById("age").value
  const weight = document.getElementById("weight").value
  const height = document.getElementById("height").value
  const healthIssues = document.getElementById("healthIssues").value.trim()
  const goal = document.getElementById("goal").value

  if (!name || !age || !weight || !goal) {
    document.getElementById("profileMessage").innerText = "⚠ Please fill all required fields."
    document.getElementById("profileMessage").style.color = "#ff6b6b"
    return
  }

  const profile = { name, age, weight, height, healthIssues, goal }
  localStorage.setItem("userProfile", JSON.stringify(profile))
  document.getElementById("profileMessage").innerText = "✅ Profile saved successfully!"
  document.getElementById("profileMessage").style.color = "#4CAF50"
}

// Open nutrition modal
function openNutritionModal(nutritionType) {
  const nutrition = nutritionData[nutritionType]
  if (!nutrition) return

  document.getElementById("nutritionModalTitle").innerText = nutrition.title
  document.getElementById("nutritionModalImage").src = nutrition.image
  document.getElementById("nutritionModalImage").alt = nutrition.title
  document.getElementById("nutritionModalDescription").innerText = nutrition.description

  document.getElementById("nutritionModal").style.display = "block"
}

// Close nutrition modal
function closeNutritionModal() {
  document.getElementById("nutritionModal").style.display = "none"
}

// Open cardio overview modal
function openCardioOverview() {
  document.getElementById("cardioModalTitle").innerText = cardioOverview.title
  document.getElementById("cardioModalDescription").innerText = cardioOverview.description

  const cardioImageGrid = document.getElementById("cardioImageGrid")
  cardioImageGrid.innerHTML = ""

  cardioOverview.images.forEach((imageData) => {
    const imageCard = document.createElement("div")
    imageCard.className = "cardio-image-card"

    imageCard.innerHTML = `
      <div class="cardio-image">
        <img src="${imageData.src}" alt="${imageData.title}" loading="lazy">
      </div>
      <div class="cardio-content">
        <h3>${imageData.title}</h3>
        <p>${imageData.description}</p>
      </div>
    `

    cardioImageGrid.appendChild(imageCard)
  })

  document.getElementById("cardioModal").style.display = "block"
}

// Open workout modal (for strength and yoga)
function openWorkoutModal(workoutType) {
  if (workoutType === "cardio") {
    openCardioOverview()
    return
  }

  const workout = workoutData[workoutType]
  if (!workout) return

  document.getElementById("modalTitle").innerText = workout.title
  document.getElementById("modalDescription").innerText = workout.description

  const exerciseList = document.getElementById("exerciseList")
  exerciseList.innerHTML = ""

  workout.exercises.forEach((exercise) => {
    const exerciseCard = document.createElement("div")
    exerciseCard.className = "exercise-card"

    const difficultyClass = `difficulty-${exercise.difficulty}`
    const difficultyText = exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)

    exerciseCard.innerHTML = `
      <div class="exercise-image">
        <img src="${exercise.image}" alt="${exercise.name}" loading="lazy">
      </div>
      <div class="exercise-content">
        <div class="exercise-header">
          <h3>${exercise.name}</h3>
          <span class="difficulty-badge ${difficultyClass}">${difficultyText}</span>
        </div>
        <div class="exercise-details">
          <div class="exercise-detail">
            <span>⏱️</span>
            <span>${exercise.duration}</span>
          </div>
          <div class="exercise-detail">
            <span>🎯</span>
            <span>${exercise.reps}</span>
          </div>
        </div>
        <p>${exercise.description}</p>
      </div>
    `

    exerciseList.appendChild(exerciseCard)
  })

  document.getElementById("exerciseModal").style.display = "block"
}

// Close modals
function closeModal() {
  document.getElementById("exerciseModal").style.display = "none"
}

function closeCardioModal() {
  document.getElementById("cardioModal").style.display = "none"
}

// Close modal when clicking outside
window.onclick = (event) => {
  const exerciseModal = document.getElementById("exerciseModal")
  const cardioModal = document.getElementById("cardioModal")
  const nutritionModal = document.getElementById("nutritionModal")

  if (event.target === exerciseModal) {
    exerciseModal.style.display = "none"
  }

  if (event.target === cardioModal) {
    cardioModal.style.display = "none"
  }

  if (event.target === nutritionModal) {
    nutritionModal.style.display = "none"
  }
}

// Add a community post
function addPost() {
  const postContent = document.getElementById("newPost").value.trim()
  if (!postContent) return

  const postDiv = document.createElement("div")
  postDiv.className = "post"
  postDiv.innerHTML = `<p>${postContent}</p>`
  document.getElementById("posts").prepend(postDiv)
  document.getElementById("newPost").value = ""
}

// Send friend request
function sendRequest(name) {
  document.getElementById("friendMessage").innerText = `✅ Friend request sent to ${name}`
  document.getElementById("friendMessage").style.color = "#4CAF50"

  // Clear message after 3 seconds
  setTimeout(() => {
    document.getElementById("friendMessage").innerText = ""
  }, 3000)
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Show workout section by default
  showSection("workout")

  // Load saved profile if exists
  const savedProfile = localStorage.getItem("userProfile")
  if (savedProfile) {
    const profile = JSON.parse(savedProfile)
    document.getElementById("name").value = profile.name || ""
    document.getElementById("age").value = profile.age || ""
    document.getElementById("weight").value = profile.weight || ""
    document.getElementById("height").value = profile.height || ""
    document.getElementById("healthIssues").value = profile.healthIssues || ""
    document.getElementById("goal").value = profile.goal || ""
  }
})
