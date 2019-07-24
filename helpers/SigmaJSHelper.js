let SigmaJSHelper = {
  demo: function () {
    var i,
            s,
            N = 10,
            E = 1,
            L = 3,
            g = {
              nodes: [],
              edges: [],
              minArrowSize: 300
            };
    // Generate a random graph:
    for (i = 0; i < N; i++)
      g.nodes.push({
        id: 'n' + i,
        label: 'Node ' + i,
        //x: (0.3 + 0.5 * i),
        //y: (0.3 + 0.5 * i),
        x: 10 * Math.cos(2 * i * Math.PI / N),
        y: 10 * Math.sin(2 * i * Math.PI / N),
        size: 30 * (i + 1),
        color: '#66' + ((i + 1) * 3)
      });
    for (i = 0; i < E; i++)
      g.edges.push({
        id: 'e' + i,
        label: 'Edge ' + i,
        source: 'n0',
        target: 'n1',
        size: 2,
        color: '#ccc',
        type: 'curvedArrow',
        count: i,
        minArrowSize: 300
      });

    for (i = 0; i < E; i++)
      g.edges.push({
        id: 'ee' + i,
        label: 'Edge ' + i,
        source: 'n1',
        target: 'n0',
        size: 2,
        color: '#ccc',
        type: 'curvedArrow',
        count: i,
        minArrowSize: 300
      });
    for (i = 0; i < L; i++)
      g.edges.push({
        id: 'e_loop' + i,
        label: 'Edge_loop ' + i,
        source: 'n0',
        target: 'n0',
        size: 1,
        color: '#ccc',
        type: 'curvedArrow',
        count: i
      });
// Instantiate sigma:
    s = new sigma({
      graph: g,
      renderer: {
        container: document.getElementById('graph-container'),
        type: 'canvas',
      },
      settings: {
        minArrowSize: 10,
        minNodeSize: 8,
        maxNodeSize: 20,
        maxEdgeSize: 10,
        doubleClickEnabled: false,
        defaultLabelAlignment: 'center',
      }
    });
    
    // Start the ForceAtlas2 algorithm:
    //setTimeout(() => {
      s.startForceAtlas2({
        worker: true, 
        //adjustSizes: true,
        barnesHutOptimize: false,
        slowDown: 0.5,
        strongGravityMode: true,
        edgeWeightInfluence: 1,
        //scalingRatio: 2,
        outboundAttractionDistribution: true,
        linLogMode: true,
      });
      setTimeout(() => {
        s.stopForceAtlas2()
      }, 1000 * Math.sqrt(N))
    //}, 3000)
    //s.startForceAtlas2({worker: true, barnesHutOptimize: false});
  },
  draw: function (data, container) {
    if (typeof(container.attr) === 'function') {
      container = container[0]
    }
    
    // -------------------
    
    
    
    // -------------------
    var i,
            s,
            N = 2,
            E = 1,
            L = 3,
            g = {
              nodes: [],
              edges: [],
              minArrowSize: 300
            };
// Generate a random graph:
    for (i = 0; i < N; i++)
      g.nodes.push({
        id: 'n' + i,
        label: 'Node ' + i,
        x: (0.3 + 0.5 * i),
        y: (0.3 + 0.5 * i),
        size: 30 * (i + 1),
        color: '#66' + ((i + 1) * 3)
      });
    for (i = 0; i < E; i++)
      g.edges.push({
        id: 'e' + i,
        label: 'Edge ' + i,
        source: 'n0',
        target: 'n1',
        size: 2,
        color: '#ccc',
        type: 'curvedArrow',
        count: i,
        minArrowSize: 300
      });

    for (i = 0; i < E; i++)
      g.edges.push({
        id: 'ee' + i,
        label: 'Edge ' + i,
        source: 'n1',
        target: 'n0',
        size: 2,
        color: '#ccc',
        type: 'curvedArrow',
        count: i,
        minArrowSize: 300
      });
    for (i = 0; i < L; i++)
      g.edges.push({
        id: 'e_loop' + i,
        label: 'Edge_loop ' + i,
        source: 'n0',
        target: 'n0',
        size: 1,
        color: '#ccc',
        type: 'curvedArrow',
        count: i
      });
    // Instantiate sigma:
    s = new sigma({
      graph: g,
      renderer: {
        container: container,
        type: 'canvas',
      },
      settings: {
        minArrowSize: 10
      }
    });
  }
}
window.SigmaJSHelper = SigmaJSHelper