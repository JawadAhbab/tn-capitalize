import { capitalize } from '../src/index'

export const htmlExample = (strings: string[]) => {
  let html = '<table style="font-family:consolas">'
  html += `
    <tr style="text-align:center;color:#aabbcc">
      <td>String</td>
      <td>Using CSS</td>
      <td>Using tn-capitalize</td>
    </tr>
  `
  strings.forEach((string) => {
    html += `
      <tr style="color:wheat;">
        <td>${string}</td>
        <td style="text-transform:capitalize">${string}</td>
        <td>${capitalize(string)}</td>
      </tr>
    `
  })
  html += '</table>'

  let css = `
    table {border-collapse:collapse;}
    table tr td {border:1px solid white;padding:5px 15px;}
  `

  document.querySelector('body').innerHTML = html
  const style = document.createElement('style')
  style.innerHTML = css
  document.querySelector('head').appendChild(style)
}
