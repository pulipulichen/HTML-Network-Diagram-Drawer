Vue.config.productionTip = false
var app = new Vue({
  el: '#app',
  data: {
    input: '',
    fileType: 'svg',
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
      var data = CSVHelper.parseStringToArray(input)
      //console.log(data)
      
      SigmaJSHelper.draw(data, this.$refs.graphContainer)
    }
  },
  methods: {
    init: function () {
      $(this.$refs.modal).find('.ui.dropdown').dropdown()

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
      console.log('download')
    }
  }
})
