import pkg from '../package.json'
import { Button, Icon, Input, useThemeContext, Text, Box } from "@zionix/ui";

export default function Home() {

  const theme = useThemeContext();

  return (
    <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
        <Text level={1} style={{ color: '#ffffff', background: '#1c1c1c', padding: '8px', borderRadius: '5px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)' }} >ZIONIX ui</Text>
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
      <Text>--size-300: {theme.fontSizes?.size300};</Text>
      <Text>--size-400: {theme.fontSizes?.size400};</Text>
      <Text>--size-500: {theme.fontSizes?.size500};</Text>
      <Text>--size-600: {theme.fontSizes?.size600};</Text>
      <Text>--size-700: {theme.fontSizes?.size700};</Text>
      <Text>--size-800: {theme.fontSizes?.size800};</Text>
      <Text>--size-900: {theme.fontSizes?.size900};</Text>
      <br />
      <Text>--borderRadius: {theme.layout?.borderRadius};</Text>
      <Text>--gap: {theme.layout?.gap};</Text>
      <Text>--padding: {theme.layout?.padding};</Text>

      <Text level={1} >Buttons</Text>
      <Text level={4}>Normal</Text>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Button>Login</Button>
        <Button isPrimary>Login</Button>
        <Button isSecondary>Login</Button>
        <Button isAccent>Login</Button>
        <Button isSuccess>Login</Button>
        <Button isWarning>Login</Button>
        <Button isError>Login</Button>

      </div>
      <Text level={4}>Background transparent with inverted colors</Text>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Button isInverted>Login</Button>
        <Button isPrimary isInverted>Login</Button>
        <Button isSecondary isInverted>Login</Button>
        <Button isAccent isInverted>Login</Button>
        <Button isSuccess isInverted>Login</Button>
        <Button isWarning isInverted>Login</Button>
        <Button isError isInverted>Login</Button>
      </div>

      <Text level={1} >Icon Component</Text>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Icon icon="Alarm" size={48} />
        <Icon icon="Alien" size={48} />
        <Icon icon="Dog" size={48} />
        <Icon icon="House" size={48} />
        <Icon icon="Pencil" size={48} />
        <Icon icon="User" size={48} />
        <Icon icon="Users" size={48} />

        <Icon icon="Alarm" weight="duotone" />
        <Icon icon="Alien" weight="duotone" />
        <Icon icon="Dog" weight="duotone" />
        <Icon icon="House" weight="duotone" />
        <Icon icon="Pencil" weight="duotone" />
        <Icon icon="User" weight="duotone" />
        <Icon icon="Users" weight="duotone" />

        <Icon icon="Alarm" weight="bold" />
        <Icon icon="Alien" weight="bold" />
        <Icon icon="Dog" weight="bold" />
        <Icon icon="House" weight="bold" />
        <Icon icon="Pencil" weight="bold" />
        <Icon icon="User" weight="bold" />
        <Icon icon="Users" weight="bold" />

      </div>


      <Text level={1} >Input Component</Text>
      <div style={{ maxWidth: '450px' }}>
        <Input label="Name" width={150} placeholder='full name here' />
      </div>

      <Text level={1} >Box Component</Text>

      <Box.Container>
        <Text level={1}>Hello, </Text>
        <Box.Row>
          <Input label="Name" />
          <Input label="Last name" />
        </Box.Row>

        <Input label="E-mail" type='email' />

      </Box.Container >

    </div >
  )
}
