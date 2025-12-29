// Nutra Core Logic

const state = {
    dailyGoal: 2200,
    currentKcal: 1240,
    goals: {
        protein: 150,
        carbs: 250,
        fats: 70
    },
    currentMacros: {
        protein: 85,
        carbs: 140,
        fats: 42
    },
    insights: [
        { type: 'warning', title: 'Bajo en Hierro', text: 'Te falta un 30% para tu meta óptima diaria.' }
    ]
};

// Simulated Nutrition Engine (The "Brain")
const processFoodInput = (input) => {
    console.log(`Processing: ${input}`);
    
    // Simple regex/keyword matching for simulation
    const nutritionDB = {
        'pollo': { kcal: 165, p: 31, c: 0, f: 3.6 },
        'pasta': { kcal: 131, p: 5, c: 25, f: 1.1 },
        'huevo': { kcal: 155, p: 13, c: 1.1, f: 11 },
        'ensalada': { kcal: 50, p: 2, c: 8, f: 0.5 },
        'salmon': { kcal: 208, p: 20, c: 0, f: 13 },
        'yogur': { kcal: 59, p: 10, c: 3.6, f: 0.4 },
        'nueces': { kcal: 654, p: 15, c: 14, f: 65 }
    };

    let addedKcal = 0;
    let addedP = 0;
    let addedC = 0;
    let addedF = 0;

    const words = input.toLowerCase().split(' ');
    words.forEach(word => {
        if (nutritionDB[word]) {
            addedKcal += nutritionDB[word].kcal;
            addedP += nutritionDB[word].p;
            addedC += nutritionDB[word].c;
            addedF += nutritionDB[word].f;
        }
    });

    // Default if no match
    if (addedKcal === 0) addedKcal = 250; 

    return { kcal: addedKcal, p: addedP, c: addedC, f: addedF };
};

// UI Update Functions
const updateUI = () => {
    // Update Kcal Ring
    const progressCircle = document.getElementById('kcalProgress');
    const kcalText = document.getElementById('currentKcal');
    
    if (kcalText) {
        const pct = Math.min((state.currentKcal / state.dailyGoal) * 100, 100);
        const offset = 283 - (283 * pct) / 100;
        
        if (progressCircle) progressCircle.style.strokeDashoffset = offset;
        kcalText.innerText = state.currentKcal.toLocaleString();
    }

    // Update Macros
    const pVal = document.getElementById('proteinVal');
    const cVal = document.getElementById('carbsVal');
    const fVal = document.getElementById('fatsVal');
    
    if (pVal) pVal.innerText = Math.round(state.currentMacros.protein);
    if (cVal) cVal.innerText = Math.round(state.currentMacros.carbs);
    if (fVal) fVal.innerText = Math.round(state.currentMacros.fats);

    updateBar('protein', state.currentMacros.protein, state.goals.protein);
    updateBar('carbs', state.currentMacros.carbs, state.goals.carbs);
    updateBar('fats', state.currentMacros.fats, state.goals.fats);

    // Update Recommendations Logic
    updateRecommendations();
};

const updateBar = (macro, current, goal) => {
    const card = document.querySelector(`[data-macro="${macro}"]`);
    if (card) {
        const fill = card.querySelector('.fill');
        const pct = Math.min((current / goal) * 100, 100);
        fill.style.width = `${pct}%`;
    }
};

const updateRecommendations = () => {
    const recSectionCard = document.querySelector('.recommendation-section .promo-card');
    if (!recSectionCard) return;

    const title = recSectionCard.querySelector('h3');
    const desc = recSectionCard.querySelector('p');
    const benefits = recSectionCard.querySelector('.benefits');

    if (state.currentMacros.protein < state.goals.protein * 0.6) {
        title.innerText = 'Cena Alta en Proteína';
        desc.innerText = 'Pechuga de pollo con quinoa y brócoli.';
        benefits.innerText = '+45g Proteína • Fibra';
    } else if (state.currentMacros.fats < state.goals.fats * 0.5) {
        title.innerText = 'Snack Equilibrador';
        desc.innerText = 'Un puñado de nueces con yogur griego.';
        benefits.innerText = '+12g Grasas Saludables • Probióticos';
    } else {
        title.innerText = 'Mantén el Ritmo';
        desc.innerText = 'Una infusión relajante o fruta ligera.';
        benefits.innerText = 'Bajo en Calorías • Hidratación';
    }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const foodInput = document.getElementById('foodInput');
    
    if (foodInput) {
        foodInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const val = foodInput.value.trim();
                if (val) {
                    const nutrition = processFoodInput(val);
                    
                    // Update State
                    state.currentKcal += nutrition.kcal;
                    state.currentMacros.protein += nutrition.p;
                    state.currentMacros.carbs += nutrition.c;
                    state.currentMacros.fats += nutrition.f;
                    
                    // Feedback
                    foodInput.value = '';
                    foodInput.placeholder = '¡Registrado! ' + nutrition.kcal + ' kcal añadidos...';
                    
                    setTimeout(() => {
                        foodInput.placeholder = '¿Qué más has comido?';
                    }, 2000);

                    updateUI();
                }
            }
        });
    }

    // Initial UI Sync
    updateUI();
});
