let WekaHelper = {
  parseAssociationRunInformation: function (runInformation) {
    let needle = '=== Associator model (full training set) ==='
    if (runInformation.indexOf(needle) === -1) {
      return []
    }
    
    runInformation = runInformation.trim().slice(runInformation.indexOf(needle))
    
    needle = '. ['
    runInformation = runInformation.trim().slice(runInformation.indexOf(needle) - 1)
    
    let output = []
    runInformation.split('\n').forEach(line => {
      line = line.trim()
      if (line === '') {
        return
      }
      
      line = line.slice(line.indexOf('['), line.lastIndexOf('>'))
      //console.log(line)
      
      let fields = line.split(']')
      let source = fields[0].slice(1, fields[0].lastIndexOf('=')).trim()
      let target = fields[1].slice(fields[1].indexOf('[') + 1, fields[1].lastIndexOf('=')).trim()
      let size = fields[2].slice(fields[2].lastIndexOf('(')+1, fields[2].lastIndexOf(')'))
      size = parseInt(size, 10)
      
      /**
       * @author Pulipuli Chen 20190728 先暫時不要考慮size看看
       */
      size = 1
      
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
  },
  parseAssociationRunInformationToCSV: function (runInformation) {
    let needle = '=== Associator model (full training set) ==='
    if (runInformation.indexOf(needle) === -1) {
      return []
    }
    
    runInformation = runInformation.trim().slice(runInformation.indexOf(needle))
    
    needle = '. ['
    runInformation = runInformation.trim().slice(runInformation.indexOf(needle) - 1)
    
    let output = []
    runInformation.split('\n').forEach(line => {
      line = line.trim()
      if (line === '') {
        return
      }
      
      //line = line.slice(line.indexOf('['))
      //console.log(line)
      
      let fields = line.split(']')
      
      let id = fields[0].slice(0, fields[0].indexOf('.')).trim()
      id = parseInt(id, 10)
      
      let source = fields[0].slice(fields[0].indexOf('[') + 1, fields[0].lastIndexOf('=')).trim()
      
      let sourceFrequency = fields[1].slice(fields[1].indexOf(': ') + 2, fields[1].indexOf(' ==> ')).trim()
      sourceFrequency = parseInt(sourceFrequency, 10)
      
      let target = fields[1].slice(fields[1].indexOf('[') + 1, fields[1].lastIndexOf('='))
      let targetFrequency = fields[2].slice(fields[2].indexOf(': ') + 2, fields[2].indexOf('<')).trim()
      targetFrequency = parseInt(targetFrequency, 10)
      
      let indexes = fields[2].slice(fields[2].indexOf('<')).trim().split(' ')
      //console.log(indexes)
      let conf = this.getNumberInBrackets(indexes[0])
      let lift = this.getNumberInBrackets(indexes[1])
      let lev = this.getNumberInBrackets(indexes[2])
      let conv = this.getNumberInBrackets(indexes[3])
      
      output.push({
        id: id,
        source: source,
        sourceFrequency: sourceFrequency,
        target: target,
        targetFrequency: targetFrequency,
        conf: conf,
        lift: lift,
        lev: lev,
        conv: conv
      })
    })
    
    console.log(output)
    //return []
    
    return output
  },
  getNumberInBrackets: function (str) {
    if (typeof(str) === 'string' && str.indexOf('(') > -1 && str.indexOf(')') > -1) {
      str = str.slice(str.indexOf('(') + 1, str.indexOf(')')).trim()
      if (str.indexOf('.') === -1) {
        str = parseInt(str, 10)
      }
      else {
        eval(`str = ${str}`)
      }
      return str
    }
    
  }
}

window.WekaHelper = WekaHelper