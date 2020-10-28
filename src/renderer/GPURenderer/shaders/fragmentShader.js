export const fragmentShader = () => {
  return `
    uniform vec3 baseColor;
    uniform sampler2D texture;

    varying vec3 targetColor;
    varying float targetAlpha;

    void main() {
      gl_FragColor = vec4(baseColor * targetColor, targetAlpha);
      gl_FragColor = gl_FragColor * texture2D(texture, gl_PointCoord);
    }
`;
};