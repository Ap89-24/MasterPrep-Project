export const questions = {
  physics: [
    {
      text: "A particle moves in a circle of radius 2m with constant speed. If the period of revolution is 4π seconds, what is the magnitude of its acceleration?",
      options: ["0.5 m/s²", "1 m/s²", "2 m/s²", "4 m/s²"],
      correctAnswer: "0.5 m/s²",
      difficulty: "medium",
      timeLimit: 5,
      solution: "Using the formula for centripetal acceleration a = v²/r where v = 2πr/T. Here r = 2m and T = 4π s. Substituting: v = 2π(2)/(4π) = 1 m/s. Therefore, a = (1)²/2 = 0.5 m/s²"
    },
    {
      text: "A photon of wavelength 400 nm strikes a metal surface, causing emission of electrons. If the work function of the metal is 2.0 eV, what is the maximum kinetic energy of the emitted electrons? (h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s)",
      options: ["0.1 eV", "1.1 eV", "2.1 eV", "3.1 eV"],
      correctAnswer: "1.1 eV",
      difficulty: "hard",
      timeLimit: 8,
      solution: "Using E = hc/λ - φ, where E is kinetic energy, h is Planck's constant, c is speed of light, λ is wavelength, and φ is work function. E = (6.63×10⁻³⁴)(3×10⁸)/(400×10⁻⁹) - 2.0 = 1.1 eV"
    },
    {
      text: "A photon of wavelength 400 nm strikes a metal surface, causing emission of electrons. If the work function of the metal is 2.0 eV, what is the maximum kinetic energy of the emitted electrons? (h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s)",
      options: ["0.1 eV", "1.1 eV", "2.1 eV", "3.1 eV"],
      correctAnswer: "1.1 eV",
      difficulty: "easy",
      timeLimit: 8,
      solution: "Using E = hc/λ - φ, where E is kinetic energy, h is Planck's constant, c is speed of light, λ is wavelength, and φ is work function. E = (6.63×10⁻³⁴)(3×10⁸)/(400×10⁻⁹) - 2.0 = 1.1 eV"
    }
  ],
  chemistry: [
    {
      text: "Calculate the pH of a 0.01M HCl solution at 25°C.",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2",
      difficulty: "easy",
      timeLimit: 3,
      solution: "For a strong acid like HCl, [H⁺] = [HCl] = 0.01M. pH = -log[H⁺] = -log(0.01) = 2"
    },
    {
      text: "What is the hybridization of carbon in benzene?",
      options: ["sp", "sp²", "sp³", "sp³d"],
      correctAnswer: "sp²",
      difficulty: "medium",
      timeLimit: 4,
      solution: "In benzene, each carbon atom forms three sigma bonds (two with carbon atoms and one with hydrogen) and one pi bond. This requires sp² hybridization, with the remaining p orbital forming the delocalized pi system."
    }
  ],
  mathematics: [
    {
      text: "Find the derivative of f(x) = x³sin(x)",
      options: [
        "3x²sin(x) + x³cos(x)",
        "3x²sin(x) - x³cos(x)",
        "x³sin(x) + x³cos(x)",
        "3x²sin(x)"
      ],
      correctAnswer: "3x²sin(x) + x³cos(x)",
      difficulty: "medium",
      timeLimit: 6,
      solution: "Using the product rule, d/dx[f(x)g(x)] = f'(x)g(x) + f(x)g'(x). Here, f(x) = x³ and g(x) = sin(x). Therefore, f'(x) = 3x² and g'(x) = cos(x). Result: 3x²sin(x) + x³cos(x)"
    }
  ]
};