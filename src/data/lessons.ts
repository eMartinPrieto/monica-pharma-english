export type QuizQuestion = { question: string; options: string[]; correctIndex: number; explanation: string }
export type RoleplayScenario = { customerLine: string; context: string; options: string[]; correctIndex: number; explanation: string }
export type Lesson = { id: string; title: string; subtitle: string; estimatedMinutes: number; level: string; goal: string; theory: { heading: string; body: string; examples: { english: string; spanish: string; note: string }[] }[]; usefulPhrases: { english: string; spanish: string; situation: string }[]; quiz: QuizQuestion[]; roleplay: RoleplayScenario[] }

export const lessons: Lesson[] = [
  {
    id: 'welcome-counter',
    title: 'Atender con seguridad desde el primer minuto',
    subtitle: 'Saludar, abrir conversación y entender qué necesita el cliente',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Aprender a recibir a un cliente en inglés con frases naturales, educadas y útiles en farmacia.',
    theory: [
      { heading: 'La primera frase debe sonar amable', body: 'En una farmacia conviene empezar con una frase abierta y educada. Evitamos “What do you want?” porque puede sonar brusco.', examples: [
        { english: 'How can I help you?', spanish: '¿En qué puedo ayudarle?', note: 'Frase segura para casi cualquier cliente.' },
        { english: 'What seems to be the problem?', spanish: '¿Qué le ocurre?', note: 'Muy útil cuando el cliente viene con síntomas.' },
        { english: 'Is it for you or for someone else?', spanish: '¿Es para usted o para otra persona?', note: 'Pregunta clave antes de recomendar.' }
      ]},
      { heading: 'Usar “could” para sonar más educada', body: '“Could” suaviza las preguntas. En atención sanitaria ayuda a sonar profesional y cercana.', examples: [
        { english: 'Could you tell me what symptoms you have?', spanish: '¿Podría decirme qué síntomas tiene?', note: 'Más amable que dar una orden.' },
        { english: 'Could you explain what happened?', spanish: '¿Podría explicarme qué ha pasado?', note: 'Útil cuando el cliente no se explica bien.' }
      ]}
    ],
    usefulPhrases: [
      { english: 'How can I help you?', spanish: '¿En qué puedo ayudarle?', situation: 'Inicio de atención' },
      { english: 'What seems to be the problem?', spanish: '¿Qué le ocurre?', situation: 'Cliente con síntomas' },
      { english: 'Is it for you or for someone else?', spanish: '¿Es para usted o para otra persona?', situation: 'Antes de recomendar' },
      { english: 'Could you tell me your symptoms?', spanish: '¿Podría decirme sus síntomas?', situation: 'Cuando necesitas más información' }
    ],
    quiz: [
      { question: 'Un cliente entra y dice “Hi”. ¿Cuál es la mejor respuesta?', options: ['What do you want?', 'How can I help you?', 'Tell me your illness.', 'You need medicine.'], correctIndex: 1, explanation: '“How can I help you?” es educada y natural.' },
      { question: '¿Cuál suena más profesional?', options: ['What problem do you have?', 'What seems to be the problem?', 'Say symptoms.', 'You are sick?'], correctIndex: 1, explanation: 'Es una fórmula muy natural en atención sanitaria.' }
    ],
    roleplay: [
      { context: 'Entra una turista con cara de preocupación.', customerLine: 'Hi, I need something. I do not feel very well.', options: ['What do you want?', 'How can I help you? What seems to be the problem?', 'Take this medicine.', 'I cannot help you.'], correctIndex: 1, explanation: 'Primero abres conversación y preguntas qué ocurre.' }
    ]
  },
  {
    id: 'symptoms-basic',
    title: 'Preguntar síntomas sin bloquearse',
    subtitle: 'Dolor, fiebre, tos, alergias y duración',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Aprender preguntas básicas para entender los síntomas antes de recomendar un producto.',
    theory: [
      { heading: 'La pregunta clave: “How long have you had…?”', body: 'Sirve para preguntar desde cuándo tiene un síntoma.', examples: [
        { english: 'How long have you had the cough?', spanish: '¿Desde cuándo tiene la tos?', note: 'Muy útil antes de recomendar jarabes.' },
        { english: 'How long have you had the fever?', spanish: '¿Desde cuándo tiene fiebre?', note: 'La fiebre puede requerir derivación médica.' }
      ]},
      { heading: 'Preguntas de seguridad', body: 'Antes de recomendar, pregunta por alergias, medicación actual y situaciones especiales.', examples: [
        { english: 'Do you have any allergies?', spanish: '¿Tiene alguna alergia?', note: 'Pregunta básica de seguridad.' },
        { english: 'Are you taking any medication?', spanish: '¿Está tomando alguna medicación?', note: 'Evita interacciones.' }
      ]}
    ],
    usefulPhrases: [
      { english: 'How long have you had it?', spanish: '¿Desde cuándo lo tiene?', situation: 'Cuando ya sabes el síntoma' },
      { english: 'Do you have a fever?', spanish: '¿Tiene fiebre?', situation: 'Resfriado o dolor de garganta' },
      { english: 'Do you have any allergies?', spanish: '¿Tiene alguna alergia?', situation: 'Antes de recomendar' },
      { english: 'Are you taking any medication?', spanish: '¿Está tomando alguna medicación?', situation: 'Antes de aconsejar algo' }
    ],
    quiz: [
      { question: '¿Cómo preguntarías “Desde cuándo tiene la tos”?', options: ['When cough?', 'How long have you had the cough?', 'Do you cough long?', 'You have cough since?'], correctIndex: 1, explanation: 'La estructura correcta es “How long have you had…?”.' },
      { question: 'Antes de recomendar, ¿qué pregunta es más segura?', options: ['Do you have any allergies?', 'Do you like this brand?', 'Are you tourist?', 'Do you want expensive medicine?'], correctIndex: 0, explanation: 'Preguntar por alergias es básico.' }
    ],
    roleplay: [
      { context: 'Una clienta viene con tos.', customerLine: 'Hi, I have a bad cough.', options: ['How long have you had the cough?', 'You need antibiotics.', 'Cough is normal.', 'Take two boxes.'], correctIndex: 0, explanation: 'Primero preguntas duración.' }
    ]
  },
  {
    id: 'safe-advice',
    title: 'Dar consejos de forma clara y segura',
    subtitle: 'Should, can, do not y frases de advertencia',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Aprender a dar instrucciones y recomendaciones sin sonar brusca ni insegura.',
    theory: [
      { heading: '“Should” para recomendar', body: '“Should” permite recomendar sin imponer.', examples: [
        { english: 'You should take this after meals.', spanish: 'Debería tomar esto después de las comidas.', note: 'Recomendación clara.' },
        { english: 'You should see a doctor if it gets worse.', spanish: 'Debería ver a un médico si empeora.', note: 'Derivación prudente.' }
      ]},
      { heading: '“Do not” para advertencias', body: 'Cuando una instrucción es importante, usamos “Do not”.', examples: [
        { english: 'Do not exceed the recommended dose.', spanish: 'No supere la dosis recomendada.', note: 'Frase esencial.' },
        { english: 'Do not take this with alcohol.', spanish: 'No tome esto con alcohol.', note: 'Advertencia clara.' }
      ]}
    ],
    usefulPhrases: [
      { english: 'You should take this after meals.', spanish: 'Debería tomar esto después de las comidas.', situation: 'Instrucciones de toma' },
      { english: 'You can take one tablet every eight hours.', spanish: 'Puede tomar un comprimido cada ocho horas.', situation: 'Explicar pauta' },
      { english: 'Do not exceed the recommended dose.', spanish: 'No supere la dosis recomendada.', situation: 'Advertencia' },
      { english: 'If symptoms continue, you should see a doctor.', spanish: 'Si los síntomas continúan, debería ver a un médico.', situation: 'Derivación' }
    ],
    quiz: [
      { question: '¿Cuál es “No supere la dosis recomendada”?', options: ['Do not exceed the recommended dose.', 'Do not eat the dose.', 'You should more dose.', 'Take all the dose.'], correctIndex: 0, explanation: 'Es la frase estándar.' },
      { question: '¿Qué expresa “should”?', options: ['Una recomendación', 'Una prohibición absoluta', 'Una pregunta', 'Una marca'], correctIndex: 0, explanation: '“Should” se usa para consejos.' }
    ],
    roleplay: [
      { context: 'Una clienta pregunta si puede conducir.', customerLine: 'Can I drive after taking this?', options: ['Yes, always.', 'This may cause drowsiness, so you should avoid driving.', 'Driving is good.', 'Take more if you drive.'], correctIndex: 1, explanation: 'Avisas del efecto y das recomendación segura.' }
    ]
  }
]
