import {exec} from 'child_process';
import  util from 'util'

const execInstance = util.promisify(exec);

var executeTest = async function () {
    let cmd = "npm test"
    let path = 'cd ../jsgauge/'
    let options = {
        encoding: 'utf8',
        timeout: 0,
        maxBuffer: 200 * 1024,
        killSignal: 'SIGTERM',
        cwd: null,
        env: null
    };
    const  { error,stdout, stderr } =  await execInstance(`${path}　&& ${cmd} `, options);

    return error?stderr:stdout

}
export  default executeTest