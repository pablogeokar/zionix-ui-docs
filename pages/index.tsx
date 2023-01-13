import pkg from '../package.json'
import styles from '../styles/zionix.module.css'
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

      <Text level={1} fontWeight={800}>Typography h1</Text>
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
      <Hr />

      <Text level={2} >Buttons</Text>

      <Text level={4}>Normal</Text>
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
      <Hr />

      <Text level={2} >Icon</Text>

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

      <Text level={2} >Marker</Text>
      <div style={{ display: 'flex', gap: '1.6rem', margin: '1.6rem 0' }}>
        <Marker />
        <Marker primary />
        <Marker secondary />
        <Marker accent />
        <Marker success />
        <Marker warning />
        <Marker error />
        <Marker color='#8e44ad' />
      </div>
      <Hr />

      <Text level={2} >Tabs</Text>
      <Tabs title='#Tab Title' tabs={[
        { iconName: 'Monitor', label: 'Design', component: (<Text>Content Tab #1</Text>) },
        { iconName: 'Code', label: 'Code', component: (<Text>Content Tab #2</Text>) }]} />
      <Hr />

      <Text level={2} >Input</Text>

      <div style={{ maxWidth: '450px' }}>
        <Input label="Name" width={150} placeholder='full name here' />
      </div>

      <Text level={2}>Form</Text>
      <Form.Container method='post' maxWidth='650px'>
        <Text level={2} separator>
          <Icon iconName='UserPlus' /> New user
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

      <Text level={2}>Card</Text>
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

      <Text level={2} >css vars</Text>

      <Text>--accent: {theme.colors?.accent}; <Marker color='var(--accent)' /> </Text>
      <Text>--bg : {theme.colors?.body}; <Marker color='var(--bg)' /> </Text>
      <Text>--black: {theme.colors?.black}; <Marker color='var(--black)' /></Text>
      <Text>--danger: {theme.colors?.danger}; <Marker color='var(--danger)' /></Text>
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
