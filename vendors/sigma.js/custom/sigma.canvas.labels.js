if (typeof(labelWidth) === 'undefined') {
  labelWidth = {}
}

sigma.canvas.labels.def = function(node, context, settings) {
  if (typeof(labelWidth[node.label]) === 'undefined') {
    labelWidth[node.label] = context.measureText(node.label).width
  }
  
  var fontSize,
      prefix = settings('prefix') || '',
      size = node[prefix + 'size'];

  if (size < settings('labelThreshold'))
    return;

  if (!node.label || typeof node.label !== 'string')
    return;

  fontSize = (settings('labelSize') === 'fixed') ?
    settings('defaultLabelSize') :
    settings('labelSizeRatio') * size;

  context.font = (settings('fontStyle') ? settings('fontStyle') + ' ' : '') +
    fontSize + 'px ' + settings('font');
  context.fillStyle = (settings('labelColor') === 'node') ?
    (node.color || settings('defaultNodeColor')) :
    settings('defaultLabelColor');
  /*
  if (node.label === 'n11') {
    console.log([
      settings('labelSizeRatio'),
      fontSize,
      node.label.length,
      context.measureText(node.label).width
    ])
  }
  */
  let label = node.label
  let x = Math.round(node[prefix + 'x'] 
          - ( settings('labelSizeRatio') * (labelWidth[node.label] / 2)) )
  let y = Math.round(node[prefix + 'y'] + fontSize / 3)
 
  context.fillText(
    label,
    x,
    y
  );
  

};