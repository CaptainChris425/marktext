import * as actions from '../actions/theme'

export default function (userPreference) {
  const { theme } = userPreference.getAll()
  return {
    label: '&Theme',
    id: 'themeMenu',
    submenu: [{
      label: 'Cadmium Light',
      type: 'radio',
      id: 'light',
      checked: theme === 'light',
      click () {
        actions.selectTheme('light')
      }
    }, {
      label: 'Dark',
      type: 'radio',
      id: 'dark',
      checked: theme === 'dark',
      click () {
        actions.selectTheme('dark')
      }
    }, {
      label: 'Graphite Light',
      type: 'radio',
      id: 'graphite',
      checked: theme === 'graphite',
      click () {
        actions.selectTheme('graphite')
      }
    }, {
      label: 'Material Dark',
      type: 'radio',
      id: 'material-dark',
      checked: theme === 'material-dark',
      click () {
        actions.selectTheme('material-dark')
      }
    }, {
      label: 'One Dark',
      type: 'radio',
      id: 'one-dark',
      checked: theme === 'one-dark',
      click () {
        actions.selectTheme('one-dark')
      }
    }, {
      label: 'Ulysses Light',
      type: 'radio',
      id: 'ulysses',
      checked: theme === 'ulysses',
      click () {
        actions.selectTheme('ulysses')
      }
    }]
  }
}
