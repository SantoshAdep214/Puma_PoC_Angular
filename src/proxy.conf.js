const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
     "/api/Data",
      "/api/Workday",
      "/api/Adobe",
      "/api/SAPConcur",
      "/api/Outlook",
      "/api/Opentext",
      "/api/AdobeCard2"
    ],
    target: "https://localhost:7069",  //5001 
    secure: false 
  }
]

module.exports = PROXY_CONFIG;
