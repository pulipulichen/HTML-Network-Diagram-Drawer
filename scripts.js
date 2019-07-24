Vue.config.productionTip = false
var app = new Vue({
  el: '#app',
  data: {
    input: '',
    fileType: 'ods'
  },
  mounted() {
    VueHelper.mount(this, 'fileType')
    this.init()
  },
  computed: {
    output: function () {
      return ''
    },
    outputTitle: function () {
      return ''
    }
  },
  methods: {
    init: function () {
      $(this.$refs.modal).find('.ui.dropdown').dropdown()

      // 載入檔案
      //$.get('./data.txt', (data) => {
      //  this.input = data
      //})

      FileHelper.initDropUpload((e) => {
        //console.log(e)
        this.upload(e)
      })
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
