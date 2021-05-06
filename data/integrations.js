module.exports = [
  {
    name: "Active",
    logo: "/images/logos/Active.png",
    options: [
      {
        name: "Seasons",
        endpoint: 'https://awapi.active.com/rest/camps-season-info',
        request: {
          appToken: '',
          request:
            {
              applicationName: '',
              userName: '',
              password: '',
              seasonIds: []
            }
          },
        setUpForm: [
          {
            inputName: "Application Token",
            requestName: "appToken",
            type: "text"
          },
          {
            inputName: "Application Name",
            requestName: "applicationName",
            type: "text"
          },
          {
            inputName: "Username",
            requestName: "userName",
            type: "text"
          },
          {
            inputName: "Password",
            requestName: "password",
            type: "password"
          }
        ]
      },
      {
        name: "Registrations",
        endpoint: 'https://awapi.active.com/rest/camps-season-info',
        request: {
          appToken: '',
          request:
            {
              applicationName: '',
              userName: '',
              password: '',
              seasonIds: []
            }
          },
        setUpForm: [
          {
            inputName: "Application Token",
            requestName: "appToken",
            type: "text"
          },
          {
            inputName: "Application Name",
            requestName: "applicationName",
            type: "text"
          },
          {
            inputName: "Username",
            requestName: "userName",
            type: "text"
          },
          {
            inputName: "Password",
            requestName: "password",
            type: "password"
          }
        ]
      }
    ]
  },
  {
    name: "Hubspot",
    logo: "/images/logos/Hubspot.png",
    options: [
      {
        name: "Seasons",
        endpoint: 'https://awapi.active.com/rest/camps-season-info',
        request: {
          appToken: '',
          request:
            {
              applicationName: '',
              userName: '',
              password: '',
              seasonIds: []
            }
          },
        setUpForm: [
          {
            inputName: "Application Token",
            requestName: "appToken",
            type: "text"
          },
          {
            inputName: "Application Name",
            requestName: "applicationName",
            type: "text"
          },
          {
            inputName: "Username",
            requestName: "userName",
            type: "text"
          },
          {
            inputName: "Password",
            requestName: "password",
            type: "password"
          }
        ]
      }
    ]
  }
]