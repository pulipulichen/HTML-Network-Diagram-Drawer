Vue.config.productionTip = false
let config = {
  el: '#app',
  data: {
    input: '',
    fileType: 'svg',
    sigmaJS: null,
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
      let data = CSVHelper.parseStringToArray(input)
      //console.log(data)
      //return 
      SigmaJSHelper.draw(data, this.$refs.graphContainer, (s) => {
        console.log(s)
        this.sigmaJS = s
        AAA = s
      })
    }
  },
  methods: {
    init: function () {
      //console.log($(this.$refs.modal).find('.ui.dropdown').length)
      //console.log($(this.$refs.select).length)
      $(this.$refs.select).dropdown()

      // 載入檔案
      $.get('./data.csv', (data) => {
        this.input = data
      })

      FileHelper.initDropUpload((e) => {
        //console.log(e)
        this.upload(e)
      })
      
      //setTimeout(() => {
        //SigmaJSHelper.demo()
      //}, 0)
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
        console.log(this.sigmaJS)
        return
      }
      
      FileHelper.saveAs("A.svg", SSS.renderers[0].contexts["scene"].getSerializedSvg())
      return
      
      //console.log(['download', this.fileType])
      //this.sigmaJS.toSVG({download: true, filename: 'mygraph.svg', size: 1000});
      let sigmaCanvas = $(this.$refs.graphContainer).children('canvas.sigma-scene')[0]
      
      //let MIME = "image/png"
      //let MIME = "image/jpeg"
      let MIME = "image/gif"
      var img = sigmaCanvas.toDataURL(MIME);
      //document.write('<img src="'+img+'"/>');
      //console.log(img)
      FileHelper.downloadByURL('a.gif', img)
    }
  }
}

var app = new Vue(config)
