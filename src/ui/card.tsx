import { card } from 'styled-system/recipes'
import { createStyleContext } from '../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(card)

const Card = withProvider('div', 'root')
const CardBody = withContext('div', 'body')
const CardDescription = withContext('p', 'description')
const CardFooter = withContext('div', 'footer')
const CardHeader = withContext('div', 'header')
const CardTitle = withContext('h3', 'title')

const Root = Card
const Body = CardBody
const Description = CardDescription
const Footer = CardFooter
const Header = CardHeader
const Title = CardTitle

export {
  Body,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Description,
  Footer,
  Header,
  Root,
  Title,
}
