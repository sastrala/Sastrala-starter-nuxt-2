import AuthRepository from './AuthRepository'
import SettingRepositry from './SettingRepository'

export default (context) => ({
  auth: AuthRepository(context.store),
  setting: SettingRepositry(),
})
