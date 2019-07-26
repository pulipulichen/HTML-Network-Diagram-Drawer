let WekaHelper = {
  parseAssociationRunInformation: function (runInformation) {
    let needle = '=== Associator model (full training set) ==='
    if (runInformation.indexOf(needle) === -1) {
      return []
    }
    
    runInformation = runInformation.trim().slice(runInformation.indexOf(needle))
    
    needle = '1. ['
    runInformation = runInformation.trim().slice(runInformation.indexOf(needle))
    
    let output = []
    runInformation.split('\n').forEach(line => {
      line = line.trim()
      if (line === '') {
        return
      }
      
      line = line.slice(line.indexOf('['), line.lastIndexOf('>'))
      //console.log(line)
      
      let fields = line.split(']')
      let source = fields[0].slice(1, fields[0].lastIndexOf('='))
      let target = fields[1].slice(fields[1].indexOf('[') + 1, fields[1].lastIndexOf('='))
      let size = fields[2].slice(fields[2].lastIndexOf('(')+1, fields[2].lastIndexOf(')'))
      size = parseInt(size, 10)
      
      let edgeLabel = ''
      if (size > 2) {
        edgeLabel = size
      }
      
      output.push({
        source: source,
        target: target,
        edgeWeight: size,
        edgeLabel: edgeLabel
      })
    })
    
    //console.log(output)
    //return []
    
    return output
  }
}

window.WekaHelper = WekaHelper