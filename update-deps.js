const descriptor = require('./package')
const {promisify} = require('util')
const writeFile = promisify(require('fs').writeFile)
const exec = promisify(require('child_process').exec)

const update = async (deps, prefix = '^') => {
  for (const dep in deps) {
    const {stdout} = await exec(`npm info ${dep} version`)
    const latest = `${prefix}${stdout.trim()}`
    if (deps[dep] !== latest) {
      console.log(`update ${dep} from ${deps[dep]} to ${latest}...`)
      deps[dep] = latest
    }
  }
  await writeFile('./package.json', JSON.stringify(descriptor, null, 2))
}

(async () => {
  console.log('checking versions on npm...')
  await update(descriptor.dependencies)
  await update(descriptor.devDependencies)
  console.log('update finished!')
})()
