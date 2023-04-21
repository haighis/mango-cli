import Context, { ContextInput } from "./db/models/Context";

export class SetupService
{
  public async AddDefaultDevContextIfNotExists() {
    let testInput: ContextInput = { context: "development", apiGatewayAdminUrl: "http://localhost:8002", apiServerUrl: "http://localhost:7878", isDefaultContext: true }; 
    let existingDefault = await Context.findOne({ where: {context: "development" }});
    if(!existingDefault) {
      console.log(`Development context created did not exist. ${new Date()}`);
      await Context.create(testInput);
    } else {
      console.log('Development context does exist.');
    }  
  }
}