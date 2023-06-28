import * as WorkspaceAPI from "trimble-connect-workspace-api";

this.API = await WorkspaceAPI.connect(
   window.parent,
   (event, args) => {
     switch (event) {
       case "extension.command":
       //"Command executed by the user: args.data"
         break;
       case "extension.accessToken":
       //"Accestoken or status: args.data"
         break;
       case "extension.userSettingsChanged":
       //"User settings changed!"
         break;
       default:
     }
   },
   30000
 );
 
 console.log(this.API);
 
 //Request for the access token.
 this.API.extension.getPermission("accesstoken").then((accessToken: string) => {
     //Current user access token or status: accessToken
     console.log(accesstoken);
 });
 

//    console.log("Test log");

//    var projectId;
//    var myAccessToken;

//    getData();

//    async function getData() {
//     API = await TrimbleConnectWorkspace.connect(window.parent, (event, data) => {
//        console.log("Event: ", event, data);
//     });

//     API.project.getProject().then(project => {
//        console.log(project); // Trimble Connect project details
//        projectId = project.id;
//     });

//     //Request for the access token.
//     API.extension.requestPermission("accesstoken").then(accessToken => {
//        //Current user access token or status: accessToken
//        console.log(accessToken);
// myAccessToken = accessToken;    
//     });

//     const propertyName = 'Propriété Test';
//     const propertyValue = 'Test';
//     const filter = `properties/${propertyName} eq null`;
//     /*const filter = `properties/${propertyName} eq '${propertyValue}'`;*/
//     const apiUrl = `https://pset-api.connect.trimble.com/propertyset/v1/projects/${projectId}/propertyset-instances?filter=${encodeURIComponent(filter)}`;

//     fetch(apiUrl, {
//        method: 'GET',
//        headers: {
//          'Content-Type': 'application/json',
//          'Authorization': `Bearer ${myAccessToken}`
//        },
//     })
//     .then(response => response.json())
//     .then(data => {
//        const propertySetInstances = data.data;
//        // Use the propertySetInstances array to access the entities that match the filter
//        console.log(propertySetInstances)
//     });

//    }
