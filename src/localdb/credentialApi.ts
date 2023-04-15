import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'
import Credential from './Credential'
const credentialFile = path.join(os.homedir(), 'mango-cli', 'credentials.json')

class CredentialAPI {
  private credentials : Credential[] = []

  constructor () {
    this.credentials = JSON.parse(fs.readFileSync(credentialFile, { encoding: 'utf-8' }))
  }

  private save () {
    // make folder for the first run
    if (!fs.existsSync(path.dirname(credentialFile))) {
      fs.mkdirSync(path.dirname(credentialFile))
    }
    const data = JSON.stringify(this.credentials)
    fs.writeFileSync(credentialFile, data, { encoding: 'utf-8' })
  }

  add (secretKey: string, context : string) {
    const cred : Credential = { secretKey, context }
    let foundIndex = this.credentials.findIndex(x => x.context == context);
    if(foundIndex != -1) {
      this.remove(foundIndex);
      this.credentials.push(cred);
      this.save()
    } else {
      this.credentials.push(cred);
      this.save()
    }
  }

  remove (index : number) {
    this.credentials.splice(index, 1)
    this.save()
  }

  list () {
    return this.credentials
  }

  get (index : number) : Credential {
    return this.credentials[index]
  }
}

const api = new CredentialAPI
export default api