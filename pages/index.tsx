import pkg from '../package.json'
import styles from '../styles/zionix.module.css'
import {
  ButtonsComponent,
  ButtonsComponentCode,
  TabTypography,
  TabTypographyCode,
  IconComponent,
  IconComponentCode,
  MarkerComponent,
  MarkerComponentCode,
  TabsComponentCode,
  InputComponent,
  InputComponentCode
} from '../components'

import { Form, Button, Icon, Input, useThemeContext, Text, Card, Marker, Hr, Tabs } from "@zionix/ui";


export default function Home() {

  const theme = useThemeContext();

  return (
    <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2rem' }}>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '2px', alignItems: 'center', marginTop: '2rem' }}>
          <span className={styles['zionix']}>ZIONIX</span>
          <span className={styles.ui}>ui</span>
        </div>

        <Text style={{ margin: '4px', color: 'var(--lightGray)' }}>version:{pkg.dependencies["@zionix/ui"].substring(1, 10)}</Text>
      </div>
      <Hr />

      <Text level={1} fontWeight={800}>Typography</Text>
      <Tabs minHeight='600px' tabs={[
        { icon: 'Eye', label: 'design view', component: <TabTypography /> },
        { icon: 'Code', label: 'code view', component: <TabTypographyCode /> }
      ]} />

      <Hr />

      <Text level={1} fontWeight={800} >Buttons</Text>
      <Tabs minHeight='900px' tabs={[
        { icon: 'Eye', label: 'design view', component: <ButtonsComponent /> },
        { icon: 'Code', label: 'code view', component: <ButtonsComponentCode /> }
      ]} />

      <Hr />

      <Text level={1} fontWeight={800} >Icon</Text>
      <Tabs minHeight='200px' tabs={[
        { icon: 'Eye', label: 'design view', component: <IconComponent /> },
        { icon: 'Code', label: 'code view', component: <IconComponentCode /> }
      ]} />
      <Hr />

      <Text level={1} fontWeight={800} >Marker</Text>
      <Tabs minHeight='150px' tabs={[
        { icon: 'Eye', label: 'design view', component: <MarkerComponent /> },
        { icon: 'Code', label: 'code view', component: <MarkerComponentCode /> }
      ]} />
      <Hr />

      <Text level={1} fontWeight={800} >Tabs</Text>
      <Tabs tabs={[
        { icon: 'Monitor', label: 'Design', component: (<Text level={1}>Content Tab #1</Text>) },
        { icon: 'Code', label: 'Code', component: <TabsComponentCode /> },
        { icon: 'Alien', label: 'Aliens', component: (<Text level={1}>Content Tab #3</Text>) },
        { icon: 'Archive', label: 'Archive', component: (<Text level={1}>Content Tab #4</Text>) }]} />
      <Hr />

      <Text level={1} fontWeight={800} >Input</Text>
      <Tabs minHeight='200px' tabs={[
        { icon: 'Eye', label: 'design view', component: <InputComponent /> },
        { icon: 'Code', label: 'code view', component: <InputComponentCode /> }
      ]} />
      <Hr />

      <Text level={1} fontWeight={800}>Form</Text>
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
      <Hr />

      <Text level={1} fontWeight={800}>Card</Text>
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
      <Hr />

      <Text level={1} fontWeight={800} >css vars</Text>

      <Text>--accent: {theme.colors?.accent}; <Marker color='var(--accent)' /> </Text>
      <Text>--bg : {theme.colors?.body}; <Marker color='var(--bg)' /> </Text>
      <Text>--black: {theme.colors?.black}; <Marker color='var(--black)' /></Text>
      <Text>--danger: {theme.colors?.danger}; <Marker color='var(--danger)' /></Text>
      <Text>--gray: {theme.colors?.gray}; <Marker color='var(--gray)' /></Text>
      <Text>--lightGray: {theme.colors?.lightGray}; <Marker color='var(--lightGray)' /></Text>
      <Text>--primary: {theme.colors?.primary}; <Marker color='var(--primary)' />  </Text>
      <Text>--secondary: {theme.colors?.secondary}; <Marker color='var(--secondary)' /> </Text>
      <Text>--success: {theme.colors?.success}; <Marker color='var(--success)' /> </Text>
      <Text>--warning: {theme.colors?.warning}; <Marker color='var(--warning)' /> </Text>
      <Text>--white: {theme.colors?.white}; <Marker color='var(--white)' /> </Text>
      <br />
      <Text>--component-card--filter: {theme.components?.card?.filter};</Text>
      <Text>--size-text: {theme.sizes?.text};</Text>
      <Text>--borderRadius: {theme.layout?.borderRadius};</Text>
      <Text>--gap: {theme.layout?.gap};</Text>
      <Text>--padding: {theme.layout?.padding};</Text>

    </div >
  )
}
