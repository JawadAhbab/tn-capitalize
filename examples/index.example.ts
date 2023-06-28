import { capitalize } from '../src/index'
import { htmlExample } from './html.example'

const strings = [
  'lorem_ipsum',
  'lorem1ipsum',
  '_lorem ipsum',
  '1lorem ipsum',
  'lorem ipsum',
  'lorem-ipsum',
  'lorem~ipsum',
  'lorem$ipsum',
]

htmlExample(strings)

strings.forEach((string) => {
  console.log(string, ' => ', capitalize(string))
})
