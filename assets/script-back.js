let vertexShaderText = 
  [
      'precision mediump float;', 
      '',
      'attribute vec2 vertPosition;',
      'attribute vec3 vertColor;',
      'varying vec3 fragColor;',
      '',
      'void main()',
      '{',
      'fragColor = vertColor;',
      'gl_Position = vec4(vertPosition, 0.0, 1.0);',
      '}'
  ].join('\n');
  
let fragmentShaderText = 
  [
    'precision mediump float;', 
    '',
    'varying vec3 fragColor;',
    'void main()',
    '{',
    'gl_FragColor = vec4(fragColor, 1.0);',
    '}'
  ].join('\n');


const test = function(){
  const canvas = document.querySelector("canvas");
  const gl = canvas.getContext('webgl');
  
  // canvas.width = window.innerWidth;
  // canvas.heigh = window.innerHeigh;
  // 
  // gl.viewport(0, 0, window.innerWidth, window.innerHeigh);
  console.log("it's working");
  
  gl.clearColor(0.75, 0.85, 0.8, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  
  // Create shaders
  
  let vertexShader = gl.createShader(gl.VERTEX_SHADER);
  let fragmetShader = gl.createShader(gl.FRAGMENT_SHADER);
  
  
  gl.shaderSource(vertexShader, vertexShaderText);
  gl.shaderSource(fragmetShader, fragmentShaderText);
  
  gl.compileShader(vertexShader);
  if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)){
    console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
    return;
  }
  gl.compileShader(fragmetShader);
  if(!gl.getShaderParameter(fragmetShader, gl.COMPILE_STATUS)){
    console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(fragmetShader));
    return;
  }
  
  let program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmetShader);
  gl.linkProgram(program);
  if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
    console.error('ERROR linking program!', gl.getProgramInfoLog(program));
    return;
  }
  
  gl.validateProgram(program);
  if(!gl.getProgramParameter(program, gl.VALIDATE_STATUS)){
    console.error('ERROR validating program', gl.getProgramInfoLog(program));
    return;
  }
  
  // 
  // 
  // 
  let triangleVertices = 
  [ // X, Y         R,G,B
      0.0,  0.5,    1.0, 1.0, 0.0, 
     -0.5, -0.5,    0.7, 0.0, 1.0,
      0.5,  -0.5,    0.1, 1.0, 0.6
  ];
  
  let triangleVertexBufferObject = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
  
  let positionAttributeLocation = gl.getAttribLocation(program, 'vertPosition');
  let colorAttributeLocation = gl.getAttribLocation(program, 'vertColor');
  gl.vertexAttribPointer(
    positionAttributeLocation, //attribute location
    2, // number of elements per attribute`
    gl.FLOAT, // type of elements
    gl.FALSE,
    5 * Float32Array.BYTES_PER_ELEMENT, // size of individual vertex
    0 // offset from the beginning of a single vertex to this getAttributeLocation
  );
  gl.vertexAttribPointer(
    colorAttributeLocation, //attribute location
    3, // number of elements per attribute`
    gl.FLOAT, // type of elements
    gl.FALSE,
    5 * Float32Array.BYTES_PER_ELEMENT, // size of individual vertex
    2 * Float32Array.BYTES_PER_ELEMENT // offset from the beginning of a single vertex to this getAttributeLocation
  );
  
  gl.enableVertexAttribArray(positionAttributeLocation); 
  gl.enableVertexAttribArray(colorAttributeLocation); 
  
  //
  // Main render loop
  // 
  gl.useProgram(program);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  
  
};

test();


// function vertexShader(vertPosition, vertColor){
//   return {
//     fragColor: vertColor, 
//     gl_Position: [vertPosition.x, vertPosition.y, 0.0, 1.0],
//   };
// }