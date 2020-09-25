export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((item) =>{
  item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(event){
  const tooltipBox = criarTooltipBox(this);

  onMouseMove.tooltipBox = tooltipBox;
  this.addEventListener('mousemove', onMouseMove);

  onMouseLeave.element =  this;
  onMouseLeave.tooltipBox = tooltipBox;
  this.addEventListener('mouseleave', onMouseLeave);
}

const onMouseLeave = {
  handleEvent(){
    this.tooltipBox.remove();
    this.element.removeEventListener('mouseleave', onMouseLeave);
  }
}

const onMouseMove = {
  handleEvent(event){
    this.tooltipBox.style.top = event.pageY + 20 +'px';
    this.tooltipBox.style.left = event.pageX + 20 + 'px';
    this.element.removeEventListener('mousemove', onMouseMove);
  }
}

function criarTooltipBox(element){
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);
  return tooltipBox;
}

}