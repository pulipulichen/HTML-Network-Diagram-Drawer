Vue.config.productionTip = false
let config = {
  el: '#app',
  data: {
    input: '',
    fileType: 'svg',
    sigmaJS: null,
    associationRunInformation: ''
  },
  mounted() {
    VueHelper.mount(this, 'fileType', 'svg')
    this.init()
  },
  /*
  computed: {
    output: function () {
      //console.log(CSVHelper.parseStringToArray(this.input))
      var data = CSVHelper.parseStringToArray(this.input)
      console.log(data)
      
      SigmaJSHelper.draw(data, this.$refs.graphContainer)
      return ''
    },
    outputTitle: function () {
      return ''
    }
    
  },
  */
  watch: {
    input: function (input) {
      let data
      if (input.indexOf('=== Run information ===') === -1) {
        data = CSVHelper.parseStringToArray(input)
        this.associationRunInformation = ''
      }
      else {
        data = WekaHelper.parseAssociationRunInformation(input)
        this.associationRunInformation = WekaHelper.parseAssociationRunInformationToCSV(input)
      }
      //console.log(data)
      //return 
      SigmaJSHelper.draw(data, this.$refs.graphContainer, (s) => {
        //console.log(s)
        this.sigmaJS = s
        //AAA = s
      })
    }
  },
  methods: {
    init: function () {
      //console.log($(this.$refs.modal).find('.ui.dropdown').length)
      //console.log($(this.$refs.select).length)
      $(this.$refs.select).dropdown()

      // 載入檔案
      //let preloadFile = './data.csv'
      //let preloadFile = './0724-1511-number.txt'
      //let preloadFile = './0724-1511-number50.txt'
      let preloadFile = './0724-1511-number-left10.txt' // ok
      //let preloadFile = './20190728-0202-papers.txt'
      //let preloadFile = './20190728-0213-papers_lift147.txt'
      //let preloadFile = './20190728-0213-papers_lift54.txt' // 先用conv排序，然後再篩選lift高於54的資料
      //let preloadFile = './20190728-0213-papers_lift54_reverse.txt'
      //let preloadFile = './20190728-abstract.txt'
      $.get(preloadFile, (data) => {
        this.input = data
      })

      FileHelper.initDropUpload((e) => {
        //console.log(e)
        this.upload(e)
      })
      
      //setTimeout(() => {
        //SigmaJSHelper.demo()
      //}, 0)
      
      $(this.$refs.menu).find('.item').tab()
    },
    persist: function () {
      VueHelper.persist(this, 'fileType')
    },
    reset: function () {
      this.input = ''
    },
    copy: function () {
      ClipboardHelper.copyRichFormat(this.output)
    },
    triggerUpload: function (e) {
      FileHelper.triggerUpload(e)
    },
    upload: function (e) {
      FileHelper.upload(e, true, (result) => {
        this.input = result[0]
      })
    },
    download: function () {
      if (this.sigmaJS === null) {
        //console.log(this.sigmaJS)
        return
      }
      
      FileHelper.saveAs(this.getFilename() + ".svg", this.sigmaJS.getSerializedSvg())
    },
    downloadCSV: function () {
      if (this.sigmaJS === null) {
        //console.log(this.sigmaJS)
        return
      }
      
      //console.log(this.associationRunInformation)
      
      FileHelper.saveAs(this.getFilename() + ".csv", CSVHelper.parseArrayToString(this.associationRunInformation))
    },
    getFilename: function () {
      let d = new Date
      let filename = this.padLeftZero(d.getMonth()+1) 
              + this.padLeftZero(d.getDate())
              + '-'
              + this.padLeftZero(d.getHours())
              + this.padLeftZero(d.getMinutes())
      return filename
    },
    padLeftZero: function (number) {
      if (number < 10) {
        number = '0' + number
      }
      return number
    }
  }
}

var app = new Vue(config)
