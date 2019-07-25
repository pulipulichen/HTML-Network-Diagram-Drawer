let SigmaJSHelper = {
  loadList: [
    "vendors/sigma.js/src/sigma.core.js",
    "vendors/sigma.js/src/conrad.js",
    "vendors/sigma.js/src/utils/sigma.utils.js",
    "vendors/sigma.js/src/utils/sigma.polyfills.js",
    "vendors/sigma.js/src/sigma.settings.js",
    "vendors/sigma.js/src/classes/sigma.classes.dispatcher.js",
    "vendors/sigma.js/src/classes/sigma.classes.configurable.js",
    "vendors/sigma.js/src/classes/sigma.classes.graph.js",
    "vendors/sigma.js/src/classes/sigma.classes.camera.js",
    "vendors/sigma.js/src/classes/sigma.classes.quad.js",
    "vendors/sigma.js/src/classes/sigma.classes.edgequad.js",
    "vendors/sigma.js/src/captors/sigma.captors.mouse.js",
    "vendors/sigma.js/src/captors/sigma.captors.touch.js",
    "vendors/sigma.js/src/renderers/sigma.renderers.canvas.js",
    "vendors/sigma.js/src/renderers/sigma.renderers.webgl.js",
    "vendors/sigma.js/src/renderers/sigma.renderers.svg.js",
    "vendors/sigma.js/src/renderers/sigma.renderers.def.js",
    "vendors/sigma.js/src/renderers/webgl/sigma.webgl.nodes.def.js",
    "vendors/sigma.js/src/renderers/webgl/sigma.webgl.nodes.fast.js",
    "vendors/sigma.js/src/renderers/webgl/sigma.webgl.edges.def.js",
    "vendors/sigma.js/src/renderers/webgl/sigma.webgl.edges.fast.js",
    "vendors/sigma.js/src/renderers/webgl/sigma.webgl.edges.arrow.js",
    "vendors/sigma.js/src/renderers/canvas/sigma.canvas.labels.def.js",
    "vendors/sigma.js/src/renderers/canvas/sigma.canvas.hovers.def.js",
    "vendors/sigma.js/src/renderers/canvas/sigma.canvas.nodes.def.js",
    "vendors/sigma.js/src/renderers/canvas/sigma.canvas.edges.def.js",
    "vendors/sigma.js/src/renderers/canvas/sigma.canvas.edges.curve.js",
    "vendors/sigma.js/src/renderers/canvas/sigma.canvas.edges.arrow.js",
    "vendors/sigma.js/src/renderers/canvas/sigma.canvas.edges.curvedArrow.js",
    "vendors/sigma.js/src/renderers/canvas/sigma.canvas.edgehovers.def.js",
    "vendors/sigma.js/src/renderers/canvas/sigma.canvas.edgehovers.curve.js",
    "vendors/sigma.js/src/renderers/canvas/sigma.canvas.edgehovers.arrow.js",
    "vendors/sigma.js/src/renderers/canvas/sigma.canvas.edgehovers.curvedArrow.js",
    "vendors/sigma.js/src/renderers/canvas/sigma.canvas.extremities.def.js",
    "vendors/sigma.js/src/renderers/svg/sigma.svg.utils.js",
    "vendors/sigma.js/src/renderers/svg/sigma.svg.nodes.def.js",
    "vendors/sigma.js/src/renderers/svg/sigma.svg.edges.def.js",
    "vendors/sigma.js/src/renderers/svg/sigma.svg.edges.curve.js",
    "vendors/sigma.js/src/renderers/svg/sigma.svg.labels.def.js",
    "vendors/sigma.js/src/renderers/svg/sigma.svg.hovers.def.js",
    "vendors/sigma.js/src/middlewares/sigma.middlewares.rescale.js",
    "vendors/sigma.js/src/middlewares/sigma.middlewares.copy.js",
    "vendors/sigma.js/src/misc/sigma.misc.animation.js",
    "vendors/sigma.js/src/misc/sigma.misc.bindEvents.js",
    "vendors/sigma.js/src/misc/sigma.misc.bindDOMEvents.js",
    "vendors/sigma.js/src/misc/sigma.misc.drawHovers.js",
    "vendors/sigma.js/plugins/sigma.renderers.parallelEdges/utils.js",
    "vendors/sigma.js/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.curve.js",
    "vendors/sigma.js/plugins/sigma.renderers.parallelEdges/sigma.canvas.edges.curvedArrow.js",
    "vendors/sigma.js/plugins/sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curve.js",
    "vendors/sigma.js/plugins/sigma.renderers.parallelEdges/sigma.canvas.edgehovers.curvedArrow.js",
    "vendors/sigma.js/plugins/sigma.renderers.edgeLabels/settings.js",
    "vendors/sigma.js/plugins/sigma.renderers.edgeLabels/sigma.canvas.edges.labels.def.js",
    "vendors/sigma.js/plugins/sigma.renderers.edgeLabels/sigma.canvas.edges.labels.curve.js",
    "vendors/sigma.js/plugins/sigma.renderers.edgeLabels/sigma.canvas.edges.labels.curvedArrow.js",
    "vendors/sigma.js/plugins/sigma.plugins.animate/sigma.plugins.animate.js",
    "vendors/sigma.js/plugins/sigma.plugins.dragNodes/sigma.plugins.dragNodes.js",
    "vendors/sigma.js/plugins/sigma.layout.dagre/dagre.js",
    "vendors/sigma.js/plugins/sigma.layout.dagre/sigma.layout.dagre.js",
    
    "vendors/sigma.js/custom/sigma.canvas.nodes.js",
    "vendors/sigma.js/custom/sigma.canvas.labels.js",
    "vendors/sigma.js/custom/sigma.canvas.hovers.js",
    "vendors/sigma.js/custom/sigma.canvas.edges.arrow.js",
    "vendors/sigma.js/custom/sigma.canvas.edges.curvedArrow.js",
    "vendors/sigma.js/custom/sigma.canvas.edges.labels.curvedArrow.js",
    "vendors/sigma.js/custom/sigma.canvas.edges.labels.js",
    
    //"vendors/sigma.js/plugins/sigma.exporters.svg/sigma.exporters.svg.js",
    //"vendors/sigma.js/gist/sigma.image.js",
  ],
  baseURL: null,
  isLoading: false,
  load: function (callback) {
    if (this.isLoading === true) {
      return this.wait(callback)
    }
    
    if (this.baseURL === null) {
      this.isLoading = true
      let helperURL = $('script[src$="/SigmaJSHelper.js"]').attr('src')
      this.baseURL = helperURL.slice(0, helperURL.indexOf('/helpers/') + 1)
      
      let loop = (i) => {
        if (i < this.loadList.length) {
          let scriptURL = this.baseURL + this.loadList[i]
          //console.log(scriptURL)
          $.getScript(scriptURL, () => {
            i++
            loop(i)
          })
        }
        else {
          this.isLoading = false
          if (typeof(callback) === 'function') {
            callback()
          }
        }
      }
      loop(0)
    }
    else {
      if (typeof(callback) === 'function') {
        callback()
      }
    }
  },
  wait: function (callback) {
    setTimeout(() => {
      if (this.isLoading === true) {
        this.wait(callback)
      }
      else {
        callback()
      }
    }, 1000)
  },
  enableDrag: function (s) {
    //var dragListener = sigma.plugins.dragNodes(ss, ss.renderers[0]);
    sigma.plugins.dragNodes(s, s.renderers[0])
    return this
  },
  startLayoutDagre: function (s) {
    var config = {
      directed: true,
      rankdir: 'BT'
    };
    sigma.layouts.dagre.start(s, config)
    sigma.layouts.dagre.start(s)
    return this
  },
  draw: function (data, container, callback) {
    //console.log(dataAAA)
    //data = JSON.parse(JSON.stringify(data))
    
    this.load(() => {
      //console.log(data)
      //let data = dataAAA
      if (Array.isArray(data) === false 
              || data.length === 0) {
        return
      }
      
      //console.log(data)
      //console.log($(container).prop('className'))
      if ($(container).hasClass('sigma-inited')) {
        $(container).html('')
      }
      
      let g = this.loadGraph(data)
      //console.log(g)
      //return
      let s = new sigma({
          graph: g,
          renderer: {
            container: container,
            type: 'canvas',
            //type: 'svg',
          },
          settings: {
            minArrowSize: 10,
            minNodeSize: 20,
            maxNodeSize: 20,
            //minEdgeSize: 2,
            maxEdgeSize: 5,
            //labelSize: "proportional",
            doubleClickEnabled: false,
            //defaultLabelAlignment: 'center',
            sideMargin: 20,
          }
        });
      //this.startLayout
      
      this.enableDrag(s)
      this.startLayoutDagre(s)
      // 把container加上
      $(container).addClass('sigma-inited')
      
      if (typeof(callback) === 'function') {
        console.log(s)
        SSS = s
        callback(s)
      }
      
    })
  },
  loadGraph: function (data) {
    let g = {
        nodes: [],
        edges: [],
    }
    
    if (Array.isArray(data)) {
      g.nodes = this.parseNodes(data)
      
      data = this.normalizeSize(data)
      g.edges = this.parseEdges(data)
    }
    
    return g
  },
  minSize: 2,
  maxSize: 20,
  normalizeSize: function (data) {
    let minSizeTemp
    let maxSizeTemp
    let sizeDelta = this.maxSize - this.minSize
    if (Array.isArray(data)) {
      data.forEach(edge => {
        let size = edge.edgeWeight
        if (minSizeTemp === undefined || size < minSizeTemp) {
          minSizeTemp = size
        }
        if (maxSizeTemp === undefined || size > maxSizeTemp) {
          maxSizeTemp = size
        }
      })
      let tempSizeDelta = maxSizeTemp - minSizeTemp
      data.forEach(edge => {
        let size = edge.edgeWeight
        size = Math.round(this.minSize + ( (size - this.minSize) / tempSizeDelta ) * sizeDelta)
        edge.edgeWeight = size
      })
    }
    return data
  },
  parseEdges: function (data) {
    let edgesArray = []
    let idCounter = 0
    let overlapEdgesCounter = {}
    let interactionEdgesCounter = {}
    
    if (Array.isArray(data)) {
      data.forEach(edge => {
        let source = this.nodesMap[edge.source].id
        let target = this.nodesMap[edge.target].id
        let size = edge.edgeWeight
        let edgeLabel = edge.edgeLabel
        
        let key = [source,target].join('-')
        let keySort = [source,target].sort().join('-')
        
        // -----------------------
        
        let count = 1
        let type = 'arrow'
        if (source === target) {
          type = 'curvedArrow'
        }
        else if (typeof(interactionEdgesCounter[keySort]) !== 'undefined') {
          type = 'curvedArrow'
          interactionEdgesCounter[keySort].forEach(edgeId => {
            edgesArray[edgeId].type = 'curvedArrow'
          })
        }
        else if (typeof(overlapEdgesCounter[key]) !== 'undefined') {
          type = 'curvedArrow'
          overlapEdgesCounter[key].forEach(edgeId => {
            edgesArray[edgeId].type = 'curvedArrow'
          })
          count = overlapEdgesCounter[key].length + 1
        }
        
        // -----------------
        if (typeof(overlapEdgesCounter[key]) === 'undefined') {
          overlapEdgesCounter[key] = [idCounter]
        }
        else {
          overlapEdgesCounter[key].push(idCounter)
        }
        if (typeof(interactionEdgesCounter[keySort]) === 'undefined') {
          interactionEdgesCounter[keySort] = [idCounter]
        }
        else {
          interactionEdgesCounter[keySort].push(idCounter)
        }
        
        edgesArray.push(this.buildEdge(idCounter, edgeLabel, source, target, size, type, count))
        
        // -----------------
        idCounter++
      })
    }
    
    return edgesArray
  },
  buildEdge: function (edgeId, edgeLabel, sourceNodeId, targetNodeId, size, type, count) {
    return {
      id: 'edge' + edgeId,
      label: edgeLabel,
      source: sourceNodeId,
      target: targetNodeId,
      size: size,
      color: '#ccc',
      //type: 'curvedArrow',
      type: type,
      count: count,
      //minArrowSize: 200
    }
  },
  nodesMap: {},
  parseNodes: function (data) {
    let nodesMap = {}
    let idCounter = 0
    if (Array.isArray(data)) {
      data.forEach(edge => {
        let source = edge.source
        if (typeof(nodesMap[source]) === 'undefined') {
          nodesMap[source] = this.buildNode(idCounter, source)
          idCounter++
        }
        
        let target = edge.target
        if (typeof(nodesMap[target]) === 'undefined') {
          nodesMap[target] = this.buildNode(idCounter, target)
          idCounter++
        }
      })
    }
    
    this.nodesMap = nodesMap
    let nodesArray = []
    for (let key in nodesMap) {
      nodesArray.push(nodesMap[key])
    }
    return nodesArray
  },
  buildNode: function (i, label) {
    return {
        id: 'node_' + i,
        label: label,
        //x: (0.3 + 0.5 * i),
        //y: (0.3 + 0.5 * i),
        //x: Math.cos(2 * i * Math.PI / n),
        //y: Math.sin(2 * i * Math.PI / n),
        //size: 30 * (i + 1),
        size: 30,
        color: '#cccccc'
        //color: '#66' + ((i + 1) * 3)
    }
  }
}
window.SigmaJSHelper = SigmaJSHelper