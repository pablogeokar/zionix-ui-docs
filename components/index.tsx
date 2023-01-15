import Highlight from 'react-highlight'
import { Form, Button, Icon, Input, useThemeContext, Text, Card, Marker, Hr, Tabs } from "@zionix/ui";

function TabTypography() {
  return (
    <>
      <Text level={1}>Typography h1</Text>
      <Text level={1} primary>Typography h1</Text>
      <Text level={2} secondary>Typography h2</Text>
      <Text level={3} fontWeight={600}>Typography h3</Text>
      <Text level={4} accent>Typography h4</Text>
      <Text level={5}>Typography h5</Text>
      <Text level={6}>Typography h6</Text>
      <Text level={6} color='var(--black)'>Typography h6</Text>
      <Text secondary>Simple text with normal size</Text>
      <Text>Simple text with normal size</Text>
    </>
  )
}

function TabTypographyCode() {
  return (
    <Highlight>
      <pre >
        {`
        <Text level={1}>Typography h1</Text>
        <Text level={1} primary>Typography h1</Text>
        <Text level={2} secondary>Typography h2</Text>
        <Text level={3} fontWeight={600}>Typography h3</Text>
        <Text level={4} accent>Typography h4</Text>
        <Text level={5}>Typography h5</Text>
        <Text level={6}>Typography h6</Text>
        <Text level={6} color='var(--black)'>Typography h6</Text>
        <Text secondary>Simple text with normal size</Text>
        <Text>Simple text with normal size</Text>
        `}
      </pre>
    </Highlight>
  )
}


export { TabTypography, TabTypographyCode }