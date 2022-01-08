import './index.scss';

class HelloWebpackButton 
{

  handleClick(parent) 
  {
    const p = document.createElement('p');
    p.innerHTML = 'Hello, Webpack';
    p.classList.add('hello-webpack-text');
    parent.appendChild(p);
  }

  render() 
  {
    const button = document.createElement('button');
    const body = document.querySelector('body');
    button.innerHTML = 'Hello, Webpack';
    button.classList.add('hello-webpack-button');
    button.onclick = () => this.handleClick(body);
    body.appendChild(button);
  }
} 

export default HelloWebpackButton