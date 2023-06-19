const companies = [
    {
      id_business: 1,
      id_rol: "business",
      id_description: "business",
      username_business: "johndoe",
      fullName_owner: "John Doe",
      email: "johndoe@example.com",
      dateOfCreate: "1990-01-01",
      address: "123 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      authentication_pdf:[],
      posts: [
        {
          id: 1,
          description: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
          id_usuario: 4,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            },
            {
              id_user: 3,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            }
          ]
        }
      ],
      jobsOffers: [
        {
          id_jobsOffers: 1,
          description_jobsOffers: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
          media: "imagen,video, etc",
          likes: 1,
          applicants: [
            { 
              id_user: 5,
              menssage: "Profile o cv card"
            },
            {
              id_user: 4,
              menssage: "Profile o cv card"
            }
          ]
        }
      ]
    },
    {
      id_business: 2,
      id_rol: "business",
      id_description: "business",
      username_business: "janedoe",
      fullName_owner: "Jane Doe",
      email: "janedoe@example.com",
      dateOfCreate: "1991-01-01",
      address: "456 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      authentication_pdf:[],
      posts: [
        {
          id: 1,
          description: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 3,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            },
            {
              id_user: 2,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            }
          ]
        }
      ],
      jobsOffers: [
        {
          id_jobsOffers: 1,
          description_jobsOffers: "descripción",
          media: "imagen,video, etc",
          likes: 1,
          applicants: [
            {
              id_user: 1,
              menssage: "Profile o cv card"
            },
            {
              id_user: 4,
              menssage: "Profile o cv card"
            }
          ]
        }
      ]
    },
    {
      id_business: 3,
      id_rol: "business",
      id_description: "business",
      username_business: "johndoe2",
      fullName_owner: "John Doe",
      email: "johndoe2@example.com",
      dateOfCreate: "1990-01-01",
      address: "123 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      authentication_pdf:[],
      posts: [
        {
          id: 1,
          description: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 1,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            },
            {
              id_user: 3,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            }
          ]
        }
      ],
      jobsOffers: [
        {
          id_jobsOffers: 1,
          description_jobsOffers: "descripción",
          media: "imagen,video, etc",
          likes: 1,
          applicants: [
            {
              id_user: 1,
              menssage: "Profile o cv card"
            },
            {
              id_user: 8,
              menssage: "Profile o cv card"
            }
          ]
        }
      ]
    },
    {
      id_business: 4,
      id_rol: "business",
      id_description: "business",
      username_business: "janedoe2",
      fullName_owner: "Jane Doe",
      email: "janedoe2@example.com",
      dateOfCreate: "1991-01-01",
      address: "456 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      authentication_pdf:[],
      posts: [
        {
          id: 1,
          description: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 1,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            },
            {
              id_user: 3,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            }
          ]
        }
      ],
      jobsOffers: [
        {
          id_jobsOffers: 1,
          description_jobsOffers: "descripción",
          media: "imagen,video, etc",
          likes: 1,
          applicants: [
            {
              id_user: 7,
              menssage: "Profile o cv card"
            },
            {
              id_user: 6,
              menssage: "Profile o cv card"
            }
          ]
        }
      ]
    },
    {
      id_business: 5,
      id_rol: "business",
      id_description: "business",
      username_business: "johndoe3",
      fullName_owner: "John Doe",
      email: "johndoe3@example.com",
      dateOfCreate: "1990-01-01",
      address: "123 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      authentication_pdf:[],
      posts: [
        {
          id: 1,
          description: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 1,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            },
            {
              id_user: 3,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            }
          ]
        }
      ],
      jobsOffers: [
        {
          id_jobsOffers: 1,
          description_jobsOffers: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
          media: "imagen,video, etc",
          likes: 1,
          applicants: [
            {
              id_user: 3,
              menssage: "Profile o cv card"
            },
            {
  
              id_user: 7,
              menssage: "Profile o cv card"
            }
          ]
        }
      ]
    }
  ];
  
  
  const users = [
    {
      id_user: 1,
      id_rol: "usuario",
      id_description: "user",
      username: "johndoe1",
      fullName: "John Doe1",
      email: "1johndoe@example.com",
      dateOfBirth: "1990-01-01",
      address: "123 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      isAdmin: false,
      posts: [
        {
          id: 1,
          description:"- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 1,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            },
            {
              id_user: 2,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            }
          ]
        }
      ]
    },
    {
      id_user: 2,
      id_rol: "usuario",
      id_description: "user",
      username: "janedoe2",
      fullName: "Jane Doe2",
      email: "2janedoe@example.com",
      dateOfBirth: "1991-01-01",
      address: "456 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      isAdmin: false,
      posts: [
        {
          id: 1,
          description: "descripción",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 1,
              comment:"- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            },
            {
              id_user: 8,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            }
          ]
        }
      ]
    },
    {
      id_user: 3,
      id_rol: "usuario",
      id_description: "user",
      username: "johndoe3",
      fullName: "John Doe3",
      email: "3johndoe2@example.com",
      dateOfBirth: "1990-01-01",
      address: "123 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      isAdmin: false,
      posts: [
        {
          id: 1,
          description: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 1,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            },
            {
              id_user: 3,
              comment: "hola hola, no seria cosa"
            }
          ]
        }
      ]
    },
    {
      id_user: 4,
      id_rol: "usuario",
      id_description: "user",
      username: "janedoe4",
      fullName: "Jane Doe4",
      email: "4janedoe2@example.com",
      dateOfBirth: "1991-01-01",
      address: "456 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      isAdmin: false,
      posts: [
        {
          id: 1,
          description: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 7,
              comment: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
            },
            {
              id_user: 4,
          id_usuario: "134912",
              comment: "venga la ptm cuantos faltan?"
            }
          ]
        }
      ]
    },
    {
      id_user: 5,
      id_rol: "usuario",
      id_description: "user",
      username: "johndoe5",
      fullName: "John Doe5",
      email: "5johndoe3@example.com",
      dateOfBirth: "1990-01-01",
      address: "123 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      isAdmin: false,
      posts: [
        {
          id: 1,
          description: "- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 1,
              comment: "comentario 1"
            },
            {
              id_user: 2,
              comment: "comentario 2"
            }
          ]
        }
      ]
    },
    {
      id_user: 6,
      id_rol: "usuario",
      id_description: "user",
      username: "janedoe6",
      fullName: "Jane Doe6",
      email: "6janedoe3@example.com",
      dateOfBirth: "1991-01-01",
      address: "456 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      isAdmin: false,
      posts: [
        {
          id: 1,
          description:"- No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e la excelsa princessa, les II là en taula posades, e sentí un fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. En aquell cars, la mia ànima, de pietat sentí dolor inextimable.",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 1,
              comment: "comentario 1"
            },
            {
              id_user: 2,
              comment: "comentario 2"
            }
          ]
        }
      ]
    },
    {
      id_user: 7,
      id_rol: "usuario",
      id_description: "user",
      username: "johndoe7",
      fullName: "John Doe7",
      email: "7johndoe4@example.com",
      dateOfBirth: "1990-01-01",
      address: "123 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      isAdmin: false,
      posts: [
        {
          id: 1,
          description: "faltan 3 todavia",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 3,
              comment: "comentario 1"
            },
            {
              id_user: 2,
              comment: "comentario 2"
            }
          ]
        }
      ]
    },
    {
      id_user: 8,
      id_rol: "usuario",
      id_description: "user",
      username: "janedoe8",
      fullName: "Jane Doe8",
      email: "8janedoe4@example.com",
      dateOfBirth: "1991-01-01",
      address: "456 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      isAdmin: false,
      posts: [
        {
          id: 1,
          description: "descripción",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 2,
              comment: "no termino mas"
            },
            {
              id_user: 1,
              comment: "comentario 2"
            }
          ]
        }
      ]
    },
    {
      id_user: 9,
      id_rol: "usuario",
      id_description: "user",
      username: "johndoe9",
      fullName: "John Doe9",
      email: "9johndoe5@example.com",
      dateOfBirth: "1990-01-01",
      address: "123 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      isAdmin: false,
      posts: [
        {
          id: 1,
          description: "descripción",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 1,
              comment: "comentario 1"
            },
            {
              id_user: 2,
              comment: "comentario 2"
            }
          ]
        }
      ]
    },
    {
      id_user: 10,
      id_rol: "usuario",
      id_description: "user",
      username: "janedoe10",
      fullName: "Jane Doe",
      email: "10janedoe5@example.com",
      dateOfBirth: "1991-01-01",
      address: "456 Main Street",
      phoneNumber: "123-456-7890",
      profile_image: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      imagen_portada: "https://assets.soyhenry.com/LOGO-REDES-01_og.jpg",
      isActive: true,
      isPremiun:false,
      isAdmin: false,
      posts: [
        {
          id: 1,
          description: "descripción",
          media: "imagen,video, etc",
          likes: 1,
          comments: [
            {
              id_user: 1,
              comment: "comentario 1"
            },
            {
              id_user: 2,
              comment: "comentario 2"
            }
          ]
        }
      ]
    }
  ];

export {
    users,
    companies,
}