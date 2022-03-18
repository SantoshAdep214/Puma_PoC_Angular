const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
     "/api/Data",
      "/api/Workday",
      "/api/Adobe",
      "/api/SAPConcur",
      "/api/Outlook",
      "/api/Source",
      "/api/Opentext",
      "/api/AdobeCard2",
      "/api/Count"
    ],
    target: "https://localhost:7069",  //5001 
    secure: false 
  }
]

module.exports = PROXY_CONFIG;
