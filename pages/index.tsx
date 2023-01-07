import pkg from '../package.json'
import { Button, Icon, Input, useThemeContext, Text, Card } from "@zionix/ui";

export default function Home() {

  const theme = useThemeContext();

  return (
    <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Text level={2} style={{ color: '#ffffff', background: '#1c1c1c', padding: '8px', borderRadius: '5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)' }} >ZIONIX ui</Text>
        <Text style={{ color: 'var(--lightGray)' }}>v{pkg.dependencies["@zionix/ui"].substring(1, 10)}</Text>
      </div>
      <Text level={1} >Typography</Text>
      <Text level={2} secondary>Text h2 element text</Text>
      <Text level={3} accent>Text h3 element text</Text>
      <Text>Simple span element text</Text>
      <Text level={4} color='var(--lightGray)'>Text h4 element text</Text>
      <Text level={5}>Text h5 element text</Text>
      <Text level={6}>Text h6 element text</Text>

      <Text level={1} >css vars</Text>
      <Text>--accent: {theme.colors?.accent}; <div style={{ borderRadius: '50%', background: 'var(--accent)', height: '20px', width: '20px', border: '1px solid #ddd' }} /></Text>
      <Text>--bg : {theme.colors?.body}; <div style={{ borderRadius: '50%', background: 'var(--bg)', height: '20px', width: '20px', border: '1px solid #ddd' }} /></Text>
      <Text>--black: {theme.colors?.black}; <div style={{ borderRadius: '50%', background: 'var(--black)', height: '20px', width: '20px', border: '1px solid #ddd' }} /></Text>
      <Text>--error: {theme.colors?.error}; <div style={{ borderRadius: '50%', background: 'var(--error)', height: '20px', width: '20px', border: '1px solid #ddd' }} /></Text>
      <Text>--lightGray: {theme.colors?.lightGray}; <div style={{ borderRadius: '50%', background: 'var(--lightGray)', height: '20px', width: '20px', border: '1px solid #ddd' }} /></Text>
      <Text>--primary: {theme.colors?.primary}; <div style={{ borderRadius: '50%', background: 'var(--primary)', height: '20px', width: '20px', border: '1px solid #ddd' }} /></Text>
      <Text>--secondary: {theme.colors?.secondary}; <div style={{ borderRadius: '50%', background: 'var(--secondary)', height: '20px', width: '20px', border: '1px solid #ddd' }} /></Text>
      <Text>--success: {theme.colors?.success}; <div style={{ borderRadius: '50%', background: 'var(--success)', height: '20px', width: '20px', border: '1px solid #ddd' }} /></Text>
      <Text>--warning: {theme.colors?.warning}; <div style={{ borderRadius: '50%', background: 'var(--warning)', height: '20px', width: '20px', border: '1px solid #ddd' }} /></Text>
      <Text>--white: {theme.colors?.white}; <div style={{ borderRadius: '50%', background: 'var(--white)', height: '20px', width: '20px', border: '1px solid #ddd' }} /></Text>
      <br />
      <Text>--component-card--filter: {theme.components?.card?.filter};</Text>
      <Text>--borderRadius: {theme.layout?.borderRadius};</Text>
      <Text>--gap: {theme.layout?.gap};</Text>
      <Text>--padding: {theme.layout?.padding};</Text>

      <Text level={1} >Buttons</Text>
      <Text level={4}>Normal</Text>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Button>Login</Button>
        <Button btnPrimary><Icon iconName='LockKeyOpen' />Sign In</Button>
        <Button btnSecondary><Icon iconName='LockKeyOpen' />Login</Button>
        <Button btnAccent>Login</Button>
        <Button btnSuccess>Login</Button>
        <Button btnWarning>Login</Button>
        <Button btnError>Login</Button>

      </div>
      <Text level={4}>Background transparent with inverted colors</Text>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Button btnInverted>Login</Button>
        <Button btnPrimary btnInverted><Icon iconName='LockKeyOpen' />Sign In</Button>
        <Button btnSecondary btnInverted><Icon iconName='LockKeyOpen' />Login</Button>
        <Button btnAccent btnInverted>Login</Button>
        <Button btnSuccess btnInverted>Login</Button>
        <Button btnWarning btnInverted>Login</Button>
        <Button btnError btnInverted>Login</Button>
      </div>

      <Text level={1} >Icon Component</Text>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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


      <Text level={1} >Input Component</Text>
      <div style={{ maxWidth: '450px' }}>
        <Input label="Name" width={150} placeholder='full name here' />
      </div>

      <Text level={1}>Box Component</Text>

      <Card.Container>
        <Text level={1} secondary>Hello, </Text>
        <Card.Row>
          <Input label="Name" />
          <Input label="Last name" />
        </Card.Row>

        <Input label="E-mail" type='email' />

        <Card.Row>
          <Button btnPrimary btnInverted btnBorderNone>
            <Icon iconName='User' />
            Join now
          </Button>
          <Button btnPrimary>
            <Icon iconName='LockKeyOpen' />
            Sign In
          </Button>
        </Card.Row>

      </Card.Container >

    </div >
  )
}
