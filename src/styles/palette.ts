import createPalette from '@material-ui/core/styles/createPalette'

const palette = createPalette({
  primary: {
    main: '#3e61f2',
    dark: '#223586',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#233342',
    dark: '#2a2226',
  },
  error: {
    main: '#942937',
  },
  text: {
    primary: '#595959',
    secondary: '#999999',
    disabled: '#cccccc',
  },
  background: {
    default: '#fff',
  },
})

export default palette
