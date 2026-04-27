export type QuizQuestion = {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type RoleplayScenario = {
  customerLine: string
  context: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type Lesson = {
  id: string
  title: string
  subtitle: string
  estimatedMinutes: number
  level: string
  goal: string
  theory: {
    heading: string
    body: string
    examples: {
      english: string
      spanish: string
      note: string
    }[]
  }[]
  usefulPhrases: {
    english: string
    spanish: string
    situation: string
  }[]
  quiz: QuizQuestion[]
  roleplay: RoleplayScenario[]
}

export const lessons: Lesson[] = [
  {
    id: 'welcome-counter',
    title: 'Atender con seguridad desde el primer minuto',
    subtitle: 'Saludar, abrir conversación y entender qué necesita el cliente',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Aprender a recibir a un cliente en inglés con frases naturales, educadas y útiles en farmacia.',
    theory: [
      {
        heading: 'La primera frase tiene que sonar amable, no robótica',
        body:
          'En una farmacia no queremos sonar como un interrogatorio. La frase inicial debe ser abierta, educada y fácil de entender. Evitamos frases demasiado directas como “What do you want?” porque pueden sonar bruscas. El objetivo es abrir la conversación, generar confianza y conseguir información sin precipitarse.',
        examples: [
          {
            english: 'How can I help you?',
            spanish: '¿En qué puedo ayudarle?',
            note: 'Es la frase más segura y versátil para empezar cualquier atención.'
          },
          {
            english: 'What seems to be the problem?',
            spanish: '¿Qué le ocurre?',
            note: 'Muy útil cuando el cliente viene con síntomas y no con un producto concreto.'
          },
          {
            english: 'Is it for you or for someone else?',
            spanish: '¿Es para usted o para otra persona?',
            note: 'Pregunta clave antes de recomendar nada, especialmente si el producto es para un niño, una persona mayor o una embarazada.'
          }
        ]
      },
      {
        heading: 'Usar “could” para sonar más educada',
        body:
          '“Could” suaviza las preguntas. En atención al público, especialmente en farmacia, ayuda a sonar profesional y cercana. No hace falta abusar de estructuras difíciles: unas pocas frases bien aprendidas pueden resolver muchas situaciones reales.',
        examples: [
          {
            english: 'Could you tell me what symptoms you have?',
            spanish: '¿Podría decirme qué síntomas tiene?',
            note: 'Más educado que “Tell me your symptoms”.'
          },
          {
            english: 'Could you explain what happened?',
            spanish: '¿Podría explicarme qué ha pasado?',
            note: 'Útil cuando el cliente no se expresa claramente o está nervioso.'
          },
          {
            english: 'Could you show me the product you normally use?',
            spanish: '¿Podría enseñarme el producto que usa normalmente?',
            note: 'Muy práctica cuando el cliente no recuerda el nombre.'
          }
        ]
      }
    ],
    usefulPhrases: [
      {
        english: 'How can I help you?',
        spanish: '¿En qué puedo ayudarle?',
        situation: 'Inicio de cualquier atención.'
      },
      {
        english: 'What seems to be the problem?',
        spanish: '¿Qué le ocurre?',
        situation: 'Cliente con síntomas.'
      },
      {
        english: 'Is it for you or for someone else?',
        spanish: '¿Es para usted o para otra persona?',
        situation: 'Antes de recomendar un producto.'
      },
      {
        english: 'Could you tell me your symptoms?',
        spanish: '¿Podría decirme sus síntomas?',
        situation: 'Cuando necesitas más información.'
      },
      {
        english: 'Let me ask you a few quick questions first.',
        spanish: 'Déjeme hacerle unas preguntas rápidas primero.',
        situation: 'Antes de aconsejar un medicamento.'
      },
      {
        english: 'I just need to check a couple of things.',
        spanish: 'Solo necesito comprobar un par de cosas.',
        situation: 'Para sonar profesional y no brusca.'
      }
    ],
    quiz: [
      {
        question: 'Un cliente entra y dice: “Hi”. ¿Cuál es la mejor respuesta?',
        options: [
          'What do you want?',
          'How can I help you?',
          'Tell me your illness.',
          'You need medicine.'
        ],
        correctIndex: 1,
        explanation:
          '“How can I help you?” es educada, natural y sirve para abrir la conversación sin sonar brusca.'
      },
      {
        question: '¿Cuál de estas frases suena más profesional?',
        options: [
          'What problem do you have?',
          'What seems to be the problem?',
          'Say symptoms.',
          'You are sick?'
        ],
        correctIndex: 1,
        explanation:
          '“What seems to be the problem?” es una fórmula muy natural para atención sanitaria.'
      },
      {
        question: '¿Para qué sirve “Could you…”?',
        options: [
          'Para sonar más brusca',
          'Para hablar en pasado siempre',
          'Para hacer una pregunta más educada',
          'Para dar una orden'
        ],
        correctIndex: 2,
        explanation:
          '“Could you…” convierte una pregunta o petición en algo más amable y profesional.'
      },
      {
        question: 'El cliente dice que viene a comprar algo “for my son”. ¿Qué conviene hacer?',
        options: [
          'Recomendar rápido cualquier producto',
          'Preguntar edad, síntomas y duración',
          'Decir que no puedes ayudar',
          'Preguntar solo el precio'
        ],
        correctIndex: 1,
        explanation:
          'Si el producto es para otra persona, especialmente un niño, hay que recoger información antes de recomendar.'
      }
    ],
    roleplay: [
      {
        context: 'Estás en el mostrador. Entra una turista con cara de preocupación.',
        customerLine: 'Hi, I need something. I do not feel very well.',
        options: [
          'What do you want?',
          'How can I help you? What seems to be the problem?',
          'Take this medicine.',
          'I cannot help you.'
        ],
        correctIndex: 1,
        explanation:
          'Primero abres la conversación con educación y luego preguntas qué ocurre. No recomiendas nada todavía.'
      },
      {
        context: 'Un hombre pide algo para su mujer, pero no explica mucho.',
        customerLine: 'Hello, I need medicine for my wife.',
        options: [
          'Is it for you or for someone else?',
          'What seems to be the problem with your wife?',
          'She should go to hospital now.',
          'We do not have medicine.'
        ],
        correctIndex: 1,
        explanation:
          'Como ya sabes que es para su mujer, lo lógico es preguntar qué le ocurre.'
      },
      {
        context: 'Un cliente señala una estantería pero no sabe el nombre del producto.',
        customerLine: 'I bought something here last year, but I do not remember the name.',
        options: [
          'I do not know.',
          'Could you tell me what it was for?',
          'Buy this one.',
          'That is impossible.'
        ],
        correctIndex: 1,
        explanation:
          'Preguntar para qué lo usaba te ayuda a identificar el producto sin bloquear la conversación.'
      }
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
      {
        heading: 'La pregunta clave: “How long have you had…?”',
        body:
          'En farmacia, una de las preguntas más importantes es desde cuándo tiene el síntoma. En inglés usamos “How long have you had…?” para preguntar duración. Es una estructura que al principio parece larga, pero conviene memorizarla entera como frase hecha.',
        examples: [
          {
            english: 'How long have you had the cough?',
            spanish: '¿Desde cuándo tiene la tos?',
            note: 'Muy útil antes de recomendar jarabes o derivar.'
          },
          {
            english: 'How long have you had the fever?',
            spanish: '¿Desde cuándo tiene fiebre?',
            note: 'La fiebre puede requerir derivación médica.'
          },
          {
            english: 'How long have you had these symptoms?',
            spanish: '¿Desde cuándo tiene estos síntomas?',
            note: 'Sirve cuando hay varios síntomas.'
          }
        ]
      },
      {
        heading: 'Preguntas de seguridad',
        body:
          'Antes de recomendar, conviene preguntar por alergias, medicación actual y condiciones especiales. No hace falta hablar perfecto: hace falta preguntar claro y con calma. Estas preguntas evitan errores y ayudan a sonar profesional.',
        examples: [
          {
            english: 'Do you have any allergies?',
            spanish: '¿Tiene alguna alergia?',
            note: 'Pregunta básica de seguridad.'
          },
          {
            english: 'Are you taking any medication?',
            spanish: '¿Está tomando alguna medicación?',
            note: 'Importante para evitar interacciones.'
          },
          {
            english: 'Are you pregnant or breastfeeding?',
            spanish: '¿Está embarazada o en periodo de lactancia?',
            note: 'Pregunta sensible; se debe hacer con tacto y naturalidad.'
          }
        ]
      }
    ],
    usefulPhrases: [
      {
        english: 'How long have you had it?',
        spanish: '¿Desde cuándo lo tiene?',
        situation: 'Cuando ya sabes el síntoma.'
      },
      {
        english: 'Do you have a fever?',
        spanish: '¿Tiene fiebre?',
        situation: 'Resfriado, gripe, dolor de garganta.'
      },
      {
        english: 'Do you have any allergies?',
        spanish: '¿Tiene alguna alergia?',
        situation: 'Antes de recomendar medicamento.'
      },
      {
        english: 'Are you taking any medication?',
        spanish: '¿Está tomando alguna medicación?',
        situation: 'Antes de aconsejar algo.'
      },
      {
        english: 'Is the pain mild, moderate or severe?',
        spanish: '¿El dolor es leve, moderado o intenso?',
        situation: 'Dolor de cabeza, garganta, espalda o estómago.'
      },
      {
        english: 'Do you have any other symptoms?',
        spanish: '¿Tiene algún otro síntoma?',
        situation: 'Para completar la información.'
      }
    ],
    quiz: [
      {
        question: '¿Cómo preguntarías “Desde cuándo tiene la tos?”',
        options: [
          'When cough?',
          'How long have you had the cough?',
          'Do you cough long?',
          'You have cough since?'
        ],
        correctIndex: 1,
        explanation:
          'La estructura correcta es “How long have you had…?”.'
      },
      {
        question: 'Antes de recomendar un medicamento, ¿qué pregunta es más segura?',
        options: [
          'Do you have any allergies?',
          'Do you like this brand?',
          'Are you tourist?',
          'Do you want expensive medicine?'
        ],
        correctIndex: 0,
        explanation:
          'Preguntar por alergias es una pregunta de seguridad básica.'
      },
      {
        question: '“Are you taking any medication?” significa:',
        options: [
          '¿Quiere tomar medicación?',
          '¿Está tomando alguna medicación?',
          '¿Ha comprado medicación?',
          '¿Le gusta la medicación?'
        ],
        correctIndex: 1,
        explanation:
          '“Are you taking…” se usa para preguntar si está tomando algo actualmente.'
      },
      {
        question: '¿Cuál es la forma más clara de preguntar si hay fiebre?',
        options: [
          'Have fever?',
          'Do you have a fever?',
          'Are fever?',
          'You fever now?'
        ],
        correctIndex: 1,
        explanation:
          '“Do you have a fever?” es sencilla, correcta y fácil de entender.'
      }
    ],
    roleplay: [
      {
        context: 'Una clienta viene con tos.',
        customerLine: 'Hi, I have a bad cough.',
        options: [
          'How long have you had the cough?',
          'You need antibiotics.',
          'Cough is normal.',
          'Take two boxes.'
        ],
        correctIndex: 0,
        explanation:
          'Antes de recomendar, preguntas duración. No debes saltar directamente a antibióticos.'
      },
      {
        context: 'Un cliente pide algo para dolor de cabeza.',
        customerLine: 'I need something for a headache.',
        options: [
          'Are you taking any medication?',
          'This is cheap.',
          'You have headache because stress.',
          'Take anything.'
        ],
        correctIndex: 0,
        explanation:
          'Es importante comprobar si toma otros medicamentos antes de recomendar.'
      },
      {
        context: 'Una mujer pide algo para dolor de estómago.',
        customerLine: 'I have stomach pain and I feel sick.',
        options: [
          'Do you have any other symptoms, like fever or diarrhoea?',
          'Take this cream.',
          'It is not important.',
          'You need antibiotics.'
        ],
        correctIndex: 0,
        explanation:
          'Preguntar síntomas asociados ayuda a decidir si es una consulta leve o requiere derivación.'
      }
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
      {
        heading: '“Should” para recomendar',
        body:
          '“Should” es muy útil porque permite recomendar sin imponer. En farmacia suena profesional y claro. Es perfecto para consejos generales, hábitos y derivaciones prudentes.',
        examples: [
          {
            english: 'You should take this after meals.',
            spanish: 'Debería tomar esto después de las comidas.',
            note: 'Recomendación clara y educada.'
          },
          {
            english: 'You should drink plenty of water.',
            spanish: 'Debería beber mucha agua.',
            note: 'Consejo general fácil de entender.'
          },
          {
            english: 'You should see a doctor if it gets worse.',
            spanish: 'Debería ver a un médico si empeora.',
            note: 'Fórmula segura para derivar.'
          }
        ]
      },
      {
        heading: '“Do not” para advertencias importantes',
        body:
          'Cuando una instrucción es importante, usamos “Do not”. Es directo, pero correcto en contexto sanitario. En farmacia no conviene suavizar demasiado una advertencia de seguridad.',
        examples: [
          {
            english: 'Do not exceed the recommended dose.',
            spanish: 'No supere la dosis recomendada.',
            note: 'Frase esencial en farmacia.'
          },
          {
            english: 'Do not take this with alcohol.',
            spanish: 'No tome esto con alcohol.',
            note: 'Advertencia clara.'
          },
          {
            english: 'Do not use it for more than seven days.',
            spanish: 'No lo use durante más de siete días.',
            note: 'Útil con ciertos tratamientos.'
          }
        ]
      }
    ],
    usefulPhrases: [
      {
        english: 'You should take this after meals.',
        spanish: 'Debería tomar esto después de las comidas.',
        situation: 'Instrucciones de toma.'
      },
      {
        english: 'You can take one tablet every eight hours.',
        spanish: 'Puede tomar un comprimido cada ocho horas.',
        situation: 'Explicar pauta.'
      },
      {
        english: 'Do not exceed the recommended dose.',
        spanish: 'No supere la dosis recomendada.',
        situation: 'Advertencia de seguridad.'
      },
      {
        english: 'If symptoms continue, you should see a doctor.',
        spanish: 'Si los síntomas continúan, debería ver a un médico.',
        situation: 'Derivación prudente.'
      },
      {
        english: 'This may cause drowsiness.',
        spanish: 'Esto puede causar somnolencia.',
        situation: 'Advertir sobre efectos secundarios.'
      },
      {
        english: 'Please read the leaflet before using it.',
        spanish: 'Lea el prospecto antes de usarlo.',
        situation: 'Consejo final de seguridad.'
      }
    ],
    quiz: [
      {
        question: '¿Cuál es la mejor traducción de “No supere la dosis recomendada”?',
        options: [
          'Do not exceed the recommended dose.',
          'Do not eat the dose.',
          'You should more dose.',
          'Take all the dose.'
        ],
        correctIndex: 0,
        explanation:
          '“Do not exceed the recommended dose” es una frase estándar y muy útil.'
      },
      {
        question: '¿Qué expresa “should”?',
        options: [
          'Una recomendación',
          'Una prohibición absoluta',
          'Una pregunta',
          'Una marca comercial'
        ],
        correctIndex: 0,
        explanation:
          '“Should” se usa para consejos y recomendaciones.'
      },
      {
        question: '¿Qué frase es más segura si los síntomas empeoran?',
        options: [
          'You are okay.',
          'Buy more medicine.',
          'You should see a doctor if it gets worse.',
          'Do not speak.'
        ],
        correctIndex: 2,
        explanation:
          'Es clara, prudente y profesional.'
      },
      {
        question: '“This may cause drowsiness” significa:',
        options: [
          'Esto puede causar sueño o somnolencia',
          'Esto cura la somnolencia',
          'Esto debe tomarse durmiendo',
          'Esto no tiene efectos'
        ],
        correctIndex: 0,
        explanation:
          '“Drowsiness” es somnolencia. Es una palabra muy útil para antihistamínicos y otros medicamentos.'
      }
    ],
    roleplay: [
      {
        context: 'Una clienta compra un medicamento que puede dar sueño.',
        customerLine: 'Can I drive after taking this?',
        options: [
          'Yes, always.',
          'This may cause drowsiness, so you should avoid driving.',
          'Driving is good.',
          'Take more if you drive.'
        ],
        correctIndex: 1,
        explanation:
          'Se avisa del posible efecto y se da una recomendación segura.'
      },
      {
        context: 'Un cliente pregunta cuánto tomar.',
        customerLine: 'How many tablets can I take?',
        options: [
          'You can take one tablet every eight hours. Do not exceed the recommended dose.',
          'Take many.',
          'I do not know, maybe ten.',
          'All tablets today.'
        ],
        correctIndex: 0,
        explanation:
          'La respuesta combina pauta clara y advertencia de seguridad.'
      },
      {
        context: 'Una turista pregunta si puede mezclar un medicamento con alcohol.',
        customerLine: 'Can I drink wine tonight if I take this?',
        options: [
          'Yes, it is funny.',
          'You should avoid alcohol while taking this medicine.',
          'Only two bottles.',
          'Alcohol is medicine.'
        ],
        correctIndex: 1,
        explanation:
          '“You should avoid alcohol…” es una advertencia prudente y educada.'
      }
    ]
  },
  {
    id: 'pain-and-fever',
    title: 'Dolor y fiebre',
    subtitle: 'Preguntar intensidad, duración y señales de alarma',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Practicar frases para atender consultas frecuentes de dolor, fiebre y malestar general.',
    theory: [
      {
        heading: 'Dolor: intensidad, localización y duración',
        body:
          'Cuando alguien pide algo para el dolor, no basta con entregar un producto. Hay que preguntar dónde le duele, cuánto le duele y desde cuándo. En inglés puedes usar preguntas sencillas y muy repetibles.',
        examples: [
          {
            english: 'Where is the pain?',
            spanish: '¿Dónde le duele?',
            note: 'Pregunta básica y fácil para empezar.'
          },
          {
            english: 'Is the pain mild, moderate or severe?',
            spanish: '¿El dolor es leve, moderado o intenso?',
            note: 'Ayuda a valorar la situación.'
          },
          {
            english: 'Have you taken anything for it?',
            spanish: '¿Ha tomado algo para eso?',
            note: 'Evita duplicar medicamentos o dosis.'
          }
        ]
      },
      {
        heading: 'Fiebre: cuándo derivar con prudencia',
        body:
          'Con fiebre, la duración y la intensidad importan mucho. En inglés, conviene usar frases claras y prudentes. No hace falta alarmar, pero sí saber recomendar acudir al médico si hay señales preocupantes.',
        examples: [
          {
            english: 'How high is your temperature?',
            spanish: '¿Cuánta fiebre tiene?',
            note: 'Pregunta concreta sobre temperatura.'
          },
          {
            english: 'If the fever lasts more than three days, you should see a doctor.',
            spanish: 'Si la fiebre dura más de tres días, debería ver a un médico.',
            note: 'Derivación clara y tranquila.'
          },
          {
            english: 'If you feel very weak or short of breath, please seek medical advice.',
            spanish: 'Si se siente muy débil o le falta el aire, busque atención médica.',
            note: 'Frase útil para señales de alarma.'
          }
        ]
      }
    ],
    usefulPhrases: [
      {
        english: 'Where is the pain?',
        spanish: '¿Dónde le duele?',
        situation: 'Dolor general.'
      },
      {
        english: 'Is the pain mild, moderate or severe?',
        spanish: '¿El dolor es leve, moderado o intenso?',
        situation: 'Valorar intensidad.'
      },
      {
        english: 'How high is your temperature?',
        spanish: '¿Cuánta fiebre tiene?',
        situation: 'Cliente con fiebre.'
      },
      {
        english: 'Have you taken anything for it?',
        spanish: '¿Ha tomado algo para eso?',
        situation: 'Antes de recomendar.'
      },
      {
        english: 'If it gets worse, you should see a doctor.',
        spanish: 'Si empeora, debería ver a un médico.',
        situation: 'Consejo prudente.'
      },
      {
        english: 'This can help reduce pain and fever.',
        spanish: 'Esto puede ayudar a reducir el dolor y la fiebre.',
        situation: 'Explicar utilidad del producto.'
      }
    ],
    quiz: [
      {
        question: '¿Cómo preguntarías “¿Dónde le duele?”',
        options: [
          'Where is the pain?',
          'What is pain?',
          'Pain where you?',
          'Are you pain?'
        ],
        correctIndex: 0,
        explanation:
          '“Where is the pain?” es una pregunta simple y correcta.'
      },
      {
        question: '¿Qué significa “Have you taken anything for it?”',
        options: [
          '¿Ha tomado algo para eso?',
          '¿Quiere tomarlo ahora?',
          '¿Ha comprado algo aquí?',
          '¿Le gusta tomar medicinas?'
        ],
        correctIndex: 0,
        explanation:
          'Es una pregunta útil antes de recomendar, porque el cliente puede haber tomado ya otro medicamento.'
      },
      {
        question: '¿Cuál es la frase más prudente si la fiebre continúa?',
        options: [
          'It is nothing.',
          'If the fever continues, you should see a doctor.',
          'Take everything.',
          'Fever is always good.'
        ],
        correctIndex: 1,
        explanation:
          'Recomienda consultar a un médico si la fiebre persiste.'
      },
      {
        question: '“Mild, moderate or severe” se usa para hablar de:',
        options: [
          'Precio',
          'Intensidad',
          'Color',
          'Horario'
        ],
        correctIndex: 1,
        explanation:
          'Son grados de intensidad: leve, moderado o intenso.'
      }
    ],
    roleplay: [
      {
        context: 'Un cliente quiere algo para dolor de cabeza.',
        customerLine: 'I have a headache. It is quite strong.',
        options: [
          'Where is the pain and how long have you had it?',
          'Take anything you want.',
          'You need antibiotics.',
          'Headache is not a problem.'
        ],
        correctIndex: 0,
        explanation:
          'Aunque ya diga que es fuerte, conviene preguntar localización y duración.'
      },
      {
        context: 'Una cliente dice que tiene fiebre desde hace varios días.',
        customerLine: 'I have had a fever for four days.',
        options: [
          'That is normal.',
          'If the fever has lasted four days, you should speak to a doctor.',
          'Buy vitamins only.',
          'Do not drink water.'
        ],
        correctIndex: 1,
        explanation:
          'Fiebre de varios días merece recomendación médica prudente.'
      },
      {
        context: 'Un cliente ya ha tomado otro medicamento.',
        customerLine: 'I took something this morning, but I do not remember the name.',
        options: [
          'Take this too.',
          'Could you show me the box or a photo of it?',
          'It does not matter.',
          'Take double dose.'
        ],
        correctIndex: 1,
        explanation:
          'Pedir la caja o una foto evita duplicidades y mejora la seguridad.'
      }
    ]
  },
  {
    id: 'cough-cold-throat',
    title: 'Tos, resfriado y dolor de garganta',
    subtitle: 'Preguntas frecuentes y recomendaciones de mostrador',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Aprender vocabulario y frases para una de las consultas más habituales en farmacia.',
    theory: [
      {
        heading: 'Diferenciar síntomas respiratorios',
        body:
          'Muchos clientes dicen simplemente “I have a cold” o “I have a cough”. La tarea de la farmacéutica es concretar: tos seca o productiva, fiebre, dolor de garganta, congestión, duración y otros síntomas.',
        examples: [
          {
            english: 'Is it a dry cough or a chesty cough?',
            spanish: '¿Es tos seca o tos con mucosidad?',
            note: '“Chesty cough” suele referirse a tos con pecho cargado o mucosidad.'
          },
          {
            english: 'Do you have a sore throat?',
            spanish: '¿Tiene dolor de garganta?',
            note: '“Sore throat” es una frase esencial.'
          },
          {
            english: 'Do you have a blocked nose?',
            spanish: '¿Tiene la nariz congestionada?',
            note: 'Muy frecuente en resfriados.'
          }
        ]
      },
      {
        heading: 'Recomendar sin prometer demasiado',
        body:
          'En inglés conviene decir “can help” en vez de prometer “will cure”. “This can help relieve…” suena profesional, realista y seguro.',
        examples: [
          {
            english: 'This can help relieve your sore throat.',
            spanish: 'Esto puede ayudar a aliviar el dolor de garganta.',
            note: 'No promete curar, habla de aliviar.'
          },
          {
            english: 'This syrup may help with a dry cough.',
            spanish: 'Este jarabe puede ayudar con la tos seca.',
            note: '“May help” es prudente.'
          },
          {
            english: 'If you have difficulty breathing, you should seek medical advice.',
            spanish: 'Si tiene dificultad para respirar, debe buscar atención médica.',
            note: 'Señal de alarma importante.'
          }
        ]
      }
    ],
    usefulPhrases: [
      {
        english: 'Do you have a dry cough or a chesty cough?',
        spanish: '¿Tiene tos seca o tos con mucosidad?',
        situation: 'Antes de elegir jarabe.'
      },
      {
        english: 'Do you have a sore throat?',
        spanish: '¿Tiene dolor de garganta?',
        situation: 'Consulta de resfriado.'
      },
      {
        english: 'Do you have a blocked nose?',
        spanish: '¿Tiene la nariz congestionada?',
        situation: 'Congestión nasal.'
      },
      {
        english: 'This can help relieve your symptoms.',
        spanish: 'Esto puede ayudar a aliviar sus síntomas.',
        situation: 'Explicar un producto.'
      },
      {
        english: 'You should drink plenty of fluids.',
        spanish: 'Debería beber abundantes líquidos.',
        situation: 'Consejo general.'
      },
      {
        english: 'If symptoms get worse, please see a doctor.',
        spanish: 'Si los síntomas empeoran, consulte a un médico.',
        situation: 'Derivación prudente.'
      }
    ],
    quiz: [
      {
        question: '“Sore throat” significa:',
        options: [
          'Dolor de garganta',
          'Dolor de espalda',
          'Nariz tapada',
          'Fiebre alta'
        ],
        correctIndex: 0,
        explanation:
          '“Sore throat” es dolor de garganta.'
      },
      {
        question: '¿Qué frase es más prudente para explicar un producto?',
        options: [
          'This will cure everything.',
          'This can help relieve your symptoms.',
          'This is magic.',
          'This always works.'
        ],
        correctIndex: 1,
        explanation:
          '“Can help relieve” es profesional porque no promete una cura absoluta.'
      },
      {
        question: '¿Cómo preguntarías si la tos es seca o con mucosidad?',
        options: [
          'Is it a dry cough or a chesty cough?',
          'Is cough blue?',
          'Do you cough money?',
          'Is your throat nose?'
        ],
        correctIndex: 0,
        explanation:
          'Es la forma más natural entre las opciones.'
      },
      {
        question: '¿Qué harías si el cliente dice que le cuesta respirar?',
        options: [
          'Recomendar caramelos solamente',
          'Decir que no pasa nada',
          'Recomendar buscar atención médica',
          'Cambiar de tema'
        ],
        correctIndex: 2,
        explanation:
          'La dificultad para respirar es una señal de alarma.'
      }
    ],
    roleplay: [
      {
        context: 'Un turista pide algo para la tos.',
        customerLine: 'I need a cough syrup.',
        options: [
          'Is it a dry cough or a chesty cough?',
          'All syrups are the same.',
          'Take antibiotics.',
          'Do not cough.'
        ],
        correctIndex: 0,
        explanation:
          'Primero hay que saber qué tipo de tos tiene.'
        },
      {
        context: 'Una cliente tiene dolor de garganta.',
        customerLine: 'My throat hurts when I swallow.',
        options: [
          'This can help relieve your sore throat.',
          'Your throat is bad.',
          'You should not swallow.',
          'Take this forever.'
        ],
        correctIndex: 0,
        explanation:
          '“Relieve your sore throat” es una frase útil, clara y profesional.'
      },
      {
        context: 'Un cliente con resfriado menciona dificultad respiratoria.',
        customerLine: 'I have a cold, but I also feel short of breath.',
        options: [
          'You should seek medical advice if you feel short of breath.',
          'Buy sweets.',
          'It is always normal.',
          'Take two different syrups.'
        ],
        correctIndex: 0,
        explanation:
          'La falta de aire requiere consejo médico, no solo recomendación de mostrador.'
      }
    ]
  },
  {
    id: 'stomach-digestive',
    title: 'Estómago y digestivo',
    subtitle: 'Acidez, diarrea, náuseas y dolor abdominal',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Practicar cómo preguntar y recomendar con prudencia en consultas digestivas frecuentes.',
    theory: [
      {
        heading: 'Preguntas útiles para síntomas digestivos',
        body:
          'Las consultas digestivas son frecuentes y a veces delicadas. Conviene preguntar duración, intensidad, fiebre, vómitos, diarrea, sangre, embarazo y medicación actual. En inglés podemos hacerlo con frases simples.',
        examples: [
          {
            english: 'Do you have diarrhoea or vomiting?',
            spanish: '¿Tiene diarrea o vómitos?',
            note: 'Pregunta básica en malestar digestivo.'
          },
          {
            english: 'Have you noticed any blood?',
            spanish: '¿Ha notado sangre?',
            note: 'Pregunta importante, formulada con calma.'
          },
          {
            english: 'Are you able to drink fluids?',
            spanish: '¿Puede beber líquidos?',
            note: 'Ayuda a valorar riesgo de deshidratación.'
          }
        ]
      },
      {
        heading: 'Consejos sencillos y seguros',
        body:
          'Para síntomas leves, se pueden explicar medidas de apoyo. Hay que evitar prometer curas y derivar si hay señales de alarma como sangre, fiebre alta, dolor intenso, deshidratación o duración prolongada.',
        examples: [
          {
            english: 'You should drink small sips of water regularly.',
            spanish: 'Debería beber pequeños sorbos de agua con frecuencia.',
            note: 'Consejo claro para vómitos o diarrea.'
          },
          {
            english: 'Avoid heavy meals for now.',
            spanish: 'Evite comidas pesadas por ahora.',
            note: 'Consejo dietético sencillo.'
          },
          {
            english: 'If the pain is severe, you should see a doctor.',
            spanish: 'Si el dolor es intenso, debería ver a un médico.',
            note: 'Derivación prudente.'
          }
        ]
      }
    ],
    usefulPhrases: [
      {
        english: 'Do you have diarrhoea or vomiting?',
        spanish: '¿Tiene diarrea o vómitos?',
        situation: 'Malestar digestivo.'
      },
      {
        english: 'How long have you had stomach pain?',
        spanish: '¿Desde cuándo tiene dolor de estómago?',
        situation: 'Dolor abdominal.'
      },
      {
        english: 'Have you noticed any blood?',
        spanish: '¿Ha notado sangre?',
        situation: 'Señal de alarma.'
      },
      {
        english: 'Are you able to drink fluids?',
        spanish: '¿Puede beber líquidos?',
        situation: 'Riesgo de deshidratación.'
      },
      {
        english: 'You should drink small sips of water regularly.',
        spanish: 'Debería beber pequeños sorbos de agua con frecuencia.',
        situation: 'Consejo para vómitos o diarrea.'
      },
      {
        english: 'Avoid spicy or heavy food for now.',
        spanish: 'Evite comida picante o pesada por ahora.',
        situation: 'Consejo digestivo.'
      }
    ],
    quiz: [
      {
        question: '¿Qué significa “diarrhoea”?',
        options: [
          'Diarrea',
          'Mareo',
          'Dolor de garganta',
          'Alergia'
        ],
        correctIndex: 0,
        explanation:
          '“Diarrhoea” es la forma británica de escribir diarrea. En EEUU suele escribirse “diarrhea”.'
      },
      {
        question: '¿Cómo preguntarías si ha notado sangre?',
        options: [
          'Have you noticed any blood?',
          'Do you like blood?',
          'Are you blood?',
          'Blood is good?'
        ],
        correctIndex: 0,
        explanation:
          'Es una pregunta directa pero profesional.'
      },
      {
        question: '¿Qué frase es adecuada para vómitos o diarrea?',
        options: [
          'Do not drink anything ever.',
          'You should drink small sips of water regularly.',
          'Eat a lot now.',
          'Take all tablets.'
        ],
        correctIndex: 1,
        explanation:
          'Pequeños sorbos frecuentes ayudan a evitar deshidratación.'
      },
      {
        question: 'Si el dolor es intenso, la frase prudente es:',
        options: [
          'If the pain is severe, you should see a doctor.',
          'Pain is always normal.',
          'Do not worry, ever.',
          'Buy two boxes.'
        ],
        correctIndex: 0,
        explanation:
          'Dolor intenso requiere valoración médica.'
      }
    ],
    roleplay: [
      {
        context: 'Una cliente tiene diarrea desde ayer.',
        customerLine: 'I have had diarrhoea since yesterday.',
        options: [
          'Are you able to drink fluids?',
          'Do not drink water.',
          'Take antibiotics.',
          'It is impossible.'
        ],
        correctIndex: 0,
        explanation:
          'Comprobar hidratación es importante en diarrea.'
      },
      {
        context: 'Un cliente tiene dolor abdominal intenso.',
        customerLine: 'My stomach pain is very severe.',
        options: [
          'If the pain is severe, you should see a doctor.',
          'Take sweets.',
          'Wait three weeks.',
          'Drink alcohol.'
        ],
        correctIndex: 0,
        explanation:
          'El dolor severo no debe tratarse como una consulta menor.'
      },
      {
        context: 'Una turista pregunta qué puede comer.',
        customerLine: 'What should I eat today?',
        options: [
          'You should avoid spicy or heavy food for now.',
          'Eat very spicy food.',
          'Only coffee.',
          'It does not matter.'
        ],
        correctIndex: 0,
        explanation:
          'Es un consejo sencillo, prudente y fácil de entender.'
      }
    ]
  },
  {
    id: 'skin-allergy',
    title: 'Piel, picor y alergias',
    subtitle: 'Erupciones, crema, antihistamínicos y señales de alarma',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Aprender a manejar consultas de piel y alergia con vocabulario claro y preguntas seguras.',
    theory: [
      {
        heading: 'Vocabulario básico de piel',
        body:
          'En mostrador aparecen muchas consultas de piel: picor, sarpullido, irritación, quemadura solar, picaduras. Es importante preguntar desde cuándo, dónde está, si se extiende y si hay dificultad para respirar o hinchazón facial.',
        examples: [
          {
            english: 'Do you have a rash?',
            spanish: '¿Tiene un sarpullido?',
            note: '“Rash” es palabra clave para erupciones cutáneas.'
          },
          {
            english: 'Is it itchy?',
            spanish: '¿Le pica?',
            note: '“Itchy” significa que pica.'
          },
          {
            english: 'Is the rash spreading?',
            spanish: '¿Se está extendiendo el sarpullido?',
            note: 'Ayuda a valorar evolución.'
          }
        ]
      },
      {
        heading: 'Alergia: preguntar y derivar si hay señales graves',
        body:
          'Una alergia leve puede consultarse en farmacia, pero si hay hinchazón de labios/cara o dificultad para respirar, hay que recomendar atención médica urgente. Las frases deben ser claras y tranquilas.',
        examples: [
          {
            english: 'Do you have any swelling of the lips or face?',
            spanish: '¿Tiene hinchazón en labios o cara?',
            note: 'Señal de alarma.'
          },
          {
            english: 'Are you having difficulty breathing?',
            spanish: '¿Tiene dificultad para respirar?',
            note: 'Pregunta esencial en posible reacción alérgica.'
          },
          {
            english: 'If you have trouble breathing, seek urgent medical help.',
            spanish: 'Si tiene dificultad para respirar, busque ayuda médica urgente.',
            note: 'Frase clara para casos serios.'
          }
        ]
      }
    ],
    usefulPhrases: [
      {
        english: 'Do you have a rash?',
        spanish: '¿Tiene un sarpullido?',
        situation: 'Consulta de piel.'
      },
      {
        english: 'Is it itchy?',
        spanish: '¿Le pica?',
        situation: 'Picor o irritación.'
      },
      {
        english: 'Is the rash spreading?',
        spanish: '¿Se está extendiendo el sarpullido?',
        situation: 'Valorar evolución.'
      },
      {
        english: 'Apply a thin layer twice a day.',
        spanish: 'Aplique una capa fina dos veces al día.',
        situation: 'Instrucciones de crema.'
      },
      {
        english: 'Avoid scratching the area.',
        spanish: 'Evite rascar la zona.',
        situation: 'Consejo para picor.'
      },
      {
        english: 'If you have trouble breathing, seek urgent medical help.',
        spanish: 'Si tiene dificultad para respirar, busque ayuda médica urgente.',
        situation: 'Alerta de alergia grave.'
      }
    ],
    quiz: [
      {
        question: '“Itchy” significa:',
        options: [
          'Que pica',
          'Que duele mucho',
          'Que sangra',
          'Que está roto'
        ],
        correctIndex: 0,
        explanation:
          '“Itchy” se usa para picor.'
      },
      {
        question: '¿Cómo se dice “Aplique una capa fina dos veces al día”?',
        options: [
          'Apply a thin layer twice a day.',
          'Eat a thin layer.',
          'Apply two boxes.',
          'Put all the cream now.'
        ],
        correctIndex: 0,
        explanation:
          '“Apply a thin layer” es una frase muy útil para cremas.'
      },
      {
        question: '¿Cuál es una señal de alarma en alergia?',
        options: [
          'Dificultad para respirar',
          'Picor leve localizado',
          'Piel seca desde hace meses',
          'Querer una crema'
        ],
        correctIndex: 0,
        explanation:
          'La dificultad respiratoria requiere atención médica urgente.'
      },
      {
        question: '“Rash” significa:',
        options: [
          'Sarpullido o erupción',
          'Tos',
          'Fiebre',
          'Mareo'
        ],
        correctIndex: 0,
        explanation:
          '“Rash” es sarpullido o erupción cutánea.'
      }
    ],
    roleplay: [
      {
        context: 'Una clienta enseña una zona roja en el brazo.',
        customerLine: 'This rash is very itchy.',
        options: [
          'How long have you had it? Is it spreading?',
          'Do not look at it.',
          'It is always dangerous.',
          'Take antibiotics.'
        ],
        correctIndex: 0,
        explanation:
          'Preguntar duración y si se extiende es lo más útil al inicio.'
      },
      {
        context: 'Un cliente pregunta cómo usar una crema.',
        customerLine: 'How should I use this cream?',
        options: [
          'Apply a thin layer twice a day.',
          'Drink the cream.',
          'Use the whole tube today.',
          'Apply it in your eyes.'
        ],
        correctIndex: 0,
        explanation:
          'Frase clara y frecuente para tratamientos tópicos.'
      },
      {
        context: 'Una turista con posible alergia dice algo preocupante.',
        customerLine: 'My lips are swollen and I feel short of breath.',
        options: [
          'You should seek urgent medical help.',
          'Buy moisturiser.',
          'It is just dry skin.',
          'Wait until tomorrow.'
        ],
        correctIndex: 0,
        explanation:
          'Hinchazón de labios y dificultad respiratoria son señales de alarma.'
      }
    ]
  },
  {
    id: 'prescriptions-stock',
    title: 'Recetas, stock y alternativas',
    subtitle: 'Cuando no se puede dispensar o no hay una marca concreta',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Practicar frases para explicar recetas, equivalencias y falta de stock sin sonar cortante.',
    theory: [
      {
        heading: 'Cuando hace falta receta',
        body:
          'Decir que algo requiere receta puede generar tensión. En inglés conviene usar “I’m afraid…” porque suaviza la mala noticia sin perder claridad.',
        examples: [
          {
            english: 'I’m afraid this medicine requires a prescription.',
            spanish: 'Me temo que este medicamento requiere receta.',
            note: 'Educada y firme.'
          },
          {
            english: 'I cannot dispense this without a prescription.',
            spanish: 'No puedo dispensar esto sin receta.',
            note: 'Más directa, útil si el cliente insiste.'
          },
          {
            english: 'You will need to speak to a doctor first.',
            spanish: 'Primero tendrá que hablar con un médico.',
            note: 'Ofrece el siguiente paso.'
          }
        ]
      },
      {
        heading: 'Stock y equivalentes',
        body:
          'Cuando no hay una marca concreta, se puede explicar con calma que existe una alternativa con el mismo principio activo si procede. Frases como “Let me check…” y “We have an equivalent” son muy útiles.',
        examples: [
          {
            english: 'Let me check if we have it in stock.',
            spanish: 'Déjeme comprobar si lo tenemos en stock.',
            note: 'Frase práctica para ganar tiempo.'
          },
          {
            english: 'We do not have that brand, but we have an equivalent.',
            spanish: 'No tenemos esa marca, pero tenemos un equivalente.',
            note: 'Explica alternativa sin sonar improvisada.'
          },
          {
            english: 'It contains the same active ingredient.',
            spanish: 'Contiene el mismo principio activo.',
            note: 'Frase muy farmacéutica y útil.'
          }
        ]
      }
    ],
    usefulPhrases: [
      {
        english: 'I’m afraid this medicine requires a prescription.',
        spanish: 'Me temo que este medicamento requiere receta.',
        situation: 'Producto sujeto a receta.'
      },
      {
        english: 'I cannot dispense this without a prescription.',
        spanish: 'No puedo dispensar esto sin receta.',
        situation: 'Cliente insistente.'
      },
      {
        english: 'Let me check if we have it in stock.',
        spanish: 'Déjeme comprobar si lo tenemos en stock.',
        situation: 'Búsqueda de producto.'
      },
      {
        english: 'We do not have that brand, but we have an equivalent.',
        spanish: 'No tenemos esa marca, pero tenemos un equivalente.',
        situation: 'Falta de marca concreta.'
      },
      {
        english: 'It contains the same active ingredient.',
        spanish: 'Contiene el mismo principio activo.',
        situation: 'Explicar equivalente.'
      },
      {
        english: 'It should be available tomorrow afternoon.',
        spanish: 'Debería estar disponible mañana por la tarde.',
        situation: 'Pedido o reposición.'
      }
    ],
    quiz: [
      {
        question: '¿Cuál es la forma más educada de decir que hace falta receta?',
        options: [
          'No prescription, no medicine.',
          'I’m afraid this medicine requires a prescription.',
          'You cannot have it because no.',
          'Go away.'
        ],
        correctIndex: 1,
        explanation:
          '“I’m afraid…” suaviza una negativa y suena profesional.'
      },
      {
        question: '“Let me check if we have it in stock” significa:',
        options: [
          'Déjeme comprobar si lo tenemos en stock',
          'No lo tenemos nunca',
          'Déjeme comprarlo para mí',
          'Está prohibido'
        ],
        correctIndex: 0,
        explanation:
          'Es una frase comodín muy útil en mostrador.'
      },
      {
        question: '“Active ingredient” significa:',
        options: [
          'Principio activo',
          'Ingrediente barato',
          'Marca comercial',
          'Código de barras'
        ],
        correctIndex: 0,
        explanation:
          '“Active ingredient” es principio activo.'
      },
      {
        question: 'Si no hay una marca, pero hay equivalente, dirías:',
        options: [
          'We do not have that brand, but we have an equivalent.',
          'Everything is the same, take anything.',
          'No brand, no help.',
          'This is illegal.'
        ],
        correctIndex: 0,
        explanation:
          'Es clara, educada y permite explicar la alternativa.'
      }
    ],
    roleplay: [
      {
        context: 'Un cliente pide un medicamento sujeto a receta sin traerla.',
        customerLine: 'Can I buy this without a prescription?',
        options: [
          'I’m afraid this medicine requires a prescription.',
          'Yes, always.',
          'Only if you pay more.',
          'I do not care.'
        ],
        correctIndex: 0,
        explanation:
          'Es una negativa educada y firme.'
      },
      {
        context: 'Una cliente pide una marca concreta que no está disponible.',
        customerLine: 'Do you have this brand?',
        options: [
          'Let me check if we have it in stock.',
          'No, bye.',
          'Brands are not important.',
          'I cannot speak.'
        ],
        correctIndex: 0,
        explanation:
          'Primero compruebas stock y mantienes la conversación profesional.'
      },
      {
        context: 'Hay un equivalente disponible.',
        customerLine: 'Is this the same?',
        options: [
          'It contains the same active ingredient.',
          'It is the same colour.',
          'I do not know anything.',
          'It is magic.'
        ],
        correctIndex: 0,
        explanation:
          'Explicar el principio activo transmite seguridad.'
      }
    ]
  },
  {
    id: 'pregnancy-children-elderly',
    title: 'Embarazo, niños y personas mayores',
    subtitle: 'Preguntas sensibles y atención con tacto',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Practicar frases cuidadosas para grupos que requieren más prudencia.',
    theory: [
      {
        heading: 'Preguntar con tacto',
        body:
          'Algunas preguntas son delicadas, pero necesarias. El tono importa mucho. Usar “just to be safe” ayuda a explicar que preguntas por seguridad, no por curiosidad.',
        examples: [
          {
            english: 'Just to be safe, are you pregnant or breastfeeding?',
            spanish: 'Solo por seguridad, ¿está embarazada o en periodo de lactancia?',
            note: 'Añadir “just to be safe” suaviza la pregunta.'
          },
          {
            english: 'How old is the child?',
            spanish: '¿Qué edad tiene el niño?',
            note: 'Imprescindible para productos pediátricos.'
          },
          {
            english: 'Does he or she have any allergies?',
            spanish: '¿Tiene alguna alergia?',
            note: 'Sirve cuando el producto es para otra persona.'
          }
        ]
      },
      {
        heading: 'Cuando conviene derivar',
        body:
          'Con bebés, embarazadas, lactancia o personas mayores polimedicadas, hay que ser más prudente. El inglés debe ser claro y calmado, no alarmista.',
        examples: [
          {
            english: 'For a baby this young, I recommend speaking to a doctor.',
            spanish: 'Para un bebé tan pequeño, recomiendo hablar con un médico.',
            note: 'Fórmula prudente y profesional.'
          },
          {
            english: 'Because you are pregnant, it is better to check with your doctor first.',
            spanish: 'Como está embarazada, es mejor consultarlo primero con su médico.',
            note: 'Explica el motivo con tacto.'
          },
          {
            english: 'As you are taking several medicines, let me check this carefully.',
            spanish: 'Como toma varios medicamentos, déjeme comprobarlo con cuidado.',
            note: 'Muy útil en personas mayores.'
          }
        ]
      }
    ],
    usefulPhrases: [
      {
        english: 'Just to be safe, are you pregnant or breastfeeding?',
        spanish: 'Solo por seguridad, ¿está embarazada o en periodo de lactancia?',
        situation: 'Pregunta sensible.'
      },
      {
        english: 'How old is the child?',
        spanish: '¿Qué edad tiene el niño?',
        situation: 'Consulta pediátrica.'
      },
      {
        english: 'How much does the child weigh?',
        spanish: '¿Cuánto pesa el niño?',
        situation: 'Dosis pediátrica.'
      },
      {
        english: 'For a baby this young, I recommend speaking to a doctor.',
        spanish: 'Para un bebé tan pequeño, recomiendo hablar con un médico.',
        situation: 'Bebés.'
      },
      {
        english: 'Because you are pregnant, it is better to check with your doctor first.',
        spanish: 'Como está embarazada, es mejor consultarlo primero con su médico.',
        situation: 'Embarazo.'
      },
      {
        english: 'Let me check if it is suitable for you.',
        spanish: 'Déjeme comprobar si es adecuado para usted.',
        situation: 'Cualquier caso delicado.'
      }
    ],
    quiz: [
      {
        question: '¿Qué frase suaviza una pregunta delicada?',
        options: [
          'Just to be safe...',
          'Answer now...',
          'I need to know everything...',
          'Because I want...'
        ],
        correctIndex: 0,
        explanation:
          '“Just to be safe” explica que preguntas por seguridad.'
      },
      {
        question: '¿Cómo preguntarías la edad de un niño?',
        options: [
          'How old is the child?',
          'How years child?',
          'Child old?',
          'What age medicine?'
        ],
        correctIndex: 0,
        explanation:
          '“How old is the child?” es la forma natural.'
      },
      {
        question: '¿Qué significa “breastfeeding”?',
        options: [
          'Lactancia',
          'Fiebre',
          'Alergia',
          'Mareo'
        ],
        correctIndex: 0,
        explanation:
          '“Breastfeeding” significa lactancia materna.'
      },
      {
        question: 'Si una embarazada pregunta por un medicamento, una frase prudente sería:',
        options: [
          'Because you are pregnant, it is better to check with your doctor first.',
          'Take anything.',
          'Pregnancy does not matter.',
          'All medicines are safe.'
        ],
        correctIndex: 0,
        explanation:
          'Explica el motivo y recomienda consultar primero.'
      }
    ],
    roleplay: [
      {
        context: 'Una mujer pide algo para el resfriado y está embarazada.',
        customerLine: 'I am pregnant. Can I take this?',
        options: [
          'Because you are pregnant, it is better to check with your doctor first.',
          'Yes, take double.',
          'Pregnancy is not important.',
          'Take anything.'
        ],
        correctIndex: 0,
        explanation:
          'La respuesta es prudente, clara y respetuosa.'
      },
      {
        context: 'Un padre pide jarabe para su hijo.',
        customerLine: 'I need cough syrup for my son.',
        options: [
          'How old is the child?',
          'All children are the same.',
          'Take adult syrup.',
          'He should not cough.'
        ],
        correctIndex: 0,
        explanation:
          'La edad es imprescindible antes de recomendar.'
      },
      {
        context: 'Una persona mayor toma varios medicamentos.',
        customerLine: 'I take many tablets every day. Can I take this too?',
        options: [
          'Let me check if it is suitable for you.',
          'Yes, mix everything.',
          'No problem ever.',
          'Take it without reading.'
        ],
        correctIndex: 0,
        explanation:
          'Con polimedicación hay que comprobar posibles interacciones.'
      }
    ]
  },
  {
    id: 'payments-practical',
    title: 'Pago, tickets y cosas prácticas',
    subtitle: 'Frases pequeñas que desbloquean muchas situaciones reales',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Dominar frases de caja, tickets, bolsas, precios, tarjetas y pequeños problemas de comunicación.',
    theory: [
      {
        heading: 'Frases de caja',
        body:
          'No todo es clínica. Muchas interacciones en inglés son de caja: precio, pago con tarjeta, ticket, bolsa, devolución o pedir repetir. Estas frases dan mucha fluidez en el día a día.',
        examples: [
          {
            english: 'That will be twelve euros, please.',
            spanish: 'Son doce euros, por favor.',
            note: 'Frase estándar para decir el precio.'
          },
          {
            english: 'Would you like a receipt?',
            spanish: '¿Quiere ticket?',
            note: 'Más educado que “receipt?”.'
          },
          {
            english: 'You can pay by card or in cash.',
            spanish: 'Puede pagar con tarjeta o en efectivo.',
            note: 'Muy útil con turistas.'
          }
        ]
      },
      {
        heading: 'Cuando no entiendes al cliente',
        body:
          'Si el inglés está oxidado, es normal no entender algo. La clave es tener frases preparadas para pedir que repitan, hablen más despacio o enseñen una foto. Eso evita quedarse bloqueada.',
        examples: [
          {
            english: 'Could you repeat that, please?',
            spanish: '¿Podría repetirlo, por favor?',
            note: 'Frase salvavidas.'
          },
          {
            english: 'Could you speak a little more slowly, please?',
            spanish: '¿Podría hablar un poco más despacio, por favor?',
            note: 'Muy útil con acentos difíciles.'
          },
          {
            english: 'Could you show me a photo of the product?',
            spanish: '¿Podría enseñarme una foto del producto?',
            note: 'Práctica cuando el cliente no recuerda la marca.'
          }
        ]
      }
    ],
    usefulPhrases: [
      {
        english: 'That will be twelve euros, please.',
        spanish: 'Son doce euros, por favor.',
        situation: 'Caja.'
      },
      {
        english: 'Would you like a receipt?',
        spanish: '¿Quiere ticket?',
        situation: 'Después del pago.'
      },
      {
        english: 'Would you like a bag?',
        spanish: '¿Quiere una bolsa?',
        situation: 'Entrega de productos.'
      },
      {
        english: 'You can pay by card or in cash.',
        spanish: 'Puede pagar con tarjeta o en efectivo.',
        situation: 'Método de pago.'
      },
      {
        english: 'Could you repeat that, please?',
        spanish: '¿Podría repetirlo, por favor?',
        situation: 'Cuando no entiendes.'
      },
      {
        english: 'Could you speak a little more slowly, please?',
        spanish: '¿Podría hablar un poco más despacio, por favor?',
        situation: 'Cliente habla rápido.'
      }
    ],
    quiz: [
      {
        question: '“Receipt” significa:',
        options: [
          'Ticket o recibo',
          'Receta médica',
          'Bolsa',
          'Descuento'
        ],
        correctIndex: 0,
        explanation:
          'Ojo: receta médica es “prescription”; ticket o recibo es “receipt”.'
      },
      {
        question: '¿Cómo pedirías que repita?',
        options: [
          'Repeat.',
          'Could you repeat that, please?',
          'Speak again now.',
          'I no understand you.'
        ],
        correctIndex: 1,
        explanation:
          'Es educada y natural.'
      },
      {
        question: '¿Cómo dirías “Puede pagar con tarjeta o en efectivo”?',
        options: [
          'You can pay by card or in cash.',
          'You pay card cash yes.',
          'Cash is card.',
          'You need both card and cash.'
        ],
        correctIndex: 0,
        explanation:
          '“By card” y “in cash” son expresiones estándar.'
      },
      {
        question: 'Si el cliente habla muy rápido, dirías:',
        options: [
          'Could you speak a little more slowly, please?',
          'Stop speaking.',
          'English no.',
          'You speak bad.'
        ],
        correctIndex: 0,
        explanation:
          'Pide que hable más despacio sin sonar maleducada.'
      }
    ],
    roleplay: [
      {
        context: 'Un turista paga y duda con el ticket.',
        customerLine: 'Can I have the receipt, please?',
        options: [
          'Of course. Here is your receipt.',
          'No paper.',
          'This is prescription.',
          'I do not like receipts.'
        ],
        correctIndex: 0,
        explanation:
          'Respuesta clara y amable.'
      },
      {
        context: 'El cliente habla muy rápido y no lo entiendes.',
        customerLine: 'IneedthethingIboughtlasttimeforallergybutIdontrememberthename.',
        options: [
          'Could you speak a little more slowly, please?',
          'Go away.',
          'I cannot English.',
          'Buy this.'
        ],
        correctIndex: 0,
        explanation:
          'Tener esta frase preparada evita bloquearse.'
      },
      {
        context: 'Un cliente pregunta cómo puede pagar.',
        customerLine: 'Can I pay by card?',
        options: [
          'Yes, you can pay by card.',
          'No cards in the world.',
          'Only medicine.',
          'Card is receipt.'
        ],
        correctIndex: 0,
        explanation:
          'Frase simple, correcta y útil.'
      }
    ]
  },
  {
    id: 'difficult-customers',
    title: 'Clientes difíciles y situaciones tensas',
    subtitle: 'Negativas educadas, límites y calma profesional',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Aprender a mantener la calma en inglés cuando el cliente insiste, se enfada o pide algo que no procede.',
    theory: [
      {
        heading: 'Decir “no” sin sonar agresiva',
        body:
          'En farmacia a veces hay que negar una petición: por receta, por seguridad, por stock o porque no es adecuado. En inglés, “I’m afraid…” y “For your safety…” ayudan a sonar firme y empática.',
        examples: [
          {
            english: 'I’m afraid I cannot dispense this without a prescription.',
            spanish: 'Me temo que no puedo dispensar esto sin receta.',
            note: 'Negativa clara y profesional.'
          },
          {
            english: 'For your safety, I recommend speaking to a doctor.',
            spanish: 'Por su seguridad, recomiendo hablar con un médico.',
            note: 'Explica el motivo de la recomendación.'
          },
          {
            english: 'I understand, but I cannot make an exception.',
            spanish: 'Lo entiendo, pero no puedo hacer una excepción.',
            note: 'Útil si el cliente insiste.'
          }
        ]
      },
      {
        heading: 'Validar primero, explicar después',
        body:
          'Cuando un cliente está frustrado, suele funcionar reconocer su molestia antes de explicar el límite. Frases como “I understand” o “I’m sorry” ayudan a bajar tensión.',
        examples: [
          {
            english: 'I understand this is frustrating.',
            spanish: 'Entiendo que esto es frustrante.',
            note: 'Valida la emoción del cliente.'
          },
          {
            english: 'I’m sorry, but this product is currently out of stock.',
            spanish: 'Lo siento, pero este producto está agotado actualmente.',
            note: 'Explica una mala noticia.'
          },
          {
            english: 'Let me see what alternatives we have.',
            spanish: 'Déjeme ver qué alternativas tenemos.',
            note: 'Ofrece solución en vez de cerrar la conversación.'
          }
        ]
      }
    ],
    usefulPhrases: [
      {
        english: 'I understand, but I cannot make an exception.',
        spanish: 'Lo entiendo, pero no puedo hacer una excepción.',
        situation: 'Cliente insistente.'
      },
      {
        english: 'For your safety, I recommend speaking to a doctor.',
        spanish: 'Por su seguridad, recomiendo hablar con un médico.',
        situation: 'Derivación o negativa.'
      },
      {
        english: 'I’m afraid I cannot dispense this without a prescription.',
        spanish: 'Me temo que no puedo dispensar esto sin receta.',
        situation: 'Producto con receta.'
      },
      {
        english: 'I understand this is frustrating.',
        spanish: 'Entiendo que esto es frustrante.',
        situation: 'Cliente molesto.'
      },
      {
        english: 'Let me see what alternatives we have.',
        spanish: 'Déjeme ver qué alternativas tenemos.',
        situation: 'Buscar solución.'
      },
      {
        english: 'I’m doing my best to help you.',
        spanish: 'Estoy haciendo todo lo posible por ayudarle.',
        situation: 'Bajar tensión.'
      }
    ],
    quiz: [
      {
        question: '¿Qué frase es mejor para un cliente que insiste sin receta?',
        options: [
          'I understand, but I cannot make an exception.',
          'No because no.',
          'You are wrong.',
          'Leave the pharmacy.'
        ],
        correctIndex: 0,
        explanation:
          'Es firme pero mantiene educación.'
      },
      {
        question: '“For your safety” significa:',
        options: [
          'Por su seguridad',
          'Por su precio',
          'Por su tarjeta',
          'Por su marca'
        ],
        correctIndex: 0,
        explanation:
          'Es una expresión útil para explicar límites profesionales.'
      },
      {
        question: 'Si un producto está agotado, una buena frase es:',
        options: [
          'I’m sorry, but this product is currently out of stock.',
          'No product.',
          'Bad luck.',
          'Impossible forever.'
        ],
        correctIndex: 0,
        explanation:
          '“Currently out of stock” es clara y profesional.'
      },
      {
        question: 'Para bajar tensión, conviene empezar con:',
        options: [
          'I understand...',
          'Listen to me...',
          'You must...',
          'No, no, no...'
        ],
        correctIndex: 0,
        explanation:
          '“I understand…” valida antes de explicar.'
      }
    ],
    roleplay: [
      {
        context: 'Un cliente insiste en comprar un medicamento sin receta.',
        customerLine: 'But I bought it before without a prescription!',
        options: [
          'I understand, but I cannot make an exception.',
          'Then buy it somewhere else.',
          'Okay, no rules today.',
          'You are lying.'
        ],
        correctIndex: 0,
        explanation:
          'Mantiene el límite sin escalar el conflicto.'
      },
      {
        context: 'Una cliente se enfada porque no hay stock.',
        customerLine: 'This is ridiculous. I really need it today.',
        options: [
          'I understand this is frustrating. Let me see what alternatives we have.',
          'Calm down.',
          'Not my problem.',
          'Come never.'
        ],
        correctIndex: 0,
        explanation:
          'Valida su frustración y ofrece una solución.'
      },
      {
        context: 'Un cliente pide consejo para síntomas preocupantes.',
        customerLine: 'I have chest pain and I feel dizzy.',
        options: [
          'For your safety, you should seek medical advice urgently.',
          'Buy vitamins.',
          'It is probably nothing.',
          'Take a cough syrup.'
        ],
        correctIndex: 0,
        explanation:
          'Dolor torácico y mareo requieren atención médica, no consejo menor.'
      }
    ]
  },
  {
    id: 'full-counter-review',
    title: 'Turno completo de mostrador',
    subtitle: 'Repaso final con conversaciones más largas',
    estimatedMinutes: 10,
    level: 'B1 oxidado',
    goal: 'Unir todo lo aprendido en situaciones completas de atención al público.',
    theory: [
      {
        heading: 'El esquema mental de una buena atención',
        body:
          'Cuando Mónica se bloquee, puede seguir este orden: saludar, preguntar qué ocurre, comprobar para quién es, preguntar duración y seguridad, recomendar o derivar, explicar uso y cerrar con una frase amable.',
        examples: [
          {
            english: 'How can I help you?',
            spanish: '¿En qué puedo ayudarle?',
            note: 'Inicio.'
          },
          {
            english: 'Let me ask you a few quick questions first.',
            spanish: 'Déjeme hacerle unas preguntas rápidas primero.',
            note: 'Transición hacia preguntas clínicas.'
          },
          {
            english: 'If symptoms continue, you should see a doctor.',
            spanish: 'Si los síntomas continúan, debería ver a un médico.',
            note: 'Cierre prudente.'
          }
        ]
      },
      {
        heading: 'Frases comodín para no bloquearse',
        body:
          'No hace falta saber decirlo todo perfecto. Hace falta tener frases comodín para pedir repetición, ganar tiempo, comprobar seguridad y explicar con calma.',
        examples: [
          {
            english: 'Let me check that for you.',
            spanish: 'Déjeme comprobarlo por usted.',
            note: 'Gana tiempo y suena profesional.'
          },
          {
            english: 'Could you repeat that, please?',
            spanish: '¿Podría repetirlo, por favor?',
            note: 'Evita fingir que has entendido.'
          },
          {
            english: 'I want to make sure this is suitable for you.',
            spanish: 'Quiero asegurarme de que esto es adecuado para usted.',
            note: 'Explica por qué haces preguntas.'
          }
        ]
      }
    ],
    usefulPhrases: [
      {
        english: 'Let me ask you a few quick questions first.',
        spanish: 'Déjeme hacerle unas preguntas rápidas primero.',
        situation: 'Antes de recomendar.'
      },
      {
        english: 'I want to make sure this is suitable for you.',
        spanish: 'Quiero asegurarme de que esto es adecuado para usted.',
        situation: 'Explicar preguntas de seguridad.'
      },
      {
        english: 'Let me check that for you.',
        spanish: 'Déjeme comprobarlo por usted.',
        situation: 'Ganar tiempo.'
      },
      {
        english: 'Could you repeat that, please?',
        spanish: '¿Podría repetirlo, por favor?',
        situation: 'No entender.'
      },
      {
        english: 'This can help, but please read the leaflet carefully.',
        spanish: 'Esto puede ayudar, pero lea el prospecto con atención.',
        situation: 'Cierre con consejo.'
      },
      {
        english: 'Come back if you have any questions.',
        spanish: 'Vuelva si tiene alguna pregunta.',
        situation: 'Cierre amable.'
      }
    ],
    quiz: [
      {
        question: '¿Cuál es el mejor orden general?',
        options: [
          'Recomendar primero y preguntar después',
          'Saludar, preguntar, comprobar seguridad, recomendar o derivar',
          'Cobrar antes de saber qué ocurre',
          'Hablar solo de marcas'
        ],
        correctIndex: 1,
        explanation:
          'Ese orden reduce errores y mejora la atención.'
      },
      {
        question: '¿Qué frase sirve para ganar tiempo de forma profesional?',
        options: [
          'Let me check that for you.',
          'Wait because yes.',
          'I am lost.',
          'No English.'
        ],
        correctIndex: 0,
        explanation:
          'Es una frase comodín muy útil.'
      },
      {
        question: '¿Qué frase explica por qué haces preguntas?',
        options: [
          'I want to make sure this is suitable for you.',
          'I like questions.',
          'Because I say so.',
          'This is boring.'
        ],
        correctIndex: 0,
        explanation:
          'Transmite seguridad y profesionalidad.'
      },
      {
        question: 'Un buen cierre sería:',
        options: [
          'Come back if you have any questions.',
          'Never come back.',
          'I finished.',
          'Go fast.'
        ],
        correctIndex: 0,
        explanation:
          'Es amable y deja la puerta abierta.'
      }
    ],
    roleplay: [
      {
        context: 'Consulta completa: cliente con tos y fiebre.',
        customerLine: 'I have a cough and fever. I need something strong.',
        options: [
          'Let me ask you a few quick questions first. How long have you had the fever?',
          'Take the strongest thing.',
          'You need antibiotics now.',
          'Fever is good.'
        ],
        correctIndex: 0,
        explanation:
          'No se recomienda “algo fuerte” sin preguntar duración y seguridad.'
      },
      {
        context: 'Consulta completa: cliente no entiende la alternativa.',
        customerLine: 'Why are you giving me a different brand?',
        options: [
          'It contains the same active ingredient.',
          'Because I want.',
          'Brands do not matter, stop asking.',
          'It is random.'
        ],
        correctIndex: 0,
        explanation:
          'Explica la equivalencia de forma profesional.'
      },
      {
        context: 'Consulta completa: cierre de atención.',
        customerLine: 'Thank you. Anything else I should know?',
        options: [
          'Please read the leaflet carefully and do not exceed the recommended dose.',
          'No, never read anything.',
          'Take more if you want.',
          'Goodbye only.'
        ],
        correctIndex: 0,
        explanation:
          'Cierre seguro: prospecto y dosis recomendada.'
      }
    ]
  }
]
