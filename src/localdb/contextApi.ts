import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'
import Context from './Context';

const contextFile = path.join(os.homedir(), 'mango-cli', 'contexts.json')

class ContextAPI {
  private contexts : Context[] = []

  constructor () {
    this.contexts = JSON.parse(fs.readFileSync(contextFile, { encoding: 'utf-8' }))
  }

  private save () {
    // make folder for the first run
    if (!fs.existsSync(path.dirname(contextFile))) {
      fs.mkdirSync(path.dirname(contextFile))
    }
    const data = JSON.stringify(this.contexts)
    fs.writeFileSync(contextFile, data, { encoding: 'utf-8' })
  }

  add (apiServerUrl: string, context : string, defaultContext: boolean) {
    const cred : Context = { apiServerUrl, context, defaultContext }
    console.log(' before save ', cred)
    let foundIndex = this.contexts.findIndex(x => x.context == context);
    if(foundIndex != -1) {
      this.remove(foundIndex);
      this.contexts.push(cred);
      this.save()
    } else {
      this.contexts.push(cred);
      this.save()
    }
  }

  remove (index : number) {
    this.contexts.splice(index, 1)
    this.save()
  }

  list () {
    return this.contexts
  }

  get (index : number) : Context {
    return this.contexts[index]
  }
}

const api = new ContextAPI
export default api