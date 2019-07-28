let CSVHelper = {
  parseStringToArray: function (string) {
    let output = []
    
    let fieldList = []
    let isHeader = true
    string.trim().split('\n').forEach(line => {
      if (isHeader === true) {
        line.trim().split(',').forEach(field => {
          fieldList.push(this.stripQuotes(field))
        })
        isHeader = false
      }
      else {
        let row = {}
        line.trim().split(',').forEach((field, i) => {
          let fieldName = fieldList[i]
          let value = this.stripQuotes(field)
          value = this.filterDataType(value)
          row[fieldName] = value
        })
        output.push(row)
      }
    })
    
    return output
  },
  stripQuotes: function (str) {
    if ( (str.startsWith('"') && str.endsWith('"')) 
            || (str.startsWith("'") && str.endsWith("'")) ) {
      str = str.slice(1, -1)
    }
    return str
  },
  filterDataType: function (str) {
    if (isNaN(str) === false) {
      if (str.indexOf('.') === -1) {
        str = parseInt(str, 10)
      }
      else {
        eval(`str = ${str}`)
      }
    }
    return str
  },
  parseArrayToString: function (array) {
    if (Array.isArray(array) === false || array.length === 0) {
      return ''
    }
    
    let fieldList = []
    let fieldRow = []
    for (let key in array[0]) {
      fieldList.push(key)
      
      if (key.indexOf('"') > -1) {
        key = key.split('"').join('\"')
      }
      key = `"${key}"`
      fieldRow.push(key)
    }
    let rows = [fieldRow.join(',')]
        
    array.forEach(rowObject => {
      let rowArray = []
      fieldList.forEach(key => {
        let value = rowObject[key]
        //console.log(rowObject, key)
        if (typeof(value) === 'string' && value.indexOf('"') > -1) {
          value = value.split('"').join('\"')
        }
        value = `"${value}"`
        rowArray.push(value)
      })
      rows.push(rowArray.join(','))
    })
    return rows.join('\n')
  }
}

window.CSVHelper = CSVHelper