import pkg from '../package.json'
import { Button, Icon, Input, useThemeContext, Text, Card, Marker, Hr } from "@zionix/ui";

export default function Home() {

  const theme = useThemeContext();

  return (
    <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Text level={3} style={{ color: '#ffffff', background: '#1c1c1c', padding: '5px 16px', borderRadius: '5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)' }} >ZIONIX ui</Text>
        <Text style={{ color: 'var(--lightGray)' }}>v{pkg.dependencies["@zionix/ui"].substring(1, 10)}</Text>
      </div>

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
      <Hr />

      <Text level={2} >Icon Component</Text>

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
      <Hr />
      <Text level={2} >Input Component</Text>

      <div style={{ maxWidth: '450px' }}>
        <Input label="Name" width={150} placeholder='full name here' />
      </div>

      <Text level={2}>Card Component</Text>
      <Card.Container maxWidth='650px'>
        <Text level={1} secondary>Hello, </Text>
        <Card.Row>
          <Input label="Name" />
          <Input label="Last name" />
        </Card.Row>

        <Input label="E-mail" type='email' />

        <Card.Row end>
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
      <Hr />

      <Text level={2} >Global vars</Text>

      <Text>--accent: {theme.colors?.accent}; <Marker color='var(--accent)' /> </Text>
      <Text>--bg : {theme.colors?.body}; <Marker color='var(--bg)' /> </Text>
      <Text>--black: {theme.colors?.black}; <Marker color='var(--black)' /></Text>
      <Text>--error: {theme.colors?.error}; <Marker color='var(--error)' /></Text>
      <Text>--lightGray: {theme.colors?.lightGray}; <Marker color='var(--lightGray)' /></Text>
      <Text>--primary: {theme.colors?.primary}; <Marker color='var(--primary)' />  </Text>
      <Text>--secondary: {theme.colors?.secondary}; <Marker color='var(--secondary)' /> </Text>
      <Text>--success: {theme.colors?.success}; <Marker color='var(--success)' /> </Text>
      <Text>--warning: {theme.colors?.warning}; <Marker color='var(--warning)' /> </Text>
      <Text>--white: {theme.colors?.white}; <Marker color='var(--white)' /> </Text>
      <br />
      <Text>--component-card--filter: {theme.components?.card?.filter};</Text>
      <Text>----size-text: {theme.sizes?.text};</Text>
      <Text>--borderRadius: {theme.layout?.borderRadius};</Text>
      <Text>--gap: {theme.layout?.gap};</Text>
      <Text>--padding: {theme.layout?.padding};</Text>

    </div >
  )
}
