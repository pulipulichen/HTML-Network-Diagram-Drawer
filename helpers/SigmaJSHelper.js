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
    "vendors/sigma.js/plugins/sigma.layout.forceAtlas2/worker.js",
    "vendors/sigma.js/plugins/sigma.layout.forceAtlas2/supervisor.js",
    "vendors/sigma.js/plugins/sigma.layout.noverlap/sigma.layout.noverlap.js",
    
    "vendors/sigma.js/custom/sigma.canvas.nodes.js",
    "vendors/sigma.js/custom/sigma.canvas.labels.js",
    "vendors/sigma.js/custom/sigma.canvas.hovers.js",
    "vendors/sigma.js/custom/sigma.canvas.edges.arrow.js",
    "vendors/sigma.js/custom/sigma.canvas.edges.curvedArrow.js",
    "vendors/sigma.js/custom/sigma.canvas.edges.labels.curvedArrow.js",
    "vendors/sigma.js/custom/sigma.canvas.edges.labels.js",
    "vendors/sigma.js/custom/sigma.utils.angle.js"
    
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
    let dragListener = sigma.plugins.dragNodes(s, s.renderers[0])
    dragListener.bind('dragend', function(event) {
      s.cleanUp()
    });
    return this
  },
  startLayoutForceAtlas2: function (s) {
    s.startForceAtlas2({
      worker: true, 
      adjustSizes: true,
      barnesHutOptimize: false,
      slowDown: 0.1,
      strongGravityMode: true,
      edgeWeightInfluence: 1,
      scalingRatio: 2,
      outboundAttractionDistribution: true,
      linLogMode: true,
      autoRescale: true,
    });
    setTimeout(() => {
      s.stopForceAtlas2()
      console.log('stopForceAtlas2')
      //var dragListener = sigma.plugins.dragNodes(ss, ss.renderers[0]);
    }, this.nodesCount * this.edgesCount * 1000)
  },
  /**
   * https://github.com/dagrejs/dagre/wiki
   * @param {type} s
   * @returns {SigmaJSHelper}
   */
  startLayoutDagre: function (s) {
    var config = {
      directed: true,
      rankdir: 'BT',
      nodesep: 100,
      ranksep: 200,
      //acyclicer: 'greedy',
      ranker: 'longest-path'
      //rankdir: 'LR'
    };
    sigma.layouts.dagre.start(s, config)
    sigma.layouts.dagre.start(s)
    return this
  },
  startLayoutNoverlap: function (s) {
    let config = {
      nodeMargin: 3.0,
      //scaleNodes: 1.3,
      maxIterations: 1000,
      speed: 0.5,
      //easing: true,
      //duration: 3000
    };
    //ss.configNoverlap(config);

    // Configure the algorithm
    var listener = s.configNoverlap(config);

    // Bind all events:
    //listener.bind('stop', function (event) {
    //  console.log('noverlay stop')
    //});

    s.startNoverlap();
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
            maxEdgeSize: 2,
            labelSize: "proportional",  // 不做fixed
            doubleClickEnabled: false,
            //defaultLabelAlignment: 'center',
            sideMargin: 20,
          }
        });
      
      this.enableDrag(s)
      
      this.startLayoutDagre(s)
      //this.startLayoutForceAtlas2(s)
      //this.startLayoutNoverlap(s)
      
      // 把container加上
      $(container).addClass('sigma-inited')
      //container.append('' s.renderers[0].contexts["scene"].getSerializedSvg())
      let svg = s.renderers[0].contexts["scene"].getSvg()
      container.append(svg)
      s.getSerializedSvg = () => {
        s.cleanUp()
        return s.renderers[0].contexts["scene"].getSerializedSvg(true)
      }
      s.cleanUp = () => {
        this.cleanUp(svg)
      }
      
      $(container).find('.sigma-mouse:first').bind('mouseup', () => {
        s.cleanUp()
      })
      
      
      if (typeof(callback) === 'function') {
        //console.log(s)
        SSS = s
        callback(s)
      }
      
    })
  },
  cleanUp: function (svg) {
    let rect = $(svg).find('g > rect[fill="#FFFFFF"][stroke="none"][x="0"][y="0"]:last')
    if (rect.length > 0) {
      for (let i = 0; i < 10; i++) {
        rect.prev().remove()
      }
    }
    
    if (rect.prev().length === 0) {
      rect.remove()
    }
    else {
      setTimeout(() => {
        this.cleanUp(svg)
      }, 0)
    }
    
    //rect.prevAll().remove()
    //rect.remove()
    // 改用延遲法
    //let loop = () => {
      
    //}
    //loop()
    
    return this
  },
  loadGraph: function (data) {
    let g = {
        nodes: [],
        edges: [],
    }
    
    if (Array.isArray(data)) {
      data = this.mergeNodes(data)
      g.nodes = this.parseNodes(data)
      //console.log(g.nodes)
      //return
      data = this.normalizeSize(data)
      g.edges = this.parseEdges(data)
    }
    
    return g
  },
  minSize: 4,
  maxSize: 30,
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
    
    this.edgesCount = idCounter
    
    return edgesArray
  },
  buildEdge: function (edgeId, edgeLabel, sourceNodeId, targetNodeId, size, type, count) {
    return {
      id: 'edge' + edgeId,
      /**
       * @author Pulipuli Chen 20190727 先不要做Edge Label，不然會做不完
       */
      //label: edgeLabel,
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
  nodesCount: null,
  edgesCount: null,
  parseNodes: function (data) {
    let nodesMap = {}
    let idCounter = 0
    if (Array.isArray(data)) {
      data.forEach(edge => {
        let source = edge.source
        if (typeof(nodesMap[source]) === 'undefined') {
          //nodesMap[source] = this.buildNode(idCounter, source)
          nodesMap[source] = {
            label: source,
            id: idCounter
          }
          idCounter++
        }
        
        let target = edge.target
        if (typeof(nodesMap[target]) === 'undefined') {
          //nodesMap[target] = this.buildNode(idCounter, target)
          nodesMap[target] = {
            label: target,
            id: idCounter
          }
          idCounter++
        }
      })
    }
    
    this.nodesCount = idCounter
    
    let nodesArray = []
    for (let key in nodesMap) {
      let nodeInfo = nodesMap[key]
      let node = this.buildNode(nodeInfo.id, nodeInfo.label, this.nodesCount)
      nodesArray.push(node)
      this.nodesMap[key] = node
    }
    //this.nodesMap = nodesMap
    //console.log(this.nodesMap)
    return nodesArray
  },
  buildNode: function (i, label, n) {
    return {
        id: 'node_' + i,
        label: label,
        //x: (0.3 + 0.5 * i),
        //y: (0.3 + 0.5 * i),
        //x: Math.cos(2 * i * Math.PI / n),
        //y: Math.sin(2 * i * Math.PI / n),
        //size: 30 * (i + 1),
        size: 30,
        color: '#cccccc',
        //color: '#66' + ((i + 1) * 3)
        x: Math.cos(2 * i * Math.PI / n) * 100,
        y: Math.sin(2 * i * Math.PI / n) * 100,
    }
  },
  mergeNodes: function (data) {
    let mergeLabelsLengthLimitSort = 5
    let mergeLabelsLengthLimitHard = Math.round(mergeLabelsLengthLimitSort * 1.5)
    
    if (Array.isArray(data)) {
      let nodes = []
      // -------------------------
      // 找出每個node的target
      let nodesTarget = {}
      let nodesSource = {}
      data.forEach(edge => {
        if (nodes.indexOf(edge.source) === -1) {
          nodes.push(edge.source)
        }
        if (nodes.indexOf(edge.target) === -1) {
          nodes.push(edge.target)
        }
        
        let surfix = '_' + edge.edgeWeight + '_' + edge.edgeLabel
        
        // 先以source角度來看target
        if (Array.isArray(nodesTarget[edge.source]) === false) {
          nodesTarget[edge.source] = []
        } 
        if (nodesTarget[edge.source].indexOf(edge.target + surfix) === -1) {
          nodesTarget[edge.source].push(edge.target + surfix)
        }
        
        // 先以source角度來看target
        if (Array.isArray(nodesSource[edge.target]) === false) {
          nodesSource[edge.target] = []
        } 
        if (nodesSource[edge.target].indexOf(edge.source + surfix) === -1) {
          nodesSource[edge.target].push(edge.source + surfix)
        }
      })
      
      let overlapMap = {}
      let overlapCheck = {}
      nodes.forEach(node => {
        let targetList = ''
        if (Array.isArray(nodesTarget[node])) {
          targetList = nodesTarget[node].join('-')
        }
        let sourceList = ''
        if (Array.isArray(nodesSource[node])) {
          sourceList = nodesSource[node].join('-')
        }
        let key = sourceList + '|' + targetList
        if (Array.isArray(overlapMap[key]) === false) {
          overlapMap[key] = []
        }
        overlapMap[key].push(node)
        if (overlapMap[key].length > 1) {
          overlapCheck[key] = true
        }
      })
      
      // 需要合併這兩個
      for (let key in overlapCheck) {
        // 這是有問題的項目
        let mergeLabels = overlapMap[key].join(',')
        if (mergeLabels.length > mergeLabelsLengthLimitSort && mergeLabels.indexOf(',', mergeLabelsLengthLimitSort) > -1) {
          mergeLabels = mergeLabels.slice(0, mergeLabels.indexOf(',', mergeLabelsLengthLimitSort))
          
          if (mergeLabels.length > mergeLabelsLengthLimitHard) {
            mergeLabels = mergeLabels.slice(0, mergeLabelsLengthLimitHard)
          }
          mergeLabels = mergeLabels + '...'
        }
        
        mergeLabels = mergeLabels + ' (' + overlapMap[key].length + ')'
        
        
        // 整理搜尋條件
        let searchParts = key.split('|')
        let sourceSearch
        if (searchParts[0].length > 0) {
          sourceSearch = searchParts[0].split('_')
          sourceSearch[1] = parseInt(sourceSearch[1], 10)
        }
        let targetSearch
        if (searchParts[1].length > 0) {
          targetSearch = searchParts[1].split('_')
          targetSearch[1] = parseInt(targetSearch[1], 10)
        }
        //console.log(searchParts)
        //console.log(sourceSearch)
        //console.log(targetSearch)
        // 取代連線裡面的節點
        
        let isSourceReplaced = false
        let isTargetReplaced = false
        let removeIndex = []
        for (let i = 0; i < data.length; i++) {
          let source = data[i].source
          let target = data[i].target
          let edgeWeight = data[i].edgeWeight
          let edgeLabel = data[i].edgeLabel

          if (sourceSearch !== undefined
                  && overlapMap[key].indexOf(target) > -1
                  && source === sourceSearch[0]
                  && edgeWeight === sourceSearch[1]
                  && edgeLabel === sourceSearch[2]) {
            if (isTargetReplaced === false) {
              data[i].target = mergeLabels
              isTargetReplaced = true
            }
            else {
              removeIndex.push(i)
            }
          }

          if (targetSearch !== undefined
                  && overlapMap[key].indexOf(source) > -1
                  && target === targetSearch[0]
                  && edgeWeight === targetSearch[1]
                  && edgeLabel === targetSearch[2]) {
            if (isSourceReplaced === false) {
              data[i].source = mergeLabels
              isSourceReplaced = true
            }
            else {
              removeIndex.push(i)
            }
          }
        } // for (let i = 0; i < data.length; i++) {

        //console.log(removeIndex)
        data = data.filter((value, index) => {
          return (removeIndex.indexOf(index) === -1)
        })
      }
      
      //console.log(nodes)
      //console.log(nodesTarget)
      //console.log(nodesSource)
      //console.log(overlapMap)
      //console.log(overlapCheck)
      
      //console.log(data)
    }
    
    return data
  }
}
window.SigmaJSHelper = SigmaJSHelper