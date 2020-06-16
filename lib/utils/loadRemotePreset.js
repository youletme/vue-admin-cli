const fs = require('fs-extra')

const remotePresetMap = {
  redux: 'Walker-Leee/react-temp-mobx',
  mobx: 'https://github.com/youletme/admin-demo.git#master'
}

module.exports = async function (name, targetDir, clone) {
  const os = require('os')
  const path = require('path')
  const download = require('download-git-repo')
  const tmpdir = path.join(os.tmpdir(), 'vue-admin-cli')

  // clone will fail if tmpdir already exists
  // https://github.com/flipxfx/download-git-repo/issues/41
  // if (clone) {
  //   await fs.remove(tmpdir)
  // }

  await fs.remove(tmpdir)

  await new Promise((resolve, reject) => {
    
    // 这里可以根据具体的模板地址设置下载的url，注意，如果是git，url后面的branch不能忽略
    download('github:youletme/admin-demo#master', tmpdir, { clone }, (err) => {
      if (err) return reject(err)
      resolve()
    })
  })

  return {
    targetDir,
    tmpdir
  }
}