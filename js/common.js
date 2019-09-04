function initFontSize() {
  const baseFontSize = 24;
  const defaultPixel = 1; //默认物理密度
  const defaultWidth = 1920; //默认的设备宽度px值
  const defaultHeight = 1080; //默认的设备高度px值
  const defaultWidthdp = defaultWidth / defaultPixel; //默认设备的宽度dp值
  const defaultHeightdp = defaultHeight / defaultPixel; //默认设备的高度dp值

  const clientHeight = document.body.clientHeight;
  const clientWidth = document.body.clientWidth;
  const scale = Math.min(
    clientHeight / defaultHeightdp,
    clientWidth / defaultWidthdp
  ); //自适应比例

  const size = Math.round(baseFontSize * scale);
  return size;
}
