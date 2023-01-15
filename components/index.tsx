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
    <Highlight className='jsx'>
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

const ButtonsComponent = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Button label='Download' primaryInverted bordernone />
        <Button icon='DownloadSimple' primary label='Download' />
        <Button icon='Newspaper' label='News' secondary />
        <Button icon='Alarm' label='Schedule' accent />
        <Button icon='Archive' label='Archive' success />
        <Button icon='Trash' label='Delete' danger />
        <Button icon='Trash' label='Delete' warning />
      </div>
      <Text level={4}>Disabled</Text>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Button icon='DownloadSimple' primary label='Download' disabled />
        <Button icon='Newspaper' label='News' secondary disabled />
        <Button icon='Alarm' label='Schedule' accent disabled />
        <Button icon='Archive' label='Archive' success disabled />
        <Button icon='Trash' label='Delete' danger disabled />
        <Button icon='Trash' label='Delete' warning disabled />
      </div>
      <Text level={4}>Loading</Text>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Button icon='DownloadSimple' primary label='Download' isLoading />
        <Button icon='Newspaper' label='News' secondary isLoading />
        <Button icon='Alarm' label='Schedule' accent isLoading />
        <Button icon='Archive' label='Archive' success isLoading />
        <Button icon='Trash' label='Delete' danger isLoading />
        <Button icon='Trash' label='Delete' warning isLoading />
      </div>
      <Text level={4}>Background transparent with inverted colors</Text>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Button icon='DownloadSimple' primaryInverted label='Download' />
        <Button icon='Newspaper' label='News' secondaryInverted />
        <Button icon='Alarm' label='Schedule' accentInverted />
        <Button icon='Archive' label='Archive' successInverted />
        <Button icon='Trash' label='Delete' dangerInverted />
        <Button icon='Trash' label='Delete' warningInverted />
      </div>
      <Text level={4}>Background transparent with inverted colors and border none</Text>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Button icon='DownloadSimple' primaryInverted bordernone label='Download' />
        <Button icon='Newspaper' label='News' secondaryInverted bordernone />
        <Button icon='Alarm' label='Schedule' accentInverted bordernone />
        <Button icon='Archive' label='Archive' successInverted bordernone />
        <Button icon='Trash' label='Delete' dangerInverted bordernone />
        <Button icon='Trash' label='Delete' warningInverted bordernone />
      </div>
    </>
  )
}


export { TabTypography, TabTypographyCode, ButtonsComponent }