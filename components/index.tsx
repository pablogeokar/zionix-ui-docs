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

function ButtonsComponent() {
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

function ButtonsComponentCode() {
  return (
    <Highlight className='jsx'>
      <pre>
        {`
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
        `}
      </pre>
    </Highlight>
  )
}

function IconComponent() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', width: '100%' }}>
      <Icon iconName="Alarm" size={48} />
      <Icon iconName="Alien" size={48} />
      <Icon iconName="Dog" size={48} />
      <Icon iconName="House" size={48} />
      <Icon iconName="Pencil" size={48} />
      <Icon iconName="User" size={48} />
      <Icon iconName="Users" size={48} />

      <Icon iconName="Alarm" weight="duotone" />
      <Icon iconName="Alien" weight="duotone" />
      <Icon iconName="Dog" weight="duotone" />
      <Icon iconName="House" weight="duotone" />
      <Icon iconName="Pencil" weight="duotone" />
      <Icon iconName="User" weight="duotone" />
      <Icon iconName="Users" weight="duotone" />

      <Icon iconName="Alarm" weight="bold" />
      <Icon iconName="Alien" weight="bold" />
      <Icon iconName="Dog" weight="bold" />
      <Icon iconName="House" weight="bold" />
      <Icon iconName="Pencil" weight="bold" />
      <Icon iconName="User" weight="bold" />
      <Icon iconName="Users" weight="bold" />
      <Text>and more...</Text>
    </div>
  )
}

function IconComponentCode() {
  return (
    <Highlight className='jsx'>
      <pre>
        {`
        <Icon iconName="Alarm" size={48} />
        <Icon iconName="Alien" size={48} />
        <Icon iconName="Dog" size={48} />
        <Icon iconName="House" size={48} />
        <Icon iconName="Pencil" size={48} />
        <Icon iconName="User" size={48} />
        <Icon iconName="Users" size={48} />
  
        <Icon iconName="Alarm" weight="duotone" />
        <Icon iconName="Alien" weight="duotone" />
        <Icon iconName="Dog" weight="duotone" />
        <Icon iconName="House" weight="duotone" />
        <Icon iconName="Pencil" weight="duotone" />
        <Icon iconName="User" weight="duotone" />
        <Icon iconName="Users" weight="duotone" />
  
        <Icon iconName="Alarm" weight="bold" />
        <Icon iconName="Alien" weight="bold" />
        <Icon iconName="Dog" weight="bold" />
        <Icon iconName="House" weight="bold" />
        <Icon iconName="Pencil" weight="bold" />
        <Icon iconName="User" weight="bold" />
        <Icon iconName="Users" weight="bold" />
        `}
      </pre>
    </Highlight>
  )
}

function MarkerComponent() {
  return (
    <div style={{ display: 'flex', gap: '1.6rem', margin: '1.6rem 0' }}>
      <Marker />
      <Marker primary />
      <Marker secondary />
      <Marker accent />
      <Marker success />
      <Marker warning />
      <Marker error />
      <Marker color='#8e44ad' />
      <Marker color='var(--gray)' />
    </div>
  )
}
function MarkerComponentCode() {
  return (
    <Highlight className='jsx'>
      <pre>
        {`
        <Marker />
        <Marker primary />
        <Marker secondary />
        <Marker accent />
        <Marker success />
        <Marker warning />
        <Marker error />
        <Marker color='#8e44ad' />
        <Marker color='var(--gray)' />
        `}
      </pre>
    </Highlight>
  )
}

function TabsComponentCode() {
  return (
    <Highlight className='jsx'>
      <pre>
        {`
        <Tabs tabs={[
          { icon: 'Monitor', label: 'Design', component: (<Text level={1}>Content Tab #1</Text>) },
          { icon: 'Code', label: 'Code', component: (<Text level={1}>Content Tab #2</Text>) },
          { icon: 'Alien', label: 'Aliens', component: (<Text level={1}>Content Tab #3</Text>) },
          { icon: 'Archive', label: 'Archive', component: (<Text level={1}>Content Tab #4</Text>) }]} />
        `}
      </pre>
    </Highlight>
  )
}

function InputComponent() {
  return (
    <div style={{ maxWidth: '450px' }}>
      <Input label="Name" width={150} placeholder='full name here' />
    </div>
  )
}
function InputComponentCode() {
  return (
    <Highlight className='jsx'>
      <pre>
        {`
         <Input label="Name" width={150} placeholder='full name here' />
        `}
      </pre>
    </Highlight>
  )
}

function FormComponent() {
  return (
    <Form.Container method='post' maxWidth='650px'>
      <Text level={2} separator>
        <Icon iconName='UserPlus' size={36} /> New user
      </Text>
      <Form.Row>
        <Input label='Name:' />
        <Input label='Lastname:' />
      </Form.Row>
      <Form.Row>
        <Input label='Password:' type='password' />
        <Input label='Confirm password:' type='password' />
      </Form.Row>
      <Input label='Email:' />
      <Form.Row end>
        <Button type='reset' label='Clear form' />
        <Button icon='Check' label='Save' success onClick={() => alert('Hello World!')} />
      </Form.Row>
    </Form.Container>
  )
}
function FormComponentCode() {
  return (
    <Highlight className='jsx'>
      <pre>
        {`
        <Form.Container method='post' maxWidth='650px'>
        <Text level={2} separator>
          <Icon iconName='UserPlus' size={36} /> New user
        </Text>
        <Form.Row>
          <Input label='Name:' />
          <Input label='Lastname:' />
        </Form.Row>
        <Form.Row>
          <Input label='Password:' type='password' />
          <Input label='Confirm password:' type='password' />
        </Form.Row>
        <Input label='Email:' />
        <Form.Row end>
          <Button type='reset' label='Clear form' />
          <Button icon='Check' label='Save' success onClick={() => alert('Hello World!')} />
        </Form.Row>
      </Form.Container>
        `}
      </pre>
    </Highlight>
  )
}

function CardComponent() {
  return (
    <Card.Container maxWidth='650px'>
      <Text level={1} secondary>Hello, </Text>
      <Card.Row>
        <Input label="Name" />
        <Input label="Last name" />
      </Card.Row>

      <Input label="E-mail" type='email' />

      <Card.Row end>
        <Button primaryInverted label="Join now" icon='AddressBook' />
        <Button primary label='Sign In' icon='SignIn' />
      </Card.Row>

    </Card.Container >
  )
}
function CardComponentCode() {
  return (
    <Highlight className='jsx'>
      <pre>
        {`
        <Card.Container maxWidth='650px'>

        <Text level={1} secondary>Hello, </Text>
        
        <Card.Row>
          <Input label="Name" />
          <Input label="Last name" />
        </Card.Row>
  
        <Input label="E-mail" type='email' />
  
        <Card.Row end>
          <Button primaryInverted label="Join now" icon='AddressBook' />
          <Button primary label='Sign In' icon='SignIn' />
        </Card.Row>
  
      </Card.Container >
        `}
      </pre>
    </Highlight>
  )
}


export {
  TabTypography,
  TabTypographyCode,
  ButtonsComponent,
  ButtonsComponentCode,
  IconComponent,
  IconComponentCode,
  MarkerComponent,
  MarkerComponentCode,
  TabsComponentCode,
  InputComponent,
  InputComponentCode,
  FormComponent,
  FormComponentCode,
  CardComponent,
  CardComponentCode
}