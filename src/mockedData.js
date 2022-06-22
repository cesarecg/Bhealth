export const data = [
    {
      plan: 'Plan Gratuito',
      price: 0,
      unit: 'Durante 6 meses',
      special: {
        text: null
        
      },
      includes: [
        {
          text: 'Archivo médico personal',
          url: ''
        },
        {
          text: 'Guia médica',
          url: ''
        },
        {
          text: 'Hasta 3 registros médicos',
          url: ''
        },
        {
          text: 'Citas médicas',
          url: ''
        },
        {
          text: 'Diréctorio médico',
          url: ''
        }
      ],
      excludes: [
    
      ],
      callToAction: {
        text: 'Comienza Gratis',
        url: ''
      }
    },
    {
      plan: 'Personal+',
      price: 9.99,
      unit: 'Mensual',
      special: {

      },
      includes: [
        {
          text: 'TODOS los beneficios anteriores',
          url: ''
        },
        {
          text: 'Seguimiento de indicadores de peso',
          url: ''
        },
        {
          text: 'Seguimiento de indicadores de tensión',
          url: ''
        }
      ],
      excludes: [
    
      ],
      callToAction: {
        text: 'Comienza con Pro',
        url: ''
      }
    },
    {
      plan: 'Familiar+',
      price: 14.99,
      unit: 'Mensual',
      special: {
        text: 'Protege a tu familia',
        excluded: false,
        url: '',
        additionalFeatures: [
  
        ]
      },
      includes: [
        {
          text: 'TODOS los beneficios anteriores',
          url: ''
        },
        {
          text: 'Hasta 10 registros médicos distintos',
          url: ''
        },
        {
          text: 'Carnet de salud Medik',
          url: ''
        },
        {
          text: '',
          url: ''
        }
      ],
      excludes: [],
      callToAction: {
        text: 'Comienza Pro con tu familia',
        url: ''
      }
    }
  ]